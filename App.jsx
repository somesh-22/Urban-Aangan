import React, { useState } from 'react';
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
import { isAuthenticated } from './utils/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  const [showChat, setShowChat] = useState(false); // state to control chatbot visibility

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
              <PrivateRoute>
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
