import { ReactNode } from 'react';

interface TerminalLayoutProps {
  children: ReactNode;
}

export default function TerminalLayout({ children }: TerminalLayoutProps) {
  return (
    <div
      className="
        flex flex-col gap-y-6
        w-full md:w-160
        mx-auto
        pt-6 md:pt-10
      "
    >
      {children}
    </div>
  );
}
