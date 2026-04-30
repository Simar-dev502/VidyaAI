import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

function Dashboard({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${API_URL}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-64 mt-20">
      <div className="text-center">
        <div className="text-4xl mb-3">⏳</div>
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );

  const subjectIcons = { Math: '📐', Science: '🔬', English: '📖', Hindi: '🇮🇳', Social: '🌍' };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8">
        <h1 className="text-3xl font-bold mb-1">Hello, {data?.user?.name}! 👋</h1>
        <p className="text-indigo-200">Class {data?.user?.studentClass} Student</p>
        {data?.user?.weakSubjects?.length > 0 && (
          <p className="mt-2 text-sm text-indigo-100">
            Focus areas: {data.user.weakSubjects.join(', ')} 💪
          </p>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Quizzes Taken', value: data?.totalQuizzes || 0, icon: '🧠' },
          { label: 'Questions Asked', value: data?.totalQuestions || 0, icon: '💬' },
          { label: 'Subjects', value: data?.progress?.length || 0, icon: '📚' },
          { label: 'Chapters Done', value: data?.progress?.reduce((a, b) => a + b.completed, 0) || 0, icon: '✅' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-3xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-indigo-700">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Subject Progress */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Progress</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {data?.progress?.map((sub, i) => (
          <div key={i} className={`bg-white rounded-xl shadow p-5 border-l-4 ${sub.isWeak ? 'border-orange-400' : 'border-indigo-400'}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-2xl mr-2">{subjectIcons[sub.subject]}</span>
                <span className="text-lg font-bold text-gray-800">{sub.subject}</span>
                {sub.isWeak && <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Needs Focus</span>}
              </div>
              <span className="text-sm text-gray-500">{sub.completed}/{sub.total} chapters</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition-all"
                style={{ width: `${sub.total > 0 ? (sub.completed / sub.total) * 100 : 0}%` }}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Quiz avg: {sub.avgScore}%</span>
              <div className="flex gap-2">
                <Link to={`/courses/${sub.subject}`}
                  className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition">
                  Study
                </Link>
                <Link to={`/quiz/${sub.subject}`}
                  className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition">
                  Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/ask" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-5 text-center transition">
          <div className="text-3xl mb-2">🤖</div>
          <div className="font-bold">Ask AI Tutor</div>
          <div className="text-sm text-indigo-200 mt-1">Get instant answers</div>
        </Link>
        <Link to="/courses" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-5 text-center transition">
          <div className="text-3xl mb-2">📚</div>
          <div className="font-bold">Browse Courses</div>
          <div className="text-sm text-purple-200 mt-1">All subjects & chapters</div>
        </Link>
        <Link to={`/quiz/${data?.user?.weakSubjects?.[0] || 'Math'}`}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-5 text-center transition">
          <div className="text-3xl mb-2">🧠</div>
          <div className="font-bold">Take a Quiz</div>
          <div className="text-sm text-green-200 mt-1">Test your knowledge</div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
