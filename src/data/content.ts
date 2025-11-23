import { CategoryData, PhaseData, ConsequenceCategory } from '../types';

export const causesCategories: CategoryData[] = [
  {
    title: 'Factores Psicológicos',
    items: [
      'Búsqueda de gratificación instantánea',
      'Escape de problemas emocionales',
      'Baja autoestima',
      'Ansiedad y depresión preexistentes'
    ]
  },
  {
    title: 'Factores Sociales',
    items: [
      'Presión social y FOMO (Fear of Missing Out)',
      'Necesidad de validación social',
      'Aislamiento social',
      'Cultura de hiperconectividad'
    ]
  },
  {
    title: 'Factores Tecnológicos',
    items: [
      'Diseño adictivo de aplicaciones',
      'Notificaciones constantes',
      'Algoritmos de recomendación',
      'Recompensas variables (likes, comentarios)'
    ]
  },
  {
    title: 'Factores Neurobiológicos',
    items: [
      'Liberación de dopamina',
      'Alteración de circuitos de recompensa',
      'Cambios en la corteza prefrontal',
      'Tolerancia digital'
    ]
  }
];

export const symptomTypes = [
  {
    title: 'Síntomas Conductuales',
    color: 'green',
    items: [
      'Uso excesivo (más de 6 horas diarias no laborales)',
      'Revisión compulsiva del teléfono',
      'Incapacidad para desconectarse',
      'Mentiras sobre tiempo de uso',
      'Descuido de responsabilidades',
      'Uso nocturno que afecta el sueño'
    ]
  },
  {
    title: 'Síntomas Físicos',
    color: 'teal',
    items: [
      'Fatiga visual y sequedad ocular',
      'Dolores de cabeza frecuentes',
      'Problemas posturales',
      'Síndrome del túnel carpiano',
      'Insomnio o alteraciones del sueño',
      'Sedentarismo y problemas metabólicos'
    ]
  },
  {
    title: 'Síntomas Emocionales',
    color: 'green',
    items: [
      'Ansiedad al no tener acceso',
      'Irritabilidad cuando se interrumpe',
      'Euforia durante el uso',
      'Depresión o vacío al desconectarse',
      'Baja tolerancia a la frustración'
    ]
  },
  {
    title: 'Síntomas Sociales',
    color: 'teal',
    items: [
      'Aislamiento social',
      'Conflictos interpersonales',
      'Pérdida de relaciones significativas',
      'Preferencia por interacciones virtuales',
      'Deterioro del rendimiento académico/laboral'
    ]
  }
];

export const phases: PhaseData[] = [
  {
    phase: 'Fase 1: Experimentación',
    desc: 'Uso inicial frecuente pero controlado. Curiosidad y exploración.',
    signs: [
      'Aumento gradual del tiempo de uso',
      'Descubrimiento de gratificación',
      'Sin consecuencias aparentes'
    ]
  },
  {
    phase: 'Fase 2: Uso Habitual',
    desc: 'El uso se vuelve rutinario y parte de la vida diaria.',
    signs: [
      'Patrones establecidos de uso',
      'Incorporación a rutinas diarias',
      'Primeras señales de dependencia'
    ]
  },
  {
    phase: 'Fase 3: Uso Problemático',
    desc: 'Comienzan a aparecer consecuencias negativas evidentes.',
    signs: [
      'Descuido de obligaciones',
      'Conflictos interpersonales',
      'Intentos fallidos de reducir uso'
    ]
  },
  {
    phase: 'Fase 4: Dependencia',
    desc: 'Pérdida total de control. La tecnología domina la vida.',
    signs: [
      'Uso compulsivo constante',
      'Síndrome de abstinencia severo',
      'Deterioro significativo de calidad de vida',
      'Necesidad de intervención profesional'
    ]
  }
];

export const consequences: ConsequenceCategory[] = [
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
];
