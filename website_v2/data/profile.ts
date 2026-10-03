/**
 * Profile Data Configuration
 *
 * Edit this file to change your name, title, and about-me text.
 * Save the file, then refresh the browser — no other files need to change.
 */

export interface Profile {
  name: string;
  title: string;
  currentRole?: {
    company: string;
    position: string;
    url?: string;
    badge?: string;
  };
  description: string[];
  avatar?: string; // Optional: path to avatar image in public/images/
}

export const profile: Profile = {
  name: "Ajay Dwivedi",
  title: "Software Engineer",
  // Add a role badge later, for example:
  // currentRole: {
  //   company: "Company Name",
  //   position: "Software Engineer Intern",
  //   url: "https://company.com",
  // },
  description: [
    "I am an aspiring software engineer with a growing focus on security — understanding how systems fail, and how to build them so they don't.",
    "I am building a portfolio of projects across software engineering, security fundamentals, and practical tooling.",
    "Replace this sentence with a few things you enjoy outside of tech.",
  ],
  // avatar: "/images/avatar.jpg" // Uncomment after adding public/images/avatar.jpg
};
