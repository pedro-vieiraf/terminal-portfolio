interface TerminalLineProps {
  prefix: string;
  text: string;
}

export default function TerminalLine({ prefix, text }: TerminalLineProps) {
   const isSystem = prefix === 'system';
  return (
    <div className="flex gap-2">
      <span className="text-primary shrink-0">{prefix}:</span>
      <span className={`shrink-0 ${isSystem ? 'text-secondary' : 'text-white whitespace-pre'}`}>{text}</span>
    </div>
  );
}
