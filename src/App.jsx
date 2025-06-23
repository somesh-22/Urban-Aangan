import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import PrivateRoute from './components/Admin/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
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
