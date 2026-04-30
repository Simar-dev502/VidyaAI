import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

function Quiz() {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const fetch = async () => {
      try {
        const res = await axios.get(`${API_URL}/quiz/${subject}`, { headers });
        setQuestions(res.data.questions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [subject]);

  const selectAnswer = (qId, optIdx) => {
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all questions!');
      return;
    }
    setSubmitting(true);
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const answersArray = questions.map((_, i) => answers[i] ?? -1);
      const res = await axios.post(`${API_URL}/quiz/${subject}/submit`, { answers: answersArray }, { headers });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center mt-20 text-gray-500">Loading quiz...</div>;

  // Results screen
  if (result) {
    const pct = result.percentage;
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
    const msg = pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good job!' : pct >= 40 ? 'Keep practicing!' : 'Need more study!';

    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center mb-6">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{msg}</h2>
          <div className="text-5xl font-bold text-indigo-600 mb-2">{pct}%</div>
          <p className="text-gray-500">{result.score} out of {result.total} correct</p>

          {/* Score bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 my-4">
            <div className={`h-4 rounded-full transition-all ${pct >= 60 ? 'bg-green-500' : 'bg-orange-500'}`}
              style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* Detailed results */}
        <div className="space-y-3 mb-6">
          {result.results.map((r, i) => (
            <div key={i} className={`bg-white rounded-xl p-4 shadow border-l-4 ${r.correct ? 'border-green-400' : 'border-red-400'}`}>
              <p className="font-semibold text-gray-800 mb-2">Q{i+1}: {r.question}</p>
              <p className={`text-sm ${r.correct ? 'text-green-600' : 'text-red-600'}`}>
                Your answer: {r.yourAnswer} {r.correct ? '✓' : '✗'}
              </p>
              {!r.correct && <p className="text-sm text-green-600">Correct: {r.correctAnswer}</p>}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => { setResult(null); setAnswers({}); setCurrent(0); }}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
            Retry Quiz 🔄
          </button>
          <Link to={`/courses/${subject}`}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition text-center">
            Study More 📚
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link to={`/courses/${subject}`} className="text-indigo-600 hover:underline text-sm">← Back</Link>
          <h1 className="text-2xl font-bold text-gray-800">{subject} Quiz 🧠</h1>
        </div>
        <span className="text-gray-500 text-sm">{current + 1} / {questions.length}</span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-indigo-500 h-2 rounded-full transition-all"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
        <p className="text-xl font-semibold text-gray-800 mb-6">{q?.question}</p>
        <div className="space-y-3">
          {q?.options.map((opt, i) => (
            <button key={i} onClick={() => selectAnswer(current, i)}
              className={`w-full text-left px-5 py-3 rounded-xl border-2 transition font-medium ${
                answers[current] === i
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 hover:border-indigo-300 text-gray-700'
              }`}>
              <span className="mr-3 font-bold text-indigo-400">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        {current > 0 && (
          <button onClick={() => setCurrent(c => c - 1)}
            className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:border-indigo-400 transition">
            ← Previous
          </button>
        )}
        {current < questions.length - 1 ? (
          <button onClick={() => setCurrent(c => c + 1)} disabled={answers[current] === undefined}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition disabled:bg-gray-300">
            Next →
          </button>
        ) : (
          <button onClick={handleSubmit} disabled={submitting}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition disabled:bg-gray-400">
            {submitting ? 'Submitting...' : 'Submit Quiz ✓'}
          </button>
        )}
      </div>

      {/* Answer dots */}
      <div className="flex justify-center gap-2 mt-4">
        {questions.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-indigo-600' : answers[i] !== undefined ? 'bg-green-400' : 'bg-gray-300'
            }`} />
        ))}
      </div>
    </div>
  );
}

export default Quiz;
