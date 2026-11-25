import type { Metadata } from 'next';
import Link from 'next/link';
import TerminalLayout from '@/components/TerminalLayout';
import { finoraRepository } from '@/app/data/projects';

export const metadata: Metadata = {
  title: 'Finora | Pedro Vieira',
  description: 'How Finora avoids duplicate bank transactions when importing data from Pluggy.',
};

const importTest = `${finoraRepository}/blob/682b79777181aa2e4defa3a5c74bad97663743ae/backend/src/test/java/com/pedro/ledger/infrastructure/openfinance/OpenFinanceInitialImportTest.java#L51-L75`;
const linkClass = 'underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2';

export default function FinoraPage() {
  return (
    <TerminalLayout>
      <Link href="/projects" className={`self-start text-sm ${linkClass}`}>
        ← /projects
      </Link>

      <article className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold">Finora</h1>
          <p>
            A personal finance app with a Java 21 and Spring Boot API, PostgreSQL,
            and a Pluggy integration for syncing bank transactions.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="font-bold">How I prevent duplicate imports</h2>
          <p>
            When two pages from Pluggy contain the same transaction, importing both
            copies would count the same expense twice. I use the transaction ID
            assigned by Pluggy to recognize repeats, even when two separate purchases
            have the same amount.
          </p>
          <p>
            I tested this with two mock API pages that return the same posted expense.
            The test checks that the import produces just one entry for that ID and
            still keeps the other transactions.
          </p>
        </section>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li><a href={finoraRepository} className={linkClass}>View source on GitHub</a></li>
          <li><a href={importTest} className={linkClass}>Read the import test</a></li>
        </ul>
      </article>
    </TerminalLayout>
  );
}
