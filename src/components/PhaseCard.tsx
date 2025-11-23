import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PhaseCardProps {
  phase: string;
  desc: string;
  signs: string[];
  index: number;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, desc, signs, index }) => {
  return (
    <div className="bg-gray-800/50 dark:bg-white/70 backdrop-blur p-5 rounded-xl border border-yellow-500/30 dark:border-yellow-400 hover:border-orange-500/50 transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-yellow-400 dark:text-yellow-700 mb-2">{phase}</h3>
          <p className="text-gray-300 dark:text-gray-700 mb-3">{desc}</p>
          <div className="space-y-1">
            {signs.map((sign, i) => (
              <div key={i} className="flex items-center text-sm text-gray-400 dark:text-gray-600">
                <ChevronRight className="w-4 h-4 text-orange-400 dark:text-orange-600 mr-2" />
                {sign}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
