export interface User {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl?: string;
  walletAddress?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  category: 'top' | 'middle' | 'base';
  color: string;
  intensity: number;
}

export interface ScentFormula {
  id: string;
  name: string;
  ingredients: Ingredient[];
  creatorFid: number;
  contributorFids: number[];
  status: 'draft' | 'finalized' | 'minted';
  mintedNftId?: string;
  createdAt: Date;
}

export interface Poll {
  id: string;
  question: string;
  options: string[];
  votes: Record<string, number>;
  endTime: Date;
  creatorFid: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
}
