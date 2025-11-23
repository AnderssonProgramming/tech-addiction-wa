import React from 'react';
import { symptomTypes } from '../../data/content';

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { container: string; title: string }> = {
    green: {
      container: 'border-green-500/30 dark:border-green-300',
      title: 'text-green-400 dark:text-green-700'
    },
    teal: {
      container: 'border-teal-500/30 dark:border-teal-300',
      title: 'text-teal-400 dark:text-teal-700'
    }
  };
  return colorMap[color] || colorMap.green;
};

const SymptomsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
        Signos y Síntomas
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-signos-sintomas.jpg" 
          alt="Persona estresada usando computadora"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">Reconociendo las señales de alerta</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {symptomTypes.map((symptom, idx) => {
          const colors = getColorClasses(symptom.color);
          return (
            <div key={`symptom-${idx}`} className={`bg-gray-800/50 dark:bg-white/70 backdrop-blur p-5 rounded-xl border ${colors.container}`}>
              <h3 className={`text-xl font-semibold ${colors.title} mb-4`}>{symptom.title}</h3>
              <ul className="text-gray-300 dark:text-gray-700 space-y-2">
                {symptom.items.map((item, i) => (
                  <li key={`symptom-item-${idx}-${i}`}>• {item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SymptomsSection;
