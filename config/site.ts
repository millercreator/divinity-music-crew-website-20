import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Divinity Music Crew',
  description: 'Worship to Divinity. Blessings to Humanity. A movement bridging spiritual worship and tangible humanitarian aid through music.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: 'https://og-image.vercel.app',
  links: {
    twitter: 'https://twitter.com/divinitymusic',
    github: 'https://github.com',
  },
}
