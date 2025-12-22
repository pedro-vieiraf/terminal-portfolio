import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { projectsLines } from "@/content/project";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <TerminalLayout>
      {projectsLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 mt-6">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center p-4
              rounded-md
              border
              bg-terminal
              hover:bg-(--muted)
            "
            style={{
              borderColor: "var(--fg)",
            }}
          >
            <div
              className="
                w-full h-32
                flex items-center justify-center
                rounded
              "
              style={{
                backgroundColor: "var(--bg)",
              }}
            >
              <Image
                src={proj.image}
                alt={proj.name}
                width={64}
                height={64}
                className="project-image"
              />
            </div>

            <h3 className="mt-2 font-bold text-foreground">
              {proj.name}
            </h3>

            <p className="text-xs text-muted mt-1 text-center">
              {proj.technologies.join(", ")}
            </p>
          </a>
        ))}
      </div>
    </TerminalLayout>
  );
}
