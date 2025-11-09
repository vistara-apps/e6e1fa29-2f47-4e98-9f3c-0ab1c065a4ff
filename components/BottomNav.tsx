'use client';

import { Home, Search, Layers, Trophy, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Discover', href: '/discover' },
  { icon: Layers, label: 'Create', href: '/create' },
  { icon: Trophy, label: 'Contests', href: '/contests' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-fg'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
