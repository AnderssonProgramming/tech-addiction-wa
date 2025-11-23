import { LucideIcon } from 'lucide-react';

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
}

export interface CategoryData {
  title: string;
  items: string[];
}

export interface PhaseData {
  phase: string;
  desc: string;
  signs: string[];
}

export interface ConsequenceCategory {
  category: string;
  color: string;
  items: string[];
}
