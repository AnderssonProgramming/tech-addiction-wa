import React from 'react';

const DefinitionSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        ¿Qué es la Adicción a la Tecnología?
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-a-internet-definicion.jpg" 
          alt="Persona usando smartphone en la oscuridad"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="bg-gray-800/50 dark:bg-purple-50/80 backdrop-blur p-6 rounded-2xl border border-purple-500/30 dark:border-purple-300 space-y-4">
        <p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
          La adicción a la tecnología e internet es un <span className="text-purple-400 dark:text-purple-600 font-semibold">trastorno conductual</span> caracterizado por el uso compulsivo y excesivo de dispositivos tecnológicos y plataformas digitales, que interfiere significativamente con la vida diaria.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-purple-900/30 dark:bg-purple-100/80 p-4 rounded-xl">
            <h4 className="font-semibold text-purple-300 dark:text-purple-800 mb-2">Tipos principales:</h4>
            <ul className="text-gray-300 dark:text-gray-700 space-y-1 text-sm">
              <li>• Adicción a redes sociales</li>
              <li>• Adicción a videojuegos</li>
              <li>• Ciberadicción general</li>
              <li>• Nomofobia (miedo a estar sin móvil)</li>
            </ul>
          </div>
          <div className="bg-pink-900/30 dark:bg-pink-100/80 p-4 rounded-xl">
            <h4 className="font-semibold text-pink-300 dark:text-pink-800 mb-2">Características:</h4>
            <ul className="text-gray-300 dark:text-gray-700 space-y-1 text-sm">
              <li>• Pérdida de control</li>
              <li>• Uso compulsivo</li>
              <li>• Interferencia con actividades</li>
              <li>• Síndrome de abstinencia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefinitionSection;
