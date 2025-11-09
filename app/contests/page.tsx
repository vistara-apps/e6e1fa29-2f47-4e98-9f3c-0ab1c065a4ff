'use client';

import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Trophy, Clock, Users, Award } from 'lucide-react';

const CONTESTS = [
  {
    id: 1,
    title: 'Summer Citrus Challenge',
    description: 'Create the perfect summer scent using citrus notes',
    prize: '0.5 ETH',
    participants: 234,
    endsIn: '3 days',
    status: 'active',
  },
  {
    id: 2,
    title: 'Floral Fantasy',
    description: 'Design an elegant floral composition',
    prize: '0.3 ETH',
    participants: 189,
    endsIn: '5 days',
    status: 'active',
  },
  {
    id: 3,
    title: 'Woody Wonders',
    description: 'Craft a sophisticated woody fragrance',
    prize: '0.4 ETH',
    participants: 156,
    endsIn: '1 week',
    status: 'upcoming',
  },
];

export default function ContestsPage() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="Contests" />

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Hero */}
        <div className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-lg text-center space-y-3">
          <Trophy className="w-12 h-12 mx-auto text-accent" />
          <h2 className="text-2xl font-bold">Compete & Win</h2>
          <p className="text-muted max-w-md mx-auto">
            Join contests, showcase your creativity, and win prizes
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Active', value: '12' },
            { label: 'Prize Pool', value: '5.2 ETH' },
            { label: 'Winners', value: '48' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-surface border border-border rounded-lg text-center">
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contests List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Active Contests</h3>
          
          {CONTESTS.map((contest) => (
            <div
              key={contest.id}
              className="p-5 bg-surface border border-border rounded-lg hover:border-accent transition-colors cursor-pointer space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{contest.title}</h4>
                    {contest.status === 'active' && (
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted">{contest.description}</p>
                </div>
                <Trophy className="w-6 h-6 text-accent flex-shrink-0" />
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted">
                  <Award className="w-4 h-4" />
                  <span>{contest.prize}</span>
                </div>
                <div className="flex items-center gap-1 text-muted">
                  <Users className="w-4 h-4" />
                  <span>{contest.participants}</span>
                </div>
                <div className="flex items-center gap-1 text-muted">
                  <Clock className="w-4 h-4" />
                  <span>{contest.endsIn}</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Enter Contest
              </button>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
