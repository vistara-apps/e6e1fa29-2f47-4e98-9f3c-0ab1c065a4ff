'use client';

import { Ingredient } from '@/lib/types';
import { INGREDIENT_LIBRARY } from '@/lib/constants';
import { Plus, Check } from 'lucide-react';

interface IngredientPickerProps {
  selectedIngredients: Ingredient[];
  onToggleIngredient: (ingredient: Ingredient) => void;
  category?: 'top' | 'middle' | 'base';
}

export function IngredientPicker({ 
  selectedIngredients, 
  onToggleIngredient,
  category 
}: IngredientPickerProps) {
  const ingredients = category 
    ? INGREDIENT_LIBRARY.filter(i => i.category === category)
    : INGREDIENT_LIBRARY;

  const isSelected = (ingredient: Ingredient) => 
    selectedIngredients.some(i => i.id === ingredient.id);

  return (
    <div className="grid grid-cols-2 gap-3">
      {ingredients.map((ingredient) => {
        const selected = isSelected(ingredient);
        return (
          <button
            key={ingredient.id}
            onClick={() => onToggleIngredient(ingredient)}
            className="relative p-4 rounded-lg border transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: selected ? `${ingredient.color}20` : 'var(--color-surface)',
              borderColor: selected ? ingredient.color : 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div 
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: ingredient.color }}
              />
              {selected ? (
                <Check className="w-5 h-5" style={{ color: ingredient.color }} />
              ) : (
                <Plus className="w-5 h-5 text-muted" />
              )}
            </div>
            <div className="text-left">
              <p className="font-medium text-sm">{ingredient.name}</p>
              <p className="text-xs text-muted capitalize">{ingredient.category} note</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
