'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../app/context/ThemeContext';

import darkIcon from '@/public/icons/theme/lamp-dark-mode.svg';
import lightIcon from '@/public/icons/theme/lamp-light-mode.svg';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-terminal text-foreground">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-primary">
          <span className="hidden md:inline">{'>_ pedro'}</span>
          <span className="md:hidden">{'>_'}</span>
        </Link>

        <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/skills" className="hover:underline hover:underline-offset-2">
            /skills
          </Link>
          <Link href="/projects" className="hover:underline hover:underline-offset-2">
            /projects
          </Link>
          <Link href="/contact" className="hover:underline hover:underline-offset-2">
            /contact
          </Link>
        </nav>
      </div>

      <button
        onClick={toggleTheme}
        className="p-1 cursor-pointer"
        aria-label="Toggle theme"
      >
        <Image
          src={theme === 'dark' ? darkIcon : lightIcon}
          alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          className="w-5 h-5"
          priority
        />
      </button>
    </header>
  );
}
