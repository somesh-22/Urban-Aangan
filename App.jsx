// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonails';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Chatbot from './components/Chatbot/Chatbot';
import ChatIcon from './components/Chatbot/ChatIcon';

import Login from './components/Admin/Login';
import Dashboard from './components/Admin/Dashboard';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <Router>
      <div className='w-full overflow-hidden'>
        <ToastContainer />

        {/* Chatbot */}
        <Chatbot visible={showChat} onClose={() => setShowChat(false)} />
        <ChatIcon onClick={() => setShowChat(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute user={user}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;