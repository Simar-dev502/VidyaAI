import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

const subjectInfo = {
  Math:    { icon: '📐', color: 'from-blue-500 to-blue-600', desc: 'Numbers, Algebra, Geometry and more' },
  Science: { icon: '🔬', color: 'from-green-500 to-green-600', desc: 'Physics, Chemistry, Biology basics' },
  English: { icon: '📖', color: 'from-purple-500 to-purple-600', desc: 'Grammar, Reading, Writing skills' },
  Hindi:   { icon: '🇮🇳', color: 'from-orange-500 to-orange-600', desc: 'व्याकरण, पठन, लेखन कौशल' },
  Social:  { icon: '🌍', color: 'from-red-500 to-red-600', desc: 'History, Geography, Civics' },
};

function Courses({ user }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${API_URL}/courses`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(res.data.subjects);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) return <div className="text-center mt-20 text-gray-500">Loading courses...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">All Courses 📚</h1>
      <p className="text-gray-500 mb-8">Choose a subject to start learning</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => {
          const info = subjectInfo[course.name] || { icon: '📘', color: 'from-gray-500 to-gray-600', desc: '' };
          const isWeak = user?.weakSubjects?.includes(course.name);
          return (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className={`bg-gradient-to-r ${info.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{info.icon}</div>
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p className="text-sm opacity-80 mt-1">{info.desc}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600 text-sm">{course.chapters} chapters</span>
                  {isWeak && <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Needs Focus ⚡</span>}
                </div>
                <div className="flex gap-2">
                  <Link to={`/courses/${course.name}`}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-lg text-sm font-semibold transition">
                    Study Now
                  </Link>
                  <Link to={`/quiz/${course.name}`}
                    className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 text-center py-2 rounded-lg text-sm font-semibold transition">
                    Take Quiz
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
