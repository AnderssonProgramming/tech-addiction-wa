import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  items: string[];
  borderColor: string;
  titleColor: string;
  iconColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  items, 
  borderColor, 
  titleColor,
  iconColor 
}) => {
  return (
    <div className={`bg-gray-800/50 dark:bg-white/70 backdrop-blur p-5 rounded-xl border ${borderColor}`}>
      <h3 className={`text-xl font-semibold ${titleColor} mb-3`}>{title}</h3>
      <ul className="text-gray-300 dark:text-gray-700 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <ChevronRight className={`w-5 h-5 ${iconColor} mr-2 mt-0.5 flex-shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
