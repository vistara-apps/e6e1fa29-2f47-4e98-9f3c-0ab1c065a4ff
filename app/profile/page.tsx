'use client';

import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { BottleDisplay } from '@/components/BottleDisplay';
import { SAMPLE_FORMULAS } from '@/lib/constants';
import { Settings2, Share2, Award, Layers } from 'lucide-react';

const BADGES = [
  { name: 'Creator', icon: '🎨', earned: true },
  { name: 'Collaborator', icon: '🤝', earned: true },
  { name: 'Contest Winner', icon: '🏆', earned: false },
  { name: 'Trendsetter', icon: '⭐', earned: true },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="Profile" />

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-4xl">
            👤
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">@creator</h2>
            <p className="text-muted">Scent Alchemist</p>
          </div>

          <div className="flex gap-3 justify-center">
            <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share Profile
            </button>
            <button className="px-4 py-2 bg-surface border border-border rounded-lg font-medium hover:bg-surface/80 transition-colors">
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Created', value: '24' },
            { label: 'Collected', value: '12' },
            { label: 'Collaborations', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-surface border border-border rounded-lg text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Badges</h3>
          <div className="grid grid-cols-4 gap-3">
            {BADGES.map((badge) => (
              <div
                key={badge.name}
                className={`p-3 rounded-lg text-center ${
                  badge.earned
                    ? 'bg-accent/20 border border-accent/30'
                    : 'bg-surface border border-border opacity-50'
                }`}
              >
                <div className="text-2xl mb-1">{badge.icon}</div>
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border">
          {[
            { icon: Layers, label: 'Created' },
            { icon: Award, label: 'Collected' },
          ].map((tab, index) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
                index === 0
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scent Library */}
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
      </main>

      <BottomNav />
    </div>
  );
}
