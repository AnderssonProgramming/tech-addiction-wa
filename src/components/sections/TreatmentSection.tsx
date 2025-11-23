import React from 'react';

const TreatmentSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Tratamiento y Alternativas Terapéuticas
      </h2>
      
      {/* Imagen representativa */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
        <img 
          src="/images/adiccion-digital-tratamiento.jpg" 
          alt="Terapia y recuperación"
          className="w-full h-96 object-contain bg-gray-900 dark:bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <p className="text-lg font-semibold">El camino hacia la recuperación</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800/50 dark:bg-indigo-50/80 backdrop-blur p-5 rounded-xl border border-indigo-500/30 dark:border-indigo-300">
          <h3 className="text-2xl font-semibold text-indigo-400 dark:text-indigo-700 mb-4">Intervenciones Psicológicas</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-indigo-900/30 dark:bg-indigo-100/80 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-300 dark:text-indigo-800 mb-2">Terapia Cognitivo-Conductual (TCC)</h4>
              <p className="text-sm text-gray-300 dark:text-gray-700">Modificación de pensamientos y conductas relacionadas con el uso excesivo.</p>
            </div>
            <div className="bg-purple-900/30 dark:bg-purple-100/80 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-300 dark:text-purple-800 mb-2">Terapia de Aceptación y Compromiso</h4>
              <p className="text-sm text-gray-300 dark:text-gray-700">Desarrollo de conciencia y aceptación para cambiar comportamientos.</p>
            </div>
            <div className="bg-indigo-900/30 dark:bg-indigo-100/80 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-300 dark:text-indigo-800 mb-2">Terapia Familiar</h4>
              <p className="text-sm text-gray-300 dark:text-gray-700">Involucrar a la familia en el proceso de recuperación.</p>
            </div>
            <div className="bg-purple-900/30 dark:bg-purple-100/80 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-300 dark:text-purple-800 mb-2">Terapia de Grupo</h4>
              <p className="text-sm text-gray-300 dark:text-gray-700">Apoyo entre personas con adicciones similares.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 dark:bg-purple-50/80 backdrop-blur p-5 rounded-xl border border-purple-500/30 dark:border-purple-300">
          <h3 className="text-2xl font-semibold text-purple-400 dark:text-purple-700 mb-4">Estrategias Prácticas</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-gray-700/50 dark:bg-white/70 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-300 dark:text-purple-700 mb-2">Desintoxicación Digital</h4>
              <ul className="text-sm text-gray-300 dark:text-gray-700 space-y-1">
                <li>• Períodos sin dispositivos</li>
                <li>• Fines de semana offline</li>
                <li>• Zonas libres de tecnología</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 dark:bg-white/70 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-300 dark:text-indigo-700 mb-2">Gestión del Tiempo</h4>
              <ul className="text-sm text-gray-300 dark:text-gray-700 space-y-1">
                <li>• Horarios establecidos</li>
                <li>• Apps de control parental</li>
                <li>• Límites diarios</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 dark:bg-white/70 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-300 dark:text-purple-700 mb-2">Actividades Alternativas</h4>
              <ul className="text-sm text-gray-300 dark:text-gray-700 space-y-1">
                <li>• Ejercicio físico regular</li>
                <li>• Hobbies offline</li>
                <li>• Socialización presencial</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 dark:bg-indigo-50/80 backdrop-blur p-5 rounded-xl border border-indigo-500/30 dark:border-indigo-300">
          <h3 className="text-2xl font-semibold text-indigo-400 dark:text-indigo-700 mb-4">Recursos y Apoyo</h3>
          <div className="space-y-3 text-gray-300 dark:text-gray-700">
            <p><strong className="text-indigo-300 dark:text-indigo-700">Centros especializados:</strong> Clínicas de adicciones comportamentales</p>
            <p><strong className="text-purple-300 dark:text-purple-700">Líneas de ayuda:</strong> Servicios de orientación y apoyo telefónico</p>
            <p><strong className="text-indigo-300 dark:text-indigo-700">Aplicaciones terapéuticas:</strong> Forest, Freedom, Moment, Screen Time</p>
            <p><strong className="text-purple-300 dark:text-purple-700">Grupos de apoyo:</strong> Internet Addicts Anonymous, organizaciones locales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSection;
