import React from 'react';
import { Smartphone } from 'lucide-react';

const IntroSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Adicción Digital
        </h1>
        <p className="text-2xl text-gray-300 dark:text-gray-700 mb-8">Tecnología e Internet en el Siglo XXI</p>
        <div className="flex justify-center">
          <Smartphone className="w-32 h-32 text-cyan-400 dark:text-blue-600 animate-pulse" />
        </div>
      </div>

      {/* Video de YouTube */}
      <div className="bg-gray-800/50 dark:bg-purple-50/80 backdrop-blur p-6 rounded-2xl border border-cyan-500/30 dark:border-purple-300">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-400 dark:text-purple-700 text-center">Video: El Impacto de la Adicción Digital</h3>
        <div className="video-container">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/qeJbj0mprTQ"
            title="Adicción a las Redes Sociales"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-3 text-center italic">
          "Adicción a las Redes Sociales" - Documental corto sobre el impacto de la tecnología
        </p>
      </div>

      <div className="bg-gray-800/50 dark:bg-blue-50/80 backdrop-blur p-6 rounded-2xl border border-cyan-500/30 dark:border-blue-300">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-400 dark:text-blue-700">Presentado por:</h3>
        <ul className="text-xl text-gray-300 dark:text-gray-700 space-y-2">
          <li>• Andersson David Sánchez Méndez</li>
          <li>• Cristian Santiago Pedraza Rodríguez</li>
          <li>• Javier Mauricio Romero Deaquiz</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
