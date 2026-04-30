import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { icon: '🎓', title: 'Free Courses', desc: 'All subjects for Class 1-12, completely free forever' },
    { icon: '🤖', title: 'AI Tutor', desc: 'Ask any question, get simple answers in your language' },
    { icon: '🎤', title: 'Voice Input', desc: 'Speak your questions using microphone' },
    { icon: '📊', title: 'Track Progress', desc: 'See your scores, completed chapters and weak areas' },
    { icon: '🧠', title: 'Smart Quizzes', desc: 'Auto-generated MCQ quizzes after each chapter' },
    { icon: '🌍', title: 'Multilingual', desc: 'Learn in Hindi, English, Gujarati and more' },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">VidyaAI 📚</h1>
          <p className="text-2xl mb-3 text-indigo-200">Multilingual AI Tutor for Every Student</p>
          <p className="text-lg mb-8 text-indigo-100">
            Free education platform like Byju's — with AI-powered tutoring, quizzes, and progress tracking.
            Learn in Hindi, English or your own language!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-lg text-lg font-bold transition">
              Start Learning Free 🚀
            </Link>
            <Link to="/login" className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Everything You Need to Learn</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects */}
      <div className="bg-indigo-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Subjects Available</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['📐 Math', '🔬 Science', '📖 English', '🇮🇳 Hindi', '🌍 Social Studies'].map((s, i) => (
              <span key={i} className="bg-white px-6 py-3 rounded-full shadow text-indigo-700 font-semibold text-lg">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-700 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-indigo-200 mb-6">Join thousands of students learning for free with AI</p>
        <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-lg text-lg font-bold transition">
          Register Now — It's Free!
        </Link>
      </div>
    </div>
  );
}

export default Home;
