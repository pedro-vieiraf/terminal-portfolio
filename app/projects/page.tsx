import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { projectsLines } from "@/content/project";
import Image from "next/image";
import Link from "next/link";
import TerminalImage from "@/public/icons/projects/terminal.svg";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <TerminalLayout>
      {projectsLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-6 mt-6">
        {projects.map((proj) => {
          const isExternal = proj.url?.startsWith("https://");
          const cardContent = (
            <>
              <div className="flex h-24 w-full items-center justify-center rounded bg-terminal">
                <Image
                  src={TerminalImage}
                  alt=""
                  width={64}
                  height={64}
                  className="project-image"
                />
              </div>

              <h3 className="mt-2 font-bold text-foreground">{proj.name}</h3>
              <p className="mb-3 mt-2 text-sm">{proj.description}</p>
              <p className="mt-auto text-xs text-muted">{proj.technologies.join(", ")}</p>
            </>
          );
          const cardClass = "flex flex-col rounded-md border border-foreground bg-terminal p-4";

          if (!proj.url) {
            return <article key={proj.name} className={cardClass}>{cardContent}</article>;
          }

          return (
            <Link
              key={proj.name}
              href={proj.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`${cardClass} hover:bg-surface-hover focus-visible:bg-surface-hover`}
            >
              {cardContent}
            </Link>
          );
        })}
      </div>
    </TerminalLayout>
  );
}
