import { Ingredient } from './types';

export const INGREDIENT_LIBRARY: Ingredient[] = [
  // Top Notes
  { id: 'bergamot', name: 'Bergamot', category: 'top', color: '#FFA500', intensity: 8 },
  { id: 'lemon', name: 'Lemon', category: 'top', color: '#FFD700', intensity: 9 },
  { id: 'lavender', name: 'Lavender', category: 'top', color: '#E6E6FA', intensity: 7 },
  { id: 'mint', name: 'Mint', category: 'top', color: '#00CED1', intensity: 8 },
  
  // Middle Notes
  { id: 'rose', name: 'Rose', category: 'middle', color: '#FF69B4', intensity: 7 },
  { id: 'jasmine', name: 'Jasmine', category: 'middle', color: '#F8F8FF', intensity: 8 },
  { id: 'ylang', name: 'Ylang Ylang', category: 'middle', color: '#FFFF99', intensity: 6 },
  { id: 'geranium', name: 'Geranium', category: 'middle', color: '#FF1493', intensity: 7 },
  
  // Base Notes
  { id: 'sandalwood', name: 'Sandalwood', category: 'base', color: '#D2691E', intensity: 9 },
  { id: 'vanilla', name: 'Vanilla', category: 'base', color: '#F5DEB3', intensity: 8 },
  { id: 'musk', name: 'Musk', category: 'base', color: '#8B4513', intensity: 9 },
  { id: 'amber', name: 'Amber', category: 'base', color: '#FFBF00', intensity: 8 },
];

export const SAMPLE_FORMULAS: Partial<ScentFormula>[] = [
  {
    name: 'Citrus Dream',
    ingredients: [
      INGREDIENT_LIBRARY[0], // Bergamot
      INGREDIENT_LIBRARY[1], // Lemon
      INGREDIENT_LIBRARY[4], // Rose
      INGREDIENT_LIBRARY[9], // Vanilla
    ],
  },
  {
    name: 'Floral Elegance',
    ingredients: [
      INGREDIENT_LIBRARY[2], // Lavender
      INGREDIENT_LIBRARY[4], // Rose
      INGREDIENT_LIBRARY[5], // Jasmine
      INGREDIENT_LIBRARY[8], // Sandalwood
    ],
  },
];
