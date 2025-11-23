import React from 'react';
import CategoryCard from '../CategoryCard';
import { causesCategories } from '../../data/content';

const CausesSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        Causas Principales
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-causas.jpg" 
          alt="Cerebro y tecnología"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">Factores que generan adicción digital</p>
        </div>
      </div>

      <div className="grid gap-4">
        {causesCategories.map((category, idx) => (
          <CategoryCard
            key={`cause-${idx}`}
            title={category.title}
            items={category.items}
            borderColor="border-orange-500/30 dark:border-orange-300"
            titleColor="text-orange-400 dark:text-orange-700"
            iconColor="text-red-400 dark:text-red-600"
          />
        ))}
      </div>
    </div>
  );
};

export default CausesSection;
