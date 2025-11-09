'use client';

import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { BottleDisplay } from '@/components/BottleDisplay';
import { SAMPLE_FORMULAS } from '@/lib/constants';
import { Search, Filter, TrendingUp, Clock, Heart } from 'lucide-react';

const CATEGORIES = ['All', 'Floral', 'Citrus', 'Woody', 'Fresh', 'Oriental'];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="Discover" />

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="text"
            placeholder="Search formulas, creators..."
            className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-bg rounded-lg transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                category === 'All'
                  ? 'bg-accent text-white'
                  : 'bg-surface border border-border hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border">
          {[
            { icon: TrendingUp, label: 'Trending' },
            { icon: Clock, label: 'Recent' },
            { icon: Heart, label: 'Popular' },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
                tab.label === 'Trending'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Formula Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[...SAMPLE_FORMULAS, ...SAMPLE_FORMULAS].map((formula, index) => (
            <div
              key={index}
              className="p-4 bg-surface border border-border rounded-lg hover:border-accent transition-colors cursor-pointer"
            >
              <BottleDisplay 
                ingredients={formula.ingredients || []} 
                size="small"
              />
              <div className="mt-4 space-y-2">
                <h4 className="font-medium">{formula.name}</h4>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{formula.ingredients?.length || 0} ingredients</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{Math.floor(Math.random() * 500)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/20" />
                  <span className="text-xs text-muted">@creator{index}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
