import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Welcome to Admin Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
