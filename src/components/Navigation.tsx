import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  sections: Section[];
  activeSection: number;
  onSectionChange: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2 justify-center">
      {sections.map((section, idx) => {
        const SectionIcon = section.icon;
        return (
          <button
            key={idx}
            onClick={() => onSectionChange(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === idx
                ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105`
                : 'bg-gray-800 dark:bg-white/80 text-gray-300 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-purple-100'
            }`}
          >
            <SectionIcon className="w-5 h-5" />
            <span className="text-sm font-medium">{section.title}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
