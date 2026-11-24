import TerminalLayout from "@/components/TerminalLayout";
import TerminalLine from "@/components/TerminalLine";
import { skillsLines } from "@/content/skills";
import { mainSkills, otherSkills } from "../data/skills";

export default function SkillsPage() {
  return (
    <TerminalLayout>
      {skillsLines.map((line, index) => (
        <TerminalLine
          key={index}
          prefix={line.prefix}
          text={line.text}
        />
      ))}

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
        {mainSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-strong bg-terminal p-3 text-center text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <span className="text-foreground">Additional skills</span>

        {Object.entries(otherSkills).map(([category, skills]) => (
          <div key={category} className="mb-4">
            <h3 className="text-sm text-muted mb-2 capitalize">
              {category}:
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-2 py-1
                    bg-terminal
                    border border-strong
                    rounded
                    text-xs
                    text-foreground
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalLayout>
  );
}
