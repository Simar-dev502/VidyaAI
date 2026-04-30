import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import API_URL from '../config';

const LANGUAGES = ['English', 'Hindi', 'Gujarati', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Urdu', 'Punjabi', 'Odia'];
const SUBJECTS = ['General', 'Math', 'Science', 'English', 'Hindi', 'Social'];

function AskAI({ user }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('English');
  const [subject, setSubject] = useState('General');
  const [isListening, setIsListening] = useState(false);
  const [history, setHistory] = useState([]);
  const [speaking, setSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const answerRef = useRef(null);

  // Setup Web Speech API
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SR();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (e) => {
        setQuestion(e.results[0][0].transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, []);

  const toggleVoice = () => {
    if (!recognitionRef.current) { setError('Voice not supported. Use Chrome browser.'); return; }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setError('');
      recognitionRef.current.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Text-to-speech
  const speakAnswer = () => {
    if (!answer) return;
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(answer);
    utterance.lang = language === 'Hindi' ? 'hi-IN' : 'en-US';
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true); setError(''); setAnswer('');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`${API_URL}/ask`,
        { question, language, subject },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnswer(res.data.answer);
      setHistory(prev => [{ question, answer: res.data.answer, language, subject, time: new Date().toLocaleTimeString() }, ...prev.slice(0, 4)]);
      setTimeout(() => answerRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to get answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">AI Tutor 🤖</h1>
        <p className="text-gray-500 mt-1">Ask any question in your language, get simple answers!</p>
      </div>

      {/* Question Form */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          {/* Selectors */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Language</label>
              <select value={language} onChange={e => setLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm">
                {LANGUAGES.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm">Subject</label>
              <select value={subject} onChange={e => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm">
                {SUBJECTS.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Question Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1 text-sm">Your Question</label>
            <div className="flex gap-2">
              <textarea value={question} onChange={e => setQuestion(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                placeholder="Type your question here... e.g. What is photosynthesis?"
                rows="3" required />
              <button type="button" onClick={toggleVoice}
                className={`px-4 rounded-xl font-semibold transition flex flex-col items-center justify-center gap-1 ${
                  isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`} title="Click to speak">
                <span className="text-xl">{isListening ? '🔴' : '🎤'}</span>
                <span className="text-xs">{isListening ? 'Stop' : 'Speak'}</span>
              </button>
            </div>
            {isListening && <p className="text-red-500 text-sm mt-1 animate-pulse">🎙️ Listening... Speak now!</p>}
          </div>

          {error && <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}

          <button type="submit" disabled={loading || !question.trim()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition disabled:bg-gray-400">
            {loading ? '🤔 Thinking...' : '🚀 Get Answer'}
          </button>
        </form>
      </div>

      {/* Answer */}
      {answer && (
        <div ref={answerRef} className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-indigo-500">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-indigo-700">📖 Answer</h3>
            <button onClick={speakAnswer}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition ${
                speaking ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              }`}>
              <span>{speaking ? '⏹️' : '🔊'}</span>
              <span>{speaking ? 'Stop' : 'Listen'}</span>
            </button>
          </div>
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{answer}</div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4">📜 Recent Questions</h3>
          <div className="space-y-3">
            {history.map((item, i) => (
              <div key={i} className="border-l-4 border-indigo-200 pl-4 py-2 cursor-pointer hover:border-indigo-400 transition"
                onClick={() => { setQuestion(item.question); setAnswer(item.answer); }}>
                <p className="font-medium text-gray-700 text-sm truncate">Q: {item.question}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.subject} • {item.language} • {item.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AskAI;
