"use client";

import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Switch } from "@/components/ui/switch"

import DarkThemeIcon from '@/assets/icon-dark-theme.svg';
import LightThemeIcon from '@/assets/icon-light-theme.svg';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!theme || !isClient) return null;

  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="p-2 rounded-md w-full flex justify-center-center bg-light dark:bg-dark text-dark dark:bg-light"
      onClick={toggleTheme}
    >
      <div className='bg-light-gray dark:bg-very-dark-gray flex gap-2 py-3 w-full justify-center rounded-md'>
        <Image src={LightThemeIcon} width={24} height={24} alt='' />
        <Switch checked={isDarkTheme} onCheckedChange={toggleTheme} />
        <Image src={DarkThemeIcon} width={24} height={24} alt='' />
      </div>
    </div >
  );
};