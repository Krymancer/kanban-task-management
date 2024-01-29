'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Switch } from "@/components/ui/switch"

import DarkThemeIcon from '@/assets/icon-dark-theme.svg';
import LightThemeIcon from '@/assets/icon-light-theme.svg';

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
    <div
      className={`p-2 rounded-md w-full flex justify-center-center ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
      onClick={toggleTheme}
    >
      <div className='bg-light-gray dark:bg-very-dark-gray flex  gap-2 py-3 w-full justify-center rounded-md'>
        <div className='relative h-6 w-6'>
          <Image src={LightThemeIcon} fill alt='' />
        </div>
        <Switch checked={theme === 'dark' } onCheckedChange={toggleTheme} />
        <div className='relative w-6 h-6'>
          <Image src={DarkThemeIcon} fill alt='' />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;