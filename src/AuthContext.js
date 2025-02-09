// This file is created bu ChatGPT, it is supposed to helt with login functions, and making the difference
//of a logged in user and a not logged in user.
import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  const [isAdmin, setIsAdmin] = useState(
    () => JSON.parse(localStorage.getItem('isAdmin')) || false
  );

  const [username, setUsername] = useState(
    () => localStorage.getItem('username') || ''
  );

  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    window.location.replace("/");
    if (username === "Admin"){
      loginAdmin();
    }
  };

  const loginAdmin = () => {
    setIsAdmin(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsAdmin(false);
  };

  // Update localStorage when isLoggedIn or username changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [isAdmin]);

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout, loginAdmin, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
