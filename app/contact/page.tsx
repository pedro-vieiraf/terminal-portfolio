import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { contactLines } from "@/content/contact";
import { contacts } from "../data/contacts";
import Image from "next/image";

export default function ContactPage() {
  return (
    <TerminalLayout>
      {contactLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mt-4">
        {contacts.map(contact => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between items-center p-2 w-32 h-32 border border-white rounded-md"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <Image src={contact.icon} width={48} height={48} alt={contact.name} />
            <span className="mt-1 text-sm">{contact.name}</span>
          </a>
        ))}
      </div>
    </TerminalLayout>
  );
}
