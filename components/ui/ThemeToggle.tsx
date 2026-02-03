'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { Button } from './Button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};
