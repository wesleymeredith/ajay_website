import React from 'react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#hero"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
            >
              Back to Top
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
