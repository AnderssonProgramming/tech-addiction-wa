import React from 'react';
import PhaseCard from '../PhaseCard';
import { phases } from '../../data/content';

const PhasesSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Fases de la Adicción Digital
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-fases.png" 
          alt="Progresión de la adicción"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">El camino hacia la dependencia digital</p>
        </div>
      </div>

      <div className="space-y-4">
        {phases.map((item, idx) => (
          <PhaseCard
            key={`phase-${idx}`}
            phase={item.phase}
            desc={item.desc}
            signs={item.signs}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default PhasesSection;
