import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

function ChapterView() {
  const { subject } = useParams();
  const [chapters, setChapters] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [studentClass, setStudentClass] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const fetch = async () => {
      try {
        const res = await axios.get(`${API_URL}/courses/${subject}`, { headers });
        setChapters(res.data.chapters);
        setSelected(res.data.chapters[0]);
        setStudentClass(res.data.studentClass || '');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [subject]);

  const markComplete = async () => {
    if (!selected || selected.completed) return;
    setCompleting(true);
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    try {
      await axios.post(`${API_URL}/courses/${subject}/complete/${selected.id}`, {}, { headers });
      setChapters(prev => prev.map(ch => ch.id === selected.id ? { ...ch, completed: true } : ch));
      setSelected(prev => ({ ...prev, completed: true }));
    } catch (err) {
      console.error(err);
    } finally {
      setCompleting(false);
    }
  };

  if (loading) return <div className="text-center mt-20 text-gray-500">Loading chapters...</div>;

  const completed = chapters.filter(c => c.completed).length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link to="/courses" className="text-indigo-600 hover:underline text-sm">← Back to Courses</Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">{subject} {studentClass && <span className="text-lg text-indigo-500 font-normal">— Class {studentClass}</span>}</h1>
          <p className="text-gray-500">{completed}/{chapters.length} chapters completed</p>
        </div>
        <Link to={`/quiz/${subject}`}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition">
          Take Quiz 🧠
        </Link>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
        <div className="bg-indigo-500 h-3 rounded-full transition-all"
          style={{ width: `${chapters.length > 0 ? (completed / chapters.length) * 100 : 0}%` }} />
      </div>

      <div className="flex gap-6">
        {/* Chapter List */}
        <div className="w-64 flex-shrink-0">
          <h3 className="font-bold text-gray-700 mb-3">Chapters</h3>
          <div className="space-y-2">
            {chapters.map((ch, i) => (
              <button key={i} onClick={() => setSelected(ch)}
                className={`w-full text-left px-4 py-3 rounded-lg transition text-sm ${
                  selected?.id === ch.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-indigo-50 text-gray-700 shadow-sm'
                }`}>
                <div className="flex items-center justify-between">
                  <span>{ch.title}</span>
                  {ch.completed && <span className="text-green-400">✓</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Content */}
        {selected && (
          <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selected.title}</h2>
              {selected.completed
                ? <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">✓ Completed</span>
                : <button onClick={markComplete} disabled={completing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm transition disabled:bg-gray-400">
                    {completing ? 'Saving...' : 'Mark Complete ✓'}
                  </button>
              }
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">📝 Notes</h3>
              <p className="text-gray-700 leading-relaxed bg-indigo-50 p-4 rounded-lg">{selected.notes}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">💡 Example</h3>
              <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg">{selected.example}</p>
            </div>

            {selected.keyPoints && selected.keyPoints.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">🔑 Key Points</h3>
                <ul className="bg-orange-50 p-4 rounded-lg space-y-2">
                  {selected.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <Link to="/ask"
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                🤖 Ask AI about this topic
              </Link>
              <Link to={`/quiz/${subject}`}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                🧠 Practice Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChapterView;
