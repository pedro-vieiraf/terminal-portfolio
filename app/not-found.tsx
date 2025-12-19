import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { errorLines } from "@/content/notFound";

export default function NotFoundPage() {
  return (
    <TerminalLayout>
      {errorLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}
    </TerminalLayout>
  );
}