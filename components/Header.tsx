'use client';

import { Menu, Bell, User } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-surface rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>
            
            <ConnectWallet>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Connect</span>
              </div>
            </ConnectWallet>
          </div>
        </div>
      </div>
    </header>
  );
}
