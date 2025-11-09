'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { BottleDisplay } from '@/components/BottleDisplay';
import { IngredientPicker } from '@/components/IngredientPicker';
import { Ingredient } from '@/lib/types';
import { ArrowLeft, Save, Share2, Sparkles } from 'lucide-react';
import Link from 'next/link';

type Step = 'top' | 'middle' | 'base' | 'review';

const STEPS: { id: Step; label: string; description: string }[] = [
  { id: 'top', label: 'Top Notes', description: 'First impression, light & fresh' },
  { id: 'middle', label: 'Middle Notes', description: 'Heart of the scent' },
  { id: 'base', label: 'Base Notes', description: 'Long-lasting foundation' },
  { id: 'review', label: 'Review', description: 'Finalize your creation' },
];

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState<Step>('top');
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [formulaName, setFormulaName] = useState('');

  const handleToggleIngredient = (ingredient: Ingredient) => {
    setSelectedIngredients(prev => {
      const exists = prev.some(i => i.id === ingredient.id);
      if (exists) {
        return prev.filter(i => i.id !== ingredient.id);
      }
      return [...prev, ingredient];
    });
  };

  const handleNext = () => {
    const currentIndex = STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1].id);
    }
  };

  const currentStepData = STEPS.find(s => s.id === currentStep)!;
  const stepIndex = STEPS.findIndex(s => s.id === currentStep);

  return (
    <div className="min-h-screen pb-24">
      <Header title="Create Scent" />

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Step {stepIndex + 1} of {STEPS.length}</span>
            <span className="text-accent font-medium">{Math.round(((stepIndex + 1) / STEPS.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">{currentStepData.label}</h2>
          <p className="text-muted">{currentStepData.description}</p>
        </div>

        {/* Bottle Preview */}
        <div className="py-6">
          <BottleDisplay ingredients={selectedIngredients} size="medium" />
          <p className="text-center text-sm text-muted mt-4">
            {selectedIngredients.length} ingredients selected
          </p>
        </div>

        {/* Content */}
        {currentStep === 'review' ? (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium">Formula Name</label>
              <input
                type="text"
                value={formulaName}
                onChange={(e) => setFormulaName(e.target.value)}
                placeholder="e.g., Midnight Garden"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Selected Ingredients</h3>
              <div className="space-y-2">
                {['top', 'middle', 'base'].map((category) => {
                  const categoryIngredients = selectedIngredients.filter(
                    i => i.category === category
                  );
                  if (categoryIngredients.length === 0) return null;

                  return (
                    <div key={category} className="p-4 bg-surface border border-border rounded-lg">
                      <p className="text-sm font-medium capitalize mb-2">{category} Notes</p>
                      <div className="flex flex-wrap gap-2">
                        {categoryIngredients.map((ingredient) => (
                          <div
                            key={ingredient.id}
                            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                            style={{ 
                              backgroundColor: `${ingredient.color}20`,
                              color: ingredient.color 
                            }}
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: ingredient.color }}
                            />
                            {ingredient.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 px-6 py-3 bg-surface border border-border rounded-lg font-medium hover:bg-surface/80 transition-colors flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Draft
              </button>
              <button className="flex-1 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Mint NFT
              </button>
            </div>
          </div>
        ) : (
          <IngredientPicker
            selectedIngredients={selectedIngredients}
            onToggleIngredient={handleToggleIngredient}
            category={currentStep as 'top' | 'middle' | 'base'}
          />
        )}

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          {stepIndex > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-surface border border-border rounded-lg font-medium hover:bg-surface/80 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}
          
          {currentStep !== 'review' && (
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
