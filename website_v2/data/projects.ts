/**
 * Projects Data Configuration
 *
 * Each object in the `projects` array becomes one card on the homepage
 * and one detail page at /projects/<id>.
 *
 * To add a project:
 * 1. Copy the example object below and paste a new one in the array
 * 2. Change id (use lowercase-with-hyphens, like "port-scanner")
 * 3. Fill in title, description, techStack, and date
 * 4. Optional: github, demo, notebook, images
 * 5. Save and refresh
 *
 * Images go in public/images/projects/ and are referenced like:
 *   images: ["/images/projects/my-screenshot.png"]
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  images?: string[];
  github?: string;
  demo?: string;
  notebook?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "example-security-lab",
    title: "Example: Security Lab Write-up",
    description:
      "A starter card so you can see how projects appear. Replace this with a real project — a CTF write-up, a small tool, or a class assignment you are proud of.",
    longDescription:
      "This is placeholder text for the project detail page. Delete this example in data/projects.ts and add your own work. Good first projects for a security-focused engineer: a password strength checker, a port scanner you wrote yourself, notes from a TryHackMe or HackTheBox room, or a small web app with auth done carefully.",
    techStack: ["Python", "Linux", "Networking"],
    github: "https://github.com/your-github/example-repo",
    date: "2026",
  },
];
