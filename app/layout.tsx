import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: '>_ pedro',
  description: 'Backend Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="theme-dark">
      <body className="bg-terminal text-foreground font-mono min-h-screen">
        <ThemeProvider>
          <div className="flex justify-center min-h-screen">
            <div className="w-full max-w-4xl flex flex-col gap-4 px-6 py-6">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
