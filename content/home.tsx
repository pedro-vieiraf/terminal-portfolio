import Link from 'next/link';

const linkClass = 'underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2';

export const homeLines = [
  { prefix: 'system', text: 'pedro has joined the chat' },
  { prefix: 'pedro', text: "hey, i'm Pedro Vieira" },
  { prefix: 'pedro', text: 'i build REST APIs with Java, Spring Boot, and PostgreSQL' },
  {
    prefix: 'pedro',
    text: (
      <>
        lately i&apos;ve been working on{' '}
        <Link href="/projects/finora" className={linkClass}>Finora</Link>,
        {' '}a personal finance app that syncs bank transactions through Pluggy
      </>
    ),
  },
  { prefix: 'pedro', text: "i'm looking for a Java backend developer role" },
  {
    prefix: 'pedro',
    text: (
      <>
        if your team&apos;s hiring, i&apos;d love to hear from you{' → '}
        <Link href="/contact" className={linkClass}>/contact</Link>
      </>
    ),
  },
  { prefix: 'pedro', text: '{\\__/}\n( •-•)\n/つ☕' },
];
