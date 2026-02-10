import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'My Next.js App',
  description: 'A modern Next.js application built with React, Tailwind CSS, and shadcn/ui',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: 'https://og-image.vercel.app',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
}
