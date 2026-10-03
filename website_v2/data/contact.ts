/**
 * Contact Data Configuration
 *
 * Replace the placeholder links and email with your real info.
 * Save the file, then refresh the browser.
 */

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  linkedin: string;
  github: string;
  kaggle?: string;
  portfolio?: string;
}

export const contactInfo: ContactInfo = {
  email: "ajay.dwivedi@example.com", // TODO: put your real email here
  // phone: "555-555-5555", // Optional
  location: "United States", // TODO: city, state
  linkedin: "https://linkedin.com/in/your-linkedin", // TODO
  github: "https://github.com/your-github", // TODO
};

export const socialIcons = {
  linkedin: "Linkedin",
  github: "Github",
  kaggle: "Database",
  portfolio: "Globe",
};
