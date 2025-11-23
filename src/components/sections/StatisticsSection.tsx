import React from 'react';
import { ChevronRight } from 'lucide-react';
import StatCard from '../StatCard';

const StatisticsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
        Cifras y Estadísticas
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-estadisticas.webp" 
          alt="Estadísticas y datos"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">Los números detrás de la adicción digital</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <StatCard value="6.5%" description="de la población mundial sufre adicción a internet" color="pink" />
        <StatCard value="7hrs" description="promedio diario de uso de internet a nivel global" color="rose" />
        <StatCard value="58%" description="de adolescentes revisan sus dispositivos cada hora" color="pink" />
        <StatCard value="3-5%" description="de estudiantes universitarios tienen adicción severa" color="rose" />
      </div>

      <div className="bg-gray-800/50 dark:bg-pink-50/80 backdrop-blur p-6 rounded-xl border border-pink-500/30 dark:border-pink-300">
        <h3 className="text-2xl font-semibold text-pink-400 dark:text-pink-700 mb-4">Datos de Colombia</h3>
        <ul className="text-gray-300 dark:text-gray-700 space-y-3">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-rose-400 dark:text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
            <span><strong className="text-pink-300 dark:text-pink-700">79%</strong> de colombianos usa internet diariamente (2024)</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-rose-400 dark:text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
            <span><strong className="text-pink-300 dark:text-pink-700">9 horas</strong> promedio de tiempo en línea por día</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-rose-400 dark:text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
            <span><strong className="text-pink-300 dark:text-pink-700">47%</strong> de jóvenes presentan síntomas de nomofobia</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-rose-400 dark:text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
            <span><strong className="text-pink-300 dark:text-pink-700">3.2 horas</strong> diarias en redes sociales en promedio</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-800/50 dark:bg-rose-50/80 backdrop-blur p-6 rounded-xl border border-rose-500/30 dark:border-rose-300">
        <h3 className="text-2xl font-semibold text-rose-400 dark:text-rose-700 mb-4">Tendencias Preocupantes</h3>
        <ul className="text-gray-300 dark:text-gray-700 space-y-2">
          <li>• El 23% de adultos se describe como "casi constantemente en línea"</li>
          <li>• 45% de adolescentes siente adicción a su smartphone</li>
          <li>• Aumento del 50% en consultas por adicción digital desde 2019</li>
          <li>• 71% experimenta ansiedad al separarse de su teléfono</li>
          <li>• La edad promedio del primer smartphone es ahora 10 años</li>
        </ul>
      </div>
    </div>
  );
};

export default StatisticsSection;
