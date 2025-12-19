import TerminalLayout from "@/components/TerminalLayout"; // se você já tem
import TerminalLine from "@/components/TerminalLine";
import { skillsLines } from "@/content/skills";
import { mainSkills, otherSkills } from '../data/skills';
import Image from "next/image";

export default function SkillsPage() {
  return (
    <TerminalLayout>
      {skillsLines.map((line, index) => (
        <TerminalLine key={index} prefix={line.prefix} text={line.text} />
      ))}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mt-4">
        {mainSkills.map(skill => (
          <div
            key={skill.name}
            className="flex flex-col justify-between items-center p-2 w-32 h-32 border border-white rounded-md"
            style={{ backgroundColor: 'var(--background)' }}>
            <Image src={skill.icon} width={48} height={48} alt={skill.name} />
            <span className="mt-1 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>

        <div className="mt-6">
        <span>other skills:</span>
        {Object.entries(otherSkills).map(([category, skills]) => (
            <div key={category} className="mb-4">
            <h3 className="text-sm text-gray-400 mb-2 capitalize">{category}:</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700 rounded text-xs"
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
