'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(`${theme}`);
    document.documentElement.classList.add(`${newTheme}`);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(`${savedTheme}`);
    }
  }, []);

  return (
    <button
      className={`p-2 rounded-md ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;