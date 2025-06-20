export const isAuthenticated = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

export const login = (username, password) => {
  // Replace with secure validation in production!
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isAdmin');
};
