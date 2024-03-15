'use client';

import { SunIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useTheme } from 'next-themes';
import { AppTheme } from '@/app/enums';

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const reverseTheme = (theme: AppTheme): AppTheme => theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;

  return (
    <button onClick={() => setTheme(reverseTheme(resolvedTheme as AppTheme))} className="group rounded-full transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md p-2">
      <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
    </button>
  );
}
