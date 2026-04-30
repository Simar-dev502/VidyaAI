// ============================================================
// VidyaAI Backend — Node.js + Express + MongoDB (Mongoose)
// Falls back to in-memory storage if MongoDB is unavailable
// ============================================================
const express  = require('express');
const cors     = require('cors');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const axios    = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET     = process.env.JWT_SECRET     || 'vidyaai-secret-key-2024';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MONGO_URI      = process.env.MONGO_URI      || 'mongodb://localhost:27017/vidyaai';

// ─── In-Memory Fallback Storage ──────────────────────────────────────────────
// Used when MongoDB is not available
let useMemory = false;
const memDB = {
  users:        [],   // { id, name, email, password, studentClass, weakSubjects, completedChapters }
  quizScores:   [],   // { id, userId, subject, score, total, timestamp }
  interactions: []    // { id, userId, question, language, subject, timestamp }
};
let memIdCounter = 1;
const newId = () => String(memIdCounter++);

// ─── MongoDB Connection ───────────────────────────────────────────────────────
mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('✅ MongoDB connected:', MONGO_URI);
    useMemory = false;
  })
  .catch(err => {
    console.warn('⚠️  MongoDB not available:', err.message);
    console.warn('   Running in IN-MEMORY mode (data resets on restart)');
    console.warn('   To persist data, install MongoDB or use Atlas (see README)');
    useMemory = true;
  });

// ─── Mongoose Schemas & Models ────────────────────────────────────────────────

