import { ReactNode } from 'react';

interface TerminalLayoutProps {
  children: ReactNode;
}

export default function TerminalLayout({ children }: TerminalLayoutProps) {
  return (
    <div className="flex flex-col gap-y-6 overflow-y-auto w-160 mx-auto pt-10">
      {children}
    </div>
  );
}

