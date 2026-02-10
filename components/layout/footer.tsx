import Link from 'next/link'
import { footerNavItems } from '@/constants/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="font-bold text-lg mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          {/* Links section */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Links</h4>
            <nav className="space-y-2">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social section */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Follow</h4>
            <div className="flex gap-4">
              {siteConfig.links.twitter && (
                <Link
                  href={siteConfig.links.twitter}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              )}
              {siteConfig.links.github && (
                <Link
                  href={siteConfig.links.github}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js and React
          </p>
        </div>
      </div>
    </footer>
  )
}
