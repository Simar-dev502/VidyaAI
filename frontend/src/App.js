import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import ChapterView from './pages/ChapterView';
import Quiz from './pages/Quiz';
import AskAI from './pages/AskAI';
import FormulaSheet from './pages/FormulaSheet';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/courses" element={isAuthenticated ? <Courses user={user} /> : <Navigate to="/login" />} />
          <Route path="/courses/:subject" element={isAuthenticated ? <ChapterView /> : <Navigate to="/login" />} />
          <Route path="/quiz/:subject" element={isAuthenticated ? <Quiz /> : <Navigate to="/login" />} />
          <Route path="/ask" element={isAuthenticated ? <AskAI user={user} /> : <Navigate to="/login" />} />
          <Route path="/formulas" element={<FormulaSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
