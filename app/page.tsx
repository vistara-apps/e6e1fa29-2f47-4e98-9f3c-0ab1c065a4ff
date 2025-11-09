'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { BottleDisplay } from '@/components/BottleDisplay';
import { SAMPLE_FORMULAS, INGREDIENT_LIBRARY } from '@/lib/constants';
import { Sparkles, Users, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted">Loading ScentChain...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Header title="ScentChain" />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Collaborative Perfume Creation on Base</span>
          </div>
          
          <h2 className="text-4xl font-bold">
            Create Unique Scents
            <br />
            <span className="text-accent">Together</span>
          </h2>
          
          <p className="text-muted max-w-md mx-auto">
            Design, own, and share perfume formulas as NFTs. Collaborate with friends and build your scent legacy.
          </p>

          <div className="flex gap-3 justify-center pt-4">
            <button className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Start Creating
            </button>
            <button className="px-6 py-3 bg-surface border border-border rounded-lg font-medium hover:bg-surface/80 transition-colors">
              Explore Library
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { icon: Users, label: 'Creators', value: '2.4K' },
            { icon: TrendingUp, label: 'Formulas', value: '8.7K' },
            { icon: Award, label: 'NFTs Minted', value: '5.2K' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-surface border border-border rounded-lg text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Featured Formulas */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Featured Formulas</h3>
            <button className="text-accent text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SAMPLE_FORMULAS.map((formula, index) => (
              <div
                key={index}
                className="p-4 bg-surface border border-border rounded-lg hover:border-accent transition-colors cursor-pointer"
              >
                <BottleDisplay 
                  ingredients={formula.ingredients || []} 
                  size="small"
                />
                <div className="mt-4 text-center">
                  <h4 className="font-medium">{formula.name}</h4>
                  <p className="text-xs text-muted mt-1">
                    {formula.ingredients?.length || 0} ingredients
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ingredient Showcase */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Popular Ingredients</h3>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {INGREDIENT_LIBRARY.slice(0, 8).map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex-shrink-0 w-24 p-3 bg-surface border border-border rounded-lg text-center hover:border-accent transition-colors cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: ingredient.color }}
                />
                <p className="text-xs font-medium truncate">{ingredient.name}</p>
                <p className="text-xs text-muted capitalize">{ingredient.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-lg text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to Create?</h3>
          <p className="text-muted max-w-md mx-auto">
            Start your perfume journey today. Collaborate with friends, mint NFTs, and build your reputation.
          </p>
          <button className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Create Your First Scent
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
