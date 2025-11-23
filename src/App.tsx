import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import IntroSection from './components/sections/IntroSection';
import DefinitionSection from './components/sections/DefinitionSection';
import CausesSection from './components/sections/CausesSection';
import SymptomsSection from './components/sections/SymptomsSection';
import PhasesSection from './components/sections/PhasesSection';
import ConsequencesSection from './components/sections/ConsequencesSection';
import TreatmentSection from './components/sections/TreatmentSection';
import StatisticsSection from './components/sections/StatisticsSection';
import { sections } from './data/sections';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [activeSection]);

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 50);
  };

  const renderSection = () => {
    switch (sections[activeSection].id) {
      case 'intro':
        return <IntroSection />;
      case 'definition':
        return <DefinitionSection />;
      case 'causes':
        return <CausesSection />;
      case 'symptoms':
        return <SymptomsSection />;
      case 'phases':
        return <PhasesSection />;
      case 'consequences':
        return <ConsequencesSection />;
      case 'treatment':
        return <TreatmentSection />;
      case 'statistics':
        return <StatisticsSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-blue-50 dark:via-blue-100 dark:to-purple-50 text-white dark:text-gray-900 p-4 md:p-8 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-6xl mx-auto">
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        <div
          className={`transition-all duration-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-gray-900/50 dark:bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50 dark:border-purple-200">
            {renderSection()}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>Psicología Social - Escuela Colombiana de Ingeniería Julio Garavito</p>
          <p className="mt-2">Grupo 7: Andersson Sánchez, Cristian Pedraza, Javier Romero</p>
        </div>
      </div>
    </div>
  );
};

export default App;
