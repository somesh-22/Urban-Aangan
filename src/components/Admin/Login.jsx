import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Admin Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="block w-full border px-3 py-2 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full border px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
