/**
 * Skills Data Configuration
 *
 * Edit the categories and skill names to match what you actually know.
 * Be honest — recruiters notice inflated lists.
 */

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Security",
    items: ["OWASP Top 10", "Linux", "Networking fundamentals", "Threat modeling"],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript / TypeScript", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux terminal", "VS Code / Cursor"],
  },
];
