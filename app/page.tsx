import TerminalLayout from '@/components/TerminalLayout';
import TerminalLine from '@/components/TerminalLine';
import { homeLines } from '@/content/home';

export default function HomePage() {
  return (
    <TerminalLayout>
      {homeLines.map((line, idx) => (
        <TerminalLine key={idx} prefix={line.prefix} text={line.text} />
      ))}
    </TerminalLayout>
  );
}
