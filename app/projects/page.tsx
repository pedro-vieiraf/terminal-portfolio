import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { projectsLines } from "@/content/project";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <TerminalLayout>
      {/* Chat */}
      {projectsLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}

      {/* Grid de projetos */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 mt-6">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 border border-white rounded-md hover:bg-gray-800 transition"
          >
            {/* Aqui vai a imagem do projeto */}
            <div className="w-full h-32 bg-gray-900 flex items-center justify-center">
              <Image
                src={proj.image} // use o SVG ou PNG que você criar
                alt={proj.name}
                width={64}
                height={64}
              />
            </div>
            <h3 className="mt-2 font-bold">{proj.name}</h3>
            <p className="text-xs text-gray-400 mt-1 text-center">{proj.technologies.join(", ")}</p>
          </a>
        ))}
      </div>
    </TerminalLayout>
  );
}