const userSchema = new mongoose.Schema({
  name:              { type: String, required: true, trim: true },
  email:             { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:          { type: String, required: true },
  studentClass:      { type: String, default: '6' },
  weakSubjects:      { type: [String], default: [] },
  completedChapters: { type: Map, of: [Number], default: {} },
  createdAt:         { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

const quizScoreSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject:   { type: String, required: true },
  score:     { type: Number, required: true },
  total:     { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});
const QuizScore = mongoose.model('QuizScore', quizScoreSchema);

const interactionSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question:  { type: String, required: true },
  language:  { type: String, default: 'English' },
  subject:   { type: String, default: 'General' },
  timestamp: { type: Date, default: Date.now }
});
const Interaction = mongoose.model('Interaction', interactionSchema);

// ─── CBSE Data ────────────────────────────────────────────────────────────────
const { courseData, quizData } = require('./cbseData');

function getCourseForClass(cls) {
  return courseData[String(cls)] || courseData['6'];
}
function getQuizForClass(cls) {
  return quizData[String(cls)] || quizData['6'];
}

// ─── Data Access Layer (MongoDB or Memory) ────────────────────────────────────

const db = {
  // ── Users ──
  async findUserByEmail(email) {
    if (useMemory) return memDB.users.find(u => u.email === email.toLowerCase()) || null;
    return User.findOne({ email: email.toLowerCase() });
  },
  async findUserById(id) {
    if (useMemory) return memDB.users.find(u => u.id === id) || null;
    return User.findById(id);
  },
  async createUser({ name, email, password, studentClass, weakSubjects }) {
    if (useMemory) {
      const user = {
        id: newId(), name, email: email.toLowerCase(), password,
        studentClass: studentClass || '6',
        weakSubjects: weakSubjects || [],
        completedChapters: {},
        createdAt: new Date()
      };
      memDB.users.push(user);
      return user;
    }
    const user = new User({ name, email, password, studentClass, weakSubjects });
    await user.save();
    return user;
  },
  async saveUser(user) {
    if (useMemory) return user; // already mutated in-place
    await user.save();
    return user;
  },
  getUserId(user) {
    return useMemory ? user.id : user._id.toString();
  },
  getCompletedChapters(user, subject) {
    if (useMemory) return user.completedChapters[subject] || [];
    return (user.completedChapters.get ? user.completedChapters.get(subject) : user.completedChapters[subject]) || [];
  },
  setCompletedChapters(user, subject, list) {
    if (useMemory) { user.completedChapters[subject] = list; return; }
    user.completedChapters.set(subject, list);
  },

  // ── Quiz Scores ──
  async createQuizScore({ userId, subject, score, total }) {
    if (useMemory) {
      const s = { id: newId(), userId, subject, score, total, timestamp: new Date() };
      memDB.quizScores.push(s);
      return s;
    }
    return QuizScore.create({ userId, subject, score, total });
  },
  async getQuizScores(userId) {
    if (useMemory) return memDB.quizScores.filter(s => s.userId === userId).sort((a,b) => b.timestamp - a.timestamp);
    return QuizScore.find({ userId }).sort({ timestamp: -1 });
  },

  // ── Interactions ──
  async createInteraction({ userId, question, language, subject }) {
    if (useMemory) {
      const i = { id: newId(), userId, question, language, subject, timestamp: new Date() };
      memDB.interactions.push(i);
      return i;
    }
    return Interaction.create({ userId, question, language, subject });
  },
  async getInteractions(userId) {
    if (useMemory) return memDB.interactions.filter(i => i.userId === userId).sort((a,b) => b.timestamp - a.timestamp);
    return Interaction.find({ userId }).sort({ timestamp: -1 });
  }
};

// ─── JWT Auth Middleware ──────────────────────────────────────────────────────
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// ─── AUTH ROUTES ──────────────────────────────────────────────────────────────

// POST /register
app.post('/register', async (req, res) => {
  try {
    const { name, email, password, studentClass, weakSubjects } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Name, email and password are required' });

    const existing = await db.findUserByEmail(email);
    if (existing)
      return res.status(400).json({ error: 'An account with this email already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await db.createUser({ name, email, password: hashedPassword, studentClass, weakSubjects });

    console.log(`[Register] New user: ${email} (Class ${studentClass || '6'}) [${useMemory ? 'memory' : 'MongoDB'}]`);
    res.status(201).json({ message: 'Account created successfully! Please login.' });

  } catch (err) {
    console.error('[Register Error]', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// POST /login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await db.findUserByEmail(email);
    if (!user)
      return res.status(401).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid email or password' });

    const userId = db.getUserId(user);
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

    console.log(`[Login] User: ${user.email} [${useMemory ? 'memory' : 'MongoDB'}]`);
    res.json({
      token,
      user: {
        id:           userId,
        name:         user.name,
        email:        user.email,
        studentClass: user.studentClass,
        weakSubjects: user.weakSubjects
      }
    });

  } catch (err) {
    console.error('[Login Error]', err.message);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// ─── COURSE ROUTES ────────────────────────────────────────────────────────────

// GET /courses
app.get('/courses', authMiddleware, async (req, res) => {
  try {
    const user = await db.findUserById(req.userId);
    const classCourses = getCourseForClass(user?.studentClass || '6');
    const subjects = Object.keys(classCourses).map(subject => ({
      name:     subject,
      chapters: classCourses[subject].chapters.length
    }));
    res.json({ subjects, studentClass: user?.studentClass || '6' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load courses' });
  }
});

// GET /courses/:subject
app.get('/courses/:subject', authMiddleware, async (req, res) => {
  try {
    const { subject } = req.params;
    const user = await db.findUserById(req.userId);
    const classCourses = getCourseForClass(user?.studentClass || '6');
    const data = classCourses[subject];
    if (!data) return res.status(404).json({ error: 'Subject not found' });

    const completed = db.getCompletedChapters(user, subject);
    res.json({
      subject,
      studentClass: user?.studentClass || '6',
      chapters: data.chapters.map(ch => ({
        ...ch,
        completed: completed.includes(ch.id)
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load subject' });
  }
});

// POST /courses/:subject/complete/:chapterId
app.post('/courses/:subject/complete/:chapterId', authMiddleware, async (req, res) => {
  try {
    const { subject, chapterId } = req.params;
    const id = parseInt(chapterId);
    const user = await db.findUserById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const current = db.getCompletedChapters(user, subject);
    if (!current.includes(id)) {
      current.push(id);
      db.setCompletedChapters(user, subject, current);
      await db.saveUser(user);
    }

    console.log(`[Progress] ${user.email} completed ${subject} ch.${id}`);
    res.json({ message: 'Chapter marked complete' });
  } catch (err) {
    console.error('[Complete Chapter Error]', err.message);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// ─── QUIZ ROUTES ──────────────────────────────────────────────────────────────

// GET /quiz/:subject
app.get('/quiz/:subject', authMiddleware, async (req, res) => {
  try {
    const { subject } = req.params;
    const user = await db.findUserById(req.userId);
    const classQuiz = getQuizForClass(user?.studentClass || '6');
    const questions = classQuiz[subject];
    if (!questions) return res.status(404).json({ error: 'Quiz not found for this subject' });

    const safeQuestions = questions.map((q, i) => ({
      id:       i,
      question: q.q,
      options:  q.options
    }));
    res.json({ subject, studentClass: user?.studentClass || '6', questions: safeQuestions });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load quiz' });
  }
});

// POST /quiz/:subject/submit
app.post('/quiz/:subject/submit', authMiddleware, async (req, res) => {
  try {
    const { subject } = req.params;
    const { answers } = req.body;
    const user = await db.findUserById(req.userId);
    const classQuiz = getQuizForClass(user?.studentClass || '6');
    const questions = classQuiz[subject];
    if (!questions) return res.status(404).json({ error: 'Quiz not found' });

    let score = 0;
    const results = questions.map((q, i) => {
      const correct = answers[i] === q.answer;
      if (correct) score++;
      return {
        question:      q.q,
        yourAnswer:    q.options[answers[i]] || 'Not answered',
        correctAnswer: q.options[q.answer],
        correct
      };
    });

    await db.createQuizScore({ userId: req.userId, subject, score, total: questions.length });

    const percentage = Math.round((score / questions.length) * 100);
    console.log(`[Quiz] ${user.email} scored ${score}/${questions.length} (${percentage}%) in ${subject}`);
    res.json({ score, total: questions.length, percentage, results });
  } catch (err) {
    console.error('[Quiz Submit Error]', err.message);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

// ─── AI TUTOR ROUTE ───────────────────────────────────────────────────────────

// POST /ask
app.post('/ask', authMiddleware, async (req, res) => {
  try {
    const { question, language = 'English', subject = 'General' } = req.body;
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const user = await db.findUserById(req.userId);
    const studentClass = user?.studentClass || '6';

    await db.createInteraction({ userId: req.userId, question, language, subject });

    const answer = await callGemini(question, language, subject, studentClass);
    res.json({ answer });
  } catch (err) {
    console.error('[Ask Error]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Gemini API call with retry logic + smart fallback
async function callGemini(question, language, subject, studentClass) {
  const prompt = `You are VidyaAI, a friendly AI tutor for Class ${studentClass} students in India.
Answer this ${subject} question in ${language} language.
The student is in Class ${studentClass}, so use appropriate level of explanation.
Use simple words a school student can understand.
Structure your answer clearly with:
1. Simple explanation (2-3 lines)
2. One easy real-life example
3. Key point to remember

Question: ${question}`;

  // Try all available Gemini models
  const models = [
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash',
    'gemini-1.5-flash-latest',
    'gemini-1.5-pro-latest'
  ];

  let lastError = '';

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await axios.post(url, {
          contents: [{ parts: [{ text: prompt }] }]
        }, { timeout: 30000 });
        const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          console.log(`[Gemini] ✅ Success with model: ${model}`);
          return text;
        }
        throw new Error('Empty response from AI');
      } catch (err) {
        const status = err.response?.status;
        lastError = `model=${model} status=${status} msg=${err.message}`;
        console.error(`[Gemini] ❌ ${lastError}`);
        if (status === 429 || status === 503) {
          // Rate limited — wait and retry
          await new Promise(r => setTimeout(r, (attempt + 1) * 2000));
          continue;
        }
        if (status === 400 || status === 403 || status === 404) break; // bad key or model, try next model
        if (attempt === 0) { await new Promise(r => setTimeout(r, 1000)); continue; }
        break;
      }
    }
  }

  // All models failed — return a helpful offline answer
  console.warn('[Gemini] All models failed, using offline fallback. Last error:', lastError);
  return generateOfflineAnswer(question, subject, studentClass, language);
}

// Offline fallback — gives a helpful response when AI API is unavailable
function generateOfflineAnswer(question, subject, studentClass, language) {
  const q = question.toLowerCase();

  // Subject-specific offline answers
  const answers = {
    Math: `📐 **Math Answer (Offline Mode)**\n\nYour question: "${question}"\n\n**Explanation:**\nFor Class ${studentClass} Math, here are the key steps to solve this type of problem:\n1. Read the question carefully and identify what is given and what is asked.\n2. Choose the right formula or method.\n3. Solve step by step, showing all working.\n\n**Example:** Always write down the formula first, then substitute values.\n\n**Key Point:** Practice similar problems daily to build confidence!\n\n⚠️ *Note: AI service is temporarily unavailable. Please try again in a few minutes for a detailed answer.*`,

    Science: `🔬 **Science Answer (Offline Mode)**\n\nYour question: "${question}"\n\n**Explanation:**\nFor Class ${studentClass} Science, this topic involves understanding natural phenomena through observation and experimentation.\n\n1. Start with the basic definition of the concept.\n2. Understand the process or mechanism involved.\n3. Connect it to real-life examples around you.\n\n**Example:** Science is everywhere — from cooking to weather to your own body!\n\n**Key Point:** Always relate science concepts to things you see in daily life.\n\n⚠️ *Note: AI service is temporarily unavailable. Please try again in a few minutes for a detailed answer.*`,

    default: `🤖 **VidyaAI Answer (Offline Mode)**\n\nYour question: "${question}"\n\n**Explanation:**\nThis is a great question for Class ${studentClass} students!\n\nHere's how to approach it:\n1. Break the question into smaller parts.\n2. Think about what you already know about this topic.\n3. Look for connections to things you've studied before.\n\n**Example:** Every big concept can be understood with a simple real-life example.\n\n**Key Point:** Keep asking questions — curiosity is the best way to learn!\n\n⚠️ *Note: AI service is temporarily unavailable. The Gemini API quota may be exceeded. Please try again in a few minutes or get a new API key from https://aistudio.google.com/app/apikey*`
  };

  return answers[subject] || answers.default;
}

// ─── DASHBOARD ROUTE ──────────────────────────────────────────────────────────

// GET /dashboard
app.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const user = await db.findUserById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const [userScores, userInteractions] = await Promise.all([
      db.getQuizScores(req.userId),
      db.getInteractions(req.userId)
    ]);

    const classCourses = getCourseForClass(user.studentClass);
    const progress = Object.keys(classCourses).map(subject => {
      const total     = classCourses[subject].chapters.length;
      const completed = db.getCompletedChapters(user, subject);
      const scores    = userScores.filter(s => s.subject === subject);
      const avgScore  = scores.length
        ? Math.round(scores.reduce((a, b) => a + (b.score / b.total) * 100, 0) / scores.length)
        : 0;
      return {
        subject,
        completed: completed.length,
        total,
        avgScore,
        isWeak: user.weakSubjects.includes(subject)
      };
    });

    const recentScores = userScores.slice(0, 5).map(s => ({
      subject:    s.subject,
      score:      s.score,
      total:      s.total,
      percentage: Math.round((s.score / s.total) * 100),
      timestamp:  s.timestamp
    }));

    res.json({
      user: {
        name:         user.name,
        studentClass: user.studentClass,
        weakSubjects: user.weakSubjects
      },
      progress,
      totalQuizzes:   userScores.length,
      totalQuestions: userInteractions.length,
      recentScores,
      storageMode:    useMemory ? 'memory' : 'mongodb'
    });
  } catch (err) {
    console.error('[Dashboard Error]', err.message);
    res.status(500).json({ error: 'Failed to load dashboard' });
  }
});

// ─── HEALTH CHECK ─────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  const dbStatus = useMemory ? 'in-memory' : (mongoose.connection.readyState === 1 ? 'mongodb-connected' : 'mongodb-disconnected');
  res.json({ status: 'running', database: dbStatus });
});

// ─── START SERVER ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 VidyaAI Server running on http://localhost:${PORT}`);
  console.log(`📚 Subjects: Math, Science, English, Hindi, Social`);
  console.log(`🤖 AI Tutor: Gemini API`);
  console.log(`🗄️  Storage: ${useMemory ? 'In-Memory (MongoDB not found)' : 'MongoDB'}\n`);
});
