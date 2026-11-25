import type { ReactNode } from 'react';

interface TerminalLineProps {
  prefix: string;
  text: ReactNode;
}

export default function TerminalLine({ prefix, text }: TerminalLineProps) {
  const isSystem = prefix === 'system';
  const isMultiline = typeof text === 'string' && text.includes('\n');

  const textColor = isSystem ? 'text-secondary' : 'text-foreground';

  return (
    <div className="flex gap-2">
      <span className="text-primary shrink-0">
        {prefix}:
      </span>

      {isMultiline ? (
        <pre
          className={`
            ${textColor}
            whitespace-pre
            overflow-x-auto
          `}
        >
          {text}
        </pre>
      ) : (
        <span
          className={`
            ${textColor}
            min-w-0 whitespace-normal
            wrap-break-words
          `}
        >
          {text}
        </span>
      )}
    </div>
  );
}
