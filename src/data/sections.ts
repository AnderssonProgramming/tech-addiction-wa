import { 
  Smartphone, 
  AlertCircle, 
  TrendingUp, 
  Activity, 
  Zap, 
  Heart, 
  BarChart3, 
  Users 
} from 'lucide-react';
import { Section } from '../types';

export const sections: Section[] = [
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
