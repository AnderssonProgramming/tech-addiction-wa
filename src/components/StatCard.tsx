import React from 'react';

interface StatCardProps {
  value: string;
  description: string;
  color: string;
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { container: string; value: string }> = {
    pink: {
      container: 'border-pink-500/30 dark:border-pink-300',
      value: 'text-pink-400 dark:text-pink-600'
    },
    rose: {
      container: 'border-rose-500/30 dark:border-rose-300',
      value: 'text-rose-400 dark:text-rose-600'
    }
  };
  return colorMap[color] || colorMap.pink;
};

const StatCard: React.FC<StatCardProps> = ({ value, description, color }) => {
  const colors = getColorClasses(color);
  return (
    <div className={`bg-gray-800/50 dark:bg-white/70 backdrop-blur p-6 rounded-xl border ${colors.container}`}>
      <div className="text-center mb-4">
        <div className={`text-5xl font-bold ${colors.value} mb-2`}>{value}</div>
        <p className="text-gray-300 dark:text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
