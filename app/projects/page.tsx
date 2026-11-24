import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { projectsLines } from "@/content/project";
import Image from "next/image";
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
          const Card = proj.url ? 'a' : 'article';

          return (
            <Card
              key={proj.name}
              href={proj.url}
              target={proj.url ? "_blank" : undefined}
              rel={proj.url ? "noopener noreferrer" : undefined}
              className={`flex flex-col rounded-md border bg-terminal p-4 ${proj.url ? "hover:bg-(--muted)" : ""}`}
              style={{
                borderColor: "var(--fg)",
              }}
            >
              <div
                className="
                  w-full h-24
                  flex items-center justify-center
                  rounded
                "
                style={{
                  backgroundColor: "var(--bg)",
                }}
              >
                <Image
                  src={TerminalImage}
                  alt=""
                  width={64}
                  height={64}
                  className="project-image"
                />
              </div>

              <h3 className="mt-2 font-bold text-foreground">
                {proj.name}
              </h3>

              <p className="mb-3 mt-2 text-sm">{proj.description}</p>

              <p className="mt-auto text-xs text-muted">
                {proj.technologies.join(", ")}
              </p>
            </Card>
          );
        })}
      </div>
    </TerminalLayout>
  );
}
