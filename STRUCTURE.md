# Next.js Project Structure

This project follows Next.js and React best practices with a well-organized folder structure.

## 📁 Folder Structure

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Header and Footer
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                  # React components
│   ├── layout/                  # Layout components
│   │   ├── header.tsx          # Header component
│   │   └── footer.tsx          # Footer component
│   │
│   ├── common/                  # Reusable common components
│   │   ├── container.tsx       # Container wrapper
│   │   └── section.tsx         # Section wrapper
│   │
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── config/                      # Configuration files
│   └── site.ts                 # Site metadata and configuration
│
├── constants/                   # Application constants
│   └── navigation.ts           # Navigation items
│
├── hooks/                       # Custom React hooks
│   ├── use-toast.ts            # Toast notifications
│   ├── use-mobile.ts           # Mobile detection
│   └── use-async.ts            # Async data fetching
│
├── lib/                         # Utility functions
│   ├── utils.ts                # General utilities (cn function)
│   ├── helpers.ts              # Helper functions
│   └── api.ts                  # API utilities
│
├── public/                      # Static assets
│   ├── placeholder-logo.svg
│   └── ...
│
├── styles/                      # Additional stylesheets
│   └── globals.css
│
├── types/                       # TypeScript type definitions
│   └── index.ts                # Common types and interfaces
│
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🏗️ Architecture Overview

### App Router (`/app`)
- Uses Next.js 16 App Router for routing and layouts
- Server components by default for optimal performance
- Client components marked with `'use client'` directive

### Components Organization

**Layout Components** - Structural components that wrap pages
- `Header` - Navigation header
- `Footer` - Footer with links and information

**Common Components** - Reusable utility components
- `Container` - Responsive container wrapper
- `Section` - Section wrapper with padding

**UI Components** - shadcn/ui component library
- Pre-built, accessible, and customizable
- Located in `components/ui/`

### Configuration

**Site Config** (`config/site.ts`)
- Centralized site metadata
- Used for SEO and site-wide settings

**Navigation Constants** (`constants/navigation.ts`)
- Navigation items definitions
- Easy to maintain and reuse

### Utilities

**Types** (`types/index.ts`)
- Shared TypeScript interfaces
- Central type definitions

**Helpers** (`lib/helpers.ts`)
- General utility functions
- Date formatting, string truncation, etc.

**API Utils** (`lib/api.ts`)
- Fetch wrapper with common configuration
- Error handling and request building

**Custom Hooks** (`hooks/`)
- `useAsync` - Handle async operations
- `useForm` - Form state management
- `useMobile` - Responsive design detection

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built component library
- **Design Tokens** - CSS variables for theming

## 📱 Responsive Design

The project is mobile-first with responsive Tailwind classes:
```tsx
// Example responsive padding
<div className="p-4 md:p-6 lg:p-8">
```

## 🔒 Best Practices

- ✅ Server components by default
- ✅ Type-safe with TypeScript
- ✅ Semantic HTML
- ✅ Accessible components (WCAG)
- ✅ Performance optimized
- ✅ SEO friendly metadata
- ✅ Environment variable support

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Tailwind CSS

Customization in `tailwind.config.ts`:
- Design tokens and color schemes
- Typography settings
- Responsive breakpoints

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

## 🤝 Contributing

Feel free to customize and extend this structure for your project needs.

## 📄 License

MIT
