'use client';

import { Ingredient } from '@/lib/types';

interface BottleDisplayProps {
  ingredients: Ingredient[];
  size?: 'small' | 'medium' | 'large';
}

export function BottleDisplay({ ingredients, size = 'medium' }: BottleDisplayProps) {
  const sizeClasses = {
    small: 'w-24 h-32',
    medium: 'w-32 h-48',
    large: 'w-40 h-56',
  };

  const topNotes = ingredients.filter(i => i.category === 'top');
  const middleNotes = ingredients.filter(i => i.category === 'middle');
  const baseNotes = ingredients.filter(i => i.category === 'base');

  const getLayerColor = (notes: Ingredient[]) => {
    if (notes.length === 0) return 'transparent';
    return notes[0].color;
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Bottle container */}
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
          {/* Liquid layers */}
          <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden rounded-t-full">
            {/* Base notes */}
            {baseNotes.length > 0 && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/3 transition-all duration-500"
                style={{ backgroundColor: getLayerColor(baseNotes), opacity: 0.6 }}
              />
            )}
            {/* Middle notes */}
            {middleNotes.length > 0 && (
              <div 
                className="absolute bottom-1/3 left-0 right-0 h-1/3 transition-all duration-500"
                style={{ backgroundColor: getLayerColor(middleNotes), opacity: 0.5 }}
              />
            )}
            {/* Top notes */}
            {topNotes.length > 0 && (
              <div 
                className="absolute bottom-2/3 left-0 right-0 h-1/3 transition-all duration-500"
                style={{ backgroundColor: getLayerColor(topNotes), opacity: 0.4 }}
              />
            )}
          </div>
        </div>
        
        {/* Dropper cap */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8">
          <div className="w-full h-full bg-gradient-to-b from-white/40 to-white/20 rounded-t-lg border border-white/30" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-4 bg-white/30" />
        </div>

        {/* Accent dot */}
        {ingredients.length > 0 && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full blur-xl"
            style={{ backgroundColor: ingredients[0].color, opacity: 0.3 }}
          />
        )}
      </div>
    </div>
  );
}
