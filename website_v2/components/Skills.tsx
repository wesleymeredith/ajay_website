import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A snapshot of what I am learning and using. Edit this list in{' '}
            <code className="text-sm bg-gray-100 px-1 rounded">data/skills.ts</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
