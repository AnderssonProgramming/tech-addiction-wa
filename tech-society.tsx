import React, { useState, useEffect } from 'react';
import { ChevronRight, Smartphone, AlertCircle, TrendingUp, Activity, Zap, Heart, BarChart3, Users } from 'lucide-react';

const TechAddictionApp = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [activeSection]);

  const sections = [
    {
      id: 'intro',
      title: 'Adicción a la Tecnología e Internet',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'definition',
      title: 'Definición',
      icon: AlertCircle,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'causes',
      title: 'Causas',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'symptoms',
      title: 'Signos y Síntomas',
      icon: Activity,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'phases',
      title: 'Fases',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'consequences',
      title: 'Consecuencias',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'treatment',
      title: 'Tratamiento',
      icon: Users,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'statistics',
      title: 'Estadísticas',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const content = {
    intro: (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Adicción Digital
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Tecnología e Internet en el Siglo XXI</p>
          <div className="flex justify-center">
            <Smartphone className="w-32 h-32 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-cyan-500/30">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Presentado por:</h3>
          <ul className="text-xl text-gray-300 space-y-2">
            <li>• Andersson David Sánchez Méndez</li>
            <li>• Cristian Santiago Pedraza Rodríguez</li>
            <li>• Javier Mauricio Romero Deaquiz</li>
          </ul>
        </div>
      </div>
    ),
    definition: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          ¿Qué es la Adicción a la Tecnología?
        </h2>
        <div className="bg-gray-800/50 backdrop-blur p-6 rounded-2xl border border-purple-500/30 space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            La adicción a la tecnología e internet es un <span className="text-purple-400 font-semibold">trastorno conductual</span> caracterizado por el uso compulsivo y excesivo de dispositivos tecnológicos y plataformas digitales, que interfiere significativamente con la vida diaria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-900/30 p-4 rounded-xl">
              <h4 className="font-semibold text-purple-300 mb-2">Tipos principales:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Adicción a redes sociales</li>
                <li>• Adicción a videojuegos</li>
                <li>• Ciberadicción general</li>
                <li>• Nomofobia (miedo a estar sin móvil)</li>
              </ul>
            </div>
            <div className="bg-pink-900/30 p-4 rounded-xl">
              <h4 className="font-semibold text-pink-300 mb-2">Características:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Pérdida de control</li>
                <li>• Uso compulsivo</li>
                <li>• Interferencia con actividades</li>
                <li>• Síndrome de abstinencia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    causes: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Causas Principales
        </h2>
        <div className="grid gap-4">
          {[
            {
              title: 'Factores Psicológicos',
              items: ['Búsqueda de gratificación instantánea', 'Escape de problemas emocionales', 'Baja autoestima', 'Ansiedad y depresión preexistentes']
            },
            {
              title: 'Factores Sociales',
              items: ['Presión social y FOMO (Fear of Missing Out)', 'Necesidad de validación social', 'Aislamiento social', 'Cultura de hiperconectividad']
            },
            {
              title: 'Factores Tecnológicos',
              items: ['Diseño adictivo de aplicaciones', 'Notificaciones constantes', 'Algoritmos de recomendación', 'Recompensas variables (likes, comentarios)']
            },
            {
              title: 'Factores Neurobiológicos',
              items: ['Liberación de dopamina', 'Alteración de circuitos de recompensa', 'Cambios en la corteza prefrontal', 'Tolerancia digital']
            }
          ].map((category, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">{category.title}</h3>
              <ul className="text-gray-300 space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    symptoms: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
          Signos y Síntomas
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Síntomas Conductuales</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Uso excesivo (más de 6 horas diarias no laborales)</li>
              <li>• Revisión compulsiva del teléfono</li>
              <li>• Incapacidad para desconectarse</li>
              <li>• Mentiras sobre tiempo de uso</li>
              <li>• Descuido de responsabilidades</li>
              <li>• Uso nocturno que afecta el sueño</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">Síntomas Físicos</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Fatiga visual y sequedad ocular</li>
              <li>• Dolores de cabeza frecuentes</li>
              <li>• Problemas posturales</li>
              <li>• Síndrome del túnel carpiano</li>
              <li>• Insomnio o alteraciones del sueño</li>
              <li>• Sedentarismo y problemas metabólicos</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Síntomas Emocionales</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Ansiedad al no tener acceso</li>
              <li>• Irritabilidad cuando se interrumpe</li>
              <li>• Euforia durante el uso</li>
              <li>• Depresión o vacío al desconectarse</li>
              <li>• Baja tolerancia a la frustración</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">Síntomas Sociales</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Aislamiento social</li>
              <li>• Conflictos interpersonales</li>
              <li>• Pérdida de relaciones significativas</li>
              <li>• Preferencia por interacciones virtuales</li>
              <li>• Deterioro del rendimiento académico/laboral</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    phases: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Fases de la Adicción Digital
        </h2>
        <div className="space-y-4">
          {[
            {
              phase: 'Fase 1: Experimentación',
              desc: 'Uso inicial frecuente pero controlado. Curiosidad y exploración.',
              signs: ['Aumento gradual del tiempo de uso', 'Descubrimiento de gratificación', 'Sin consecuencias aparentes']
            },
            {
              phase: 'Fase 2: Uso Habitual',
              desc: 'El uso se vuelve rutinario y parte de la vida diaria.',
              signs: ['Patrones establecidos de uso', 'Incorporación a rutinas diarias', 'Primeras señales de dependencia']
            },
            {
              phase: 'Fase 3: Uso Problemático',
              desc: 'Comienzan a aparecer consecuencias negativas evidentes.',
              signs: ['Descuido de obligaciones', 'Conflictos interpersonales', 'Intentos fallidos de reducir uso']
            },
            {
              phase: 'Fase 4: Dependencia',
              desc: 'Pérdida total de control. La tecnología domina la vida.',
              signs: ['Uso compulsivo constante', 'Síndrome de abstinencia severo', 'Deterioro significativo de calidad de vida', 'Necesidad de intervención profesional']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-yellow-500/30 hover:border-orange-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.phase}</h3>
                  <p className="text-gray-300 mb-3">{item.desc}</p>
                  <div className="space-y-1">
                    {item.signs.map((sign, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-400">
                        <ChevronRight className="w-4 h-4 text-orange-400 mr-2" />
                        {sign}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    consequences: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          Consecuencias
        </h2>
        <div className="grid gap-4">
          {[
            {
              category: 'Salud Física',
              color: 'red',
              items: [
                'Obesidad y sedentarismo',
                'Trastornos del sueño crónicos',
                'Problemas visuales permanentes',
                'Lesiones por esfuerzo repetitivo',
                'Deterioro del sistema inmune'
              ]
            },
            {
              category: 'Salud Mental',
              color: 'pink',
              items: [
                'Depresión y ansiedad crónicas',
                'Disminución de la capacidad de atención',
                'Problemas de memoria',
                'Trastornos de personalidad',
                'Adicciones secundarias'
              ]
            },
            {
              category: 'Ámbito Social',
              color: 'rose',
              items: [
                'Aislamiento social severo',
                'Ruptura de relaciones familiares',
                'Pérdida de habilidades sociales',
                'Conflictos constantes',
                'Soledad y abandono'
              ]
            },
            {
              category: 'Ámbito Académico/Laboral',
              color: 'orange',
              items: [
                'Bajo rendimiento académico',
                'Pérdida de empleo',
                'Abandono de estudios',
                'Falta de concentración',
                'Disminución de productividad'
              ]
            },
            {
              category: 'Ámbito Económico',
              color: 'red',
              items: [
                'Gastos excesivos en tecnología',
                'Compras impulsivas online',
                'Pérdida de ingresos',
                'Deudas por microtransacciones',
                'Problemas financieros serios'
              ]
            }
          ].map((cat, idx) => (
            <div key={idx} className={`bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-${cat.color}-500/30`}>
              <h3 className={`text-xl font-semibold text-${cat.color}-400 mb-3`}>{cat.category}</h3>
              <ul className="text-gray-300 space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <AlertCircle className={`w-5 h-5 text-${cat.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    treatment: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Tratamiento y Alternativas Terapéuticas
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-indigo-500/30">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Intervenciones Psicológicas</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-indigo-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-300 mb-2">Terapia Cognitivo-Conductual (TCC)</h4>
                <p className="text-sm text-gray-300">Modificación de pensamientos y conductas relacionadas con el uso excesivo.</p>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Terapia de Aceptación y Compromiso</h4>
                <p className="text-sm text-gray-300">Desarrollo de conciencia y aceptación para cambiar comportamientos.</p>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-300 mb-2">Terapia Familiar</h4>
                <p className="text-sm text-gray-300">Involucrar a la familia en el proceso de recuperación.</p>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Terapia de Grupo</h4>
                <p className="text-sm text-gray-300">Apoyo entre personas con adicciones similares.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Estrategias Prácticas</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Desintoxicación Digital</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Períodos sin dispositivos</li>
                  <li>• Fines de semana offline</li>
                  <li>• Zonas libres de tecnología</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-300 mb-2">Gestión del Tiempo</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Horarios establecidos</li>
                  <li>• Apps de control parental</li>
                  <li>• Límites diarios</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Actividades Alternativas</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Ejercicio físico regular</li>
                  <li>• Hobbies offline</li>
                  <li>• Socialización presencial</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-indigo-500/30">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Recursos y Apoyo</h3>
            <div className="space-y-3 text-gray-300">
              <p><strong className="text-indigo-300">Centros especializados:</strong> Clínicas de adicciones comportamentales</p>
              <p><strong className="text-purple-300">Líneas de ayuda:</strong> Servicios de orientación y apoyo telefónico</p>
              <p><strong className="text-indigo-300">Aplicaciones terapéuticas:</strong> Forest, Freedom, Moment, Screen Time</p>
              <p><strong className="text-purple-300">Grupos de apoyo:</strong> Internet Addicts Anonymous, organizaciones locales</p>
            </div>
          </div>
        </div>
      </div>
    ),
    statistics: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
          Cifras y Estadísticas
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-pink-500/30">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-pink-400 mb-2">6.5%</div>
              <p className="text-gray-300">de la población mundial sufre adicción a internet</p>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-rose-500/30">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-rose-400 mb-2">7hrs</div>
              <p className="text-gray-300">promedio diario de uso de internet a nivel global</p>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-pink-500/30">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-pink-400 mb-2">58%</div>
              <p className="text-gray-300">de adolescentes revisan sus dispositivos cada hora</p>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-rose-500/30">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-rose-400 mb-2">3-5%</div>
              <p className="text-gray-300">de estudiantes universitarios tienen adicción severa</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-pink-500/30">
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">Datos de Colombia</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-rose-400 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong className="text-pink-300">79%</strong> de colombianos usa internet diariamente (2024)</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-rose-400 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong className="text-pink-300">9 horas</strong> promedio de tiempo en línea por día</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-rose-400 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong className="text-pink-300">47%</strong> de jóvenes presentan síntomas de nomofobia</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-rose-400 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong className="text-pink-300">3.2 horas</strong> diarias en redes sociales en promedio</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-rose-500/30">
          <h3 className="text-2xl font-semibold text-rose-400 mb-4">Tendencias Preocupantes</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• El 23% de adultos se describe como "casi constantemente en línea"</li>
            <li>• 45% de adolescentes siente adicción a su smartphone</li>
            <li>• Aumento del 50% en consultas por adicción digital desde 2019</li>
            <li>• 71% experimenta ansiedad al separarse de su teléfono</li>
            <li>• La edad promedio del primer smartphone es ahora 10 años</li>
          </ul>
        </div>
      </div>
    )
  };

  const Section = sections[activeSection];
  const Icon = Section.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header con navegación */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {sections.map((section, idx) => {
            const SectionIcon = section.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveSection(idx);
                  setIsVisible(false);
                  setTimeout(() => setIsVisible(true), 50);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === idx
                    ? `bg-gradient-to-r ${section.color} shadow-lg scale-105`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <SectionIcon className="w-5 h-5" />
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido principal con animación */}
        <div className={`transition-all duration-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            {content[Section.id]}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Psicología Social - Escuela Colombiana de Ingeniería Julio Garavito</p>
          <p className="mt-2">Grupo 7: Andersson Sánchez, Cristian Pedraza, Javier Romero</p>
        </div>
      </div>
    </div>
  );
};

export default TechAddictionApp;