# 📚 VidyaAI — Free AI-Powered Educational Platform

A full-stack educational web app like Byju's, completely free. Built with React + Node.js + MongoDB.

## 🌐 Live Demo
- **Frontend (Vercel):** _your-vercel-url_
- **Backend (Render):** _your-render-url_

## ✨ Features
- 🔐 Register/Login with JWT auth
- 📚 CBSE courses for Classes 6–12 (Math, Science, English, Hindi, Social)
- 🤖 AI Tutor powered by Gemini API (10 Indian languages)
- 🧠 Quiz system with score tracking
- 📐 Maths Formula Sheet (Class 10 & 12)
- 🎤 Voice input (Web Speech API)
- 📊 Dashboard with progress tracking

## 🛠️ Tech Stack
- **Frontend:** React.js + Tailwind CSS → Vercel
- **Backend:** Node.js + Express → Render
- **Database:** MongoDB Atlas (free)
- **AI:** Google Gemini API

---

## 🚀 Local Setup

### Backend
```bash
cd backend
npm install
# Create .env file (see backend/.env.example)
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## ☁️ Deployment

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/VidyaAI.git
git push -u origin main
```

### Step 2 — Deploy Backend on Render (free)
1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repo
3. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add Environment Variables:
   - `GEMINI_API_KEY` = your key from [aistudio.google.com](https://aistudio.google.com/app/apikey)
   - `JWT_SECRET` = any random string
   - `MONGO_URI` = your MongoDB Atlas connection string
   - `PORT` = 5000
5. Deploy → copy the URL (e.g. `https://vidyaai-backend.onrender.com`)

### Step 3 — Deploy Frontend on Vercel (free)
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Settings:
   - **Root Directory:** `frontend`
   - **Framework:** Create React App
4. Add Environment Variable:
   - `REACT_APP_API_URL` = your Render backend URL
5. Deploy!

### Step 4 — MongoDB Atlas (free database)
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) → Free tier
2. Create cluster → Connect → Get connection string
3. Add to Render env vars as `MONGO_URI`

---

## 📁 Project Structure
```
VidyaAI/
├── backend/
│   ├── server.js        # Express API
│   ├── cbseData.js      # CBSE course content
│   ├── package.json
│   └── .env             # Local env (not committed)
├── frontend/
│   ├── src/
│   │   ├── pages/       # React pages
│   │   ├── components/  # Navbar
│   │   ├── config.js    # API URL config
│   │   └── App.js
│   ├── .env             # REACT_APP_API_URL
│   └── vercel.json
├── render.yaml
└── README.md
```
