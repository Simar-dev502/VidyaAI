import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-2xl">📚</span>
            <span>VidyaAI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-indigo-200 transition font-medium">Dashboard</Link>
                <Link to="/courses" className="hover:text-indigo-200 transition font-medium">Courses</Link>
                <Link to="/ask" className="hover:text-indigo-200 transition font-medium">AI Tutor</Link>
                <Link to="/formulas" className="hover:text-indigo-200 transition font-medium">📐 Formulas</Link>
                <span className="text-indigo-200 text-sm">Hi, {user?.name?.split(' ')[0]}! 👋</span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-lg text-sm transition">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-indigo-200 transition">Login</Link>
                <Link to="/register" className="bg-white text-indigo-700 hover:bg-indigo-50 px-4 py-1.5 rounded-lg font-semibold transition">
                  Register Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-indigo-600 pt-3 space-y-2">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block py-2 hover:text-indigo-200" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/courses" className="block py-2 hover:text-indigo-200" onClick={() => setMenuOpen(false)}>Courses</Link>
                <Link to="/ask" className="block py-2 hover:text-indigo-200" onClick={() => setMenuOpen(false)}>AI Tutor</Link>
                <Link to="/formulas" className="block py-2 hover:text-indigo-200" onClick={() => setMenuOpen(false)}>📐 Formulas</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 text-red-300">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" className="block py-2" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
