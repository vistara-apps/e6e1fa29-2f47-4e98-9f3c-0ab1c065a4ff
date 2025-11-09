# ScentChain - Collaborative Perfume Creation on Base

A Base Mini App that enables users to collaboratively design, own, and share unique perfume formulas as NFTs on Base, leveraging Farcaster for discovery and engagement.

## Features

- 🎨 **Collaborative Formula Development**: Invite Farcaster friends to co-create scent formulas
- 🪙 **Tokenized Scent Recipes**: Mint unique perfume formulas as NFTs on Base
- 🗳️ **Interactive Polls & Contests**: Vote on ingredients and participate in design challenges
- 👤 **Profile-Linked Scent Libraries**: Showcase your creations on your Farcaster profile
- 🎯 **Reputation System**: Earn badges for contributions and achievements

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit (Coinbase Wallet, WalletConnect)
- **Social Integration**: Farcaster MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **State Management**: React 19 with hooks

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from https://portal.cdp.coinbase.com/

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page
├── create/             # Formula creation flow
├── discover/           # Browse formulas
├── contests/           # Contests and challenges
├── profile/            # User profile and library
└── globals.css         # Global styles with BASE theme

components/
├── BottleDisplay.tsx   # 3D bottle visualization
├── IngredientPicker.tsx # Ingredient selection UI
├── Header.tsx          # App header with wallet
└── BottomNav.tsx       # Bottom navigation

lib/
├── types.ts            # TypeScript interfaces
└── constants.ts        # Ingredient library and data
```

## Key Components

### BottleDisplay
Visualizes perfume formulas with layered colors representing top, middle, and base notes.

### IngredientPicker
Interactive ingredient selection with categories and visual feedback.

### Formula Creation Flow
Multi-step process for building scent formulas:
1. Select top notes (first impression)
2. Choose middle notes (heart of scent)
3. Pick base notes (foundation)
4. Review and mint as NFT

## Farcaster Integration

- **MiniKit SDK**: Access user context (FID, username, profile)
- **Notifications**: Alert users of collaborations and updates
- **Frames**: Share formulas and polls in Farcaster feeds
- **Profile Display**: Showcase scent library on Farcaster profiles

## Base Integration

- **OnchainKit**: Wallet connection and transaction handling
- **Smart Contracts**: ERC-721 NFTs for scent formulas
- **Gas Sponsorship**: Paymaster for gasless transactions
- **IPFS Storage**: Decentralized metadata storage

## Design System

- **Theme**: BASE (dark blue background, Base blue accents)
- **Colors**: CSS variables for consistent theming
- **Typography**: System fonts with clear hierarchy
- **Components**: Reusable, accessible UI elements
- **Animations**: Smooth transitions and micro-interactions

## Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   - Connect your GitHub repository
   - Set environment variables
   - Deploy automatically on push

3. **Configure Farcaster manifest**:
   - Update `public/.well-known/farcaster.json` with your domain
   - Set up webhook endpoint for Frame interactions

## Contributing

Contributions are welcome! Please follow these guidelines:
- Use TypeScript for all new code
- Follow the existing code style
- Test on mobile devices
- Update documentation as needed

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/yourusername/scentchain/issues)
- Farcaster: @scentchain
- Discord: [Join our community](https://discord.gg/scentchain)

---

Built with ❤️ on Base
