import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from "@/components/Footer";

export const metadata = {
  title: '>_ pedro',
  description: 'Backend Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono min-h-screen flex justify-center items-start p-6">
        <div className="w-full max-w-4xl flex flex-col gap-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
