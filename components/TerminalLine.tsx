interface TerminalLineProps {
  prefix: string;
  text: string;
}

export default function TerminalLine({ prefix, text }: TerminalLineProps) {
  const isSystem = prefix === 'system';
  const isMultiline = text.includes('\n');

  return (
    <div className="flex gap-2">
      <span className="text-primary shrink-0">
        {prefix}:
      </span>

      {isMultiline ? (
        <pre
          className={`
            whitespace-pre
            overflow-x-auto
            ${isSystem ? 'text-secondary' : 'text-white'}
          `}
        >
          {text}
        </pre>
      ) : (
        <span
          className={`
            ${isSystem ? 'text-secondary' : 'text-white'}
            whitespace-normal md:whitespace-pre
            wrap-break-words
          `}
        >
          {text}
        </span>
      )}
    </div>
  );
}
