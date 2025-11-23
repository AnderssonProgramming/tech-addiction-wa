import React from 'react';
import { AlertCircle } from 'lucide-react';
import { consequences } from '../../data/content';

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { container: string; title: string; icon: string }> = {
    red: {
      container: 'border-red-500/30 dark:border-red-300',
      title: 'text-red-400 dark:text-red-700',
      icon: 'text-red-400 dark:text-red-600'
    },
    pink: {
      container: 'border-pink-500/30 dark:border-pink-300',
      title: 'text-pink-400 dark:text-pink-700',
      icon: 'text-pink-400 dark:text-pink-600'
    },
    rose: {
      container: 'border-rose-500/30 dark:border-rose-300',
      title: 'text-rose-400 dark:text-rose-700',
      icon: 'text-rose-400 dark:text-rose-600'
    },
    orange: {
      container: 'border-orange-500/30 dark:border-orange-300',
      title: 'text-orange-400 dark:text-orange-700',
      icon: 'text-orange-400 dark:text-orange-600'
    }
  };
  return colorMap[color] || colorMap.red;
};

const ConsequencesSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
        Consecuencias
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-consecuencias.webp" 
          alt="Persona aislada con tecnología"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">Impacto en todas las áreas de la vida</p>
        </div>
      </div>

      <div className="grid gap-4">
        {consequences.map((cat, idx) => {
          const colors = getColorClasses(cat.color);
          return (
            <div key={`consequence-${idx}`} className={`bg-gray-800/50 dark:bg-white/70 backdrop-blur p-5 rounded-xl border ${colors.container}`}>
              <h3 className={`text-xl font-semibold ${colors.title} mb-3`}>{cat.category}</h3>
              <ul className="text-gray-300 dark:text-gray-700 space-y-2">
                {cat.items.map((item, i) => (
                  <li key={`consequence-item-${idx}-${i}`} className="flex items-start">
                    <AlertCircle className={`w-5 h-5 ${colors.icon} mr-2 mt-0.5 flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConsequencesSection;
