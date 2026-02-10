import Link from 'next/link'
import { footerNavItems, socialLinks } from '@/constants/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="col-span-1">
            <h3 className="font-bold text-base md:text-lg mb-3">{siteConfig.name}</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4">Navigation</h4>
            <nav className="space-y-2">
              {footerNavItems.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4">Legal</h4>
            <nav className="space-y-2">
              {footerNavItems.slice(5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Worship to Divinity. <span className="font-script italic">Blessings</span> to Humanity.
          </p>
        </div>
      </div>
    </footer>
  )
}
