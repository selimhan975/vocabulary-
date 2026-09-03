import { LevelConfig } from '../types';

export const availableLevels: LevelConfig[] = [
  {
    id: 'B1',
    name: 'B1',
    description: 'Intermediate',
    available: false
  },
  {
    id: 'B2',
    name: 'B2',
    description: 'Upper-Intermediate',
    available: true
  },
  {
    id: 'C1',
    name: 'C1',
    description: 'Advanced',
    available: false
  },
  {
    id: 'C2',
    name: 'C2',
    description: 'Proficiency',
    available: false
  }
];
