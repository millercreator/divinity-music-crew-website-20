import Link from 'next/link'
import { mainNavItems } from '@/constants/navigation'
import { siteConfig } from '@/config/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded-full" />
          <span className="font-bold hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Add additional header actions here */}
        </div>
      </div>
    </header>
  )
}
