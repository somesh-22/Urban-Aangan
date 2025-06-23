import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [totalUsers, setTotalUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboardData = async () => {
    try {
      const resMessages = await fetch('http://localhost:5000/api/contact');
      const messagesData = await resMessages.json();
      setMessages(messagesData);

      const resUsers = await fetch('http://localhost:5000/api/totalusers');
      const userData = await resUsers.json();
      setTotalUsers(userData.total || userData.count || userData);
    } catch (err) {
      console.error('❌ Failed to fetch dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {totalUsers !== null && (
        <div className="mb-8 text-xl font-semibold text-blue-700">
          👥 Total Users: {totalUsers}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">📬 Contact Submissions</h2>

      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg._id} className="border border-gray-300 rounded-md p-4 shadow-sm bg-white">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Phone:</strong> {msg.phone || '-'}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                Submitted: {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
