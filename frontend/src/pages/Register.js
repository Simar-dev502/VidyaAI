import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

const SUBJECTS = ['Math', 'Science', 'English', 'Hindi', 'Social'];
const CLASSES = Array.from({ length: 12 }, (_, i) => String(i + 1));

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', studentClass: '6', weakSubjects: [] });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleSubject = (sub) => {
    setForm(f => ({
      ...f,
      weakSubjects: f.weakSubjects.includes(sub)
        ? f.weakSubjects.filter(s => s !== sub)
        : [...f.weakSubjects, sub]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await axios.post(`${API_URL}/register`, form);
      setSuccess('Registered! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Join VidyaAI 🎓</h2>

        {error && <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4">{error}</div>}
        {success && <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-4">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your name" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="your@email.com" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Min 6 characters" required minLength="6" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Class</label>
            <select value={form.studentClass} onChange={e => setForm({...form, studentClass: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
              {CLASSES.map(c => <option key={c} value={c}>Class {c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Weak Subjects (select to get extra help)</label>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS.map(sub => (
                <button type="button" key={sub}
                  onClick={() => toggleSubject(sub)}
                  className={`px-4 py-1.5 rounded-full border-2 text-sm font-medium transition ${
                    form.weakSubjects.includes(sub)
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-gray-300 text-gray-600 hover:border-indigo-400'
                  }`}>
                  {sub}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition disabled:bg-gray-400">
            {loading ? 'Creating Account...' : 'Register Free 🚀'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
