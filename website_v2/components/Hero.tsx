/**
 * Hero Section
 *
 * Content comes from data/profile.ts. Do not hardcode bio text here.
 */

import React from 'react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  const role = profile.currentRole;
  const roleLabel = role
    ? `${role.position} @ ${role.company}${role.badge ? ` • ${role.badge}` : ''}`
    : null;

  const badgeClassName =
    'inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm mb-8 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200';

  return (
    <section id="hero" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {profile.name}
          </h1>

          <h2 className="text-2xl text-zinc-700 mb-16">
            {profile.title}
          </h2>

          {role &&
            (role.url ? (
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${badgeClassName} cursor-pointer`}
              >
                {role.badge && (
                  <div className="w-3 h-3 bg-accent-500 rounded-sm mr-2 flex-shrink-0"></div>
                )}
                <span className="text-sm text-gray-600">{roleLabel}</span>
              </a>
            ) : (
              <div className={badgeClassName}>
                {role.badge && (
                  <div className="w-3 h-3 bg-accent-500 rounded-sm mr-2 flex-shrink-0"></div>
                )}
                <span className="text-sm text-gray-600">{roleLabel}</span>
              </div>
            ))}

          {profile.avatar && (
            <div className="mb-8">
              <img
                src={profile.avatar}
                alt={`${profile.name} avatar`}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}

          <h3 className="text-2xl font-bold mb-5 text-zinc-900 flex items-center">
            About me
          </h3>

          <ul className="space-y-2 text-zinc-700 max-w-2xl">
            {profile.description.map((paragraph, index) => (
              <li key={index} className="flex items-start">
                {paragraph}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
