import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await fetch('/api/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      setUser(data.user);
    }
    return data;
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
