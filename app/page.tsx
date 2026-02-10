import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Heart, Music, Users, Lightbulb, Zap, MessageSquare, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Image */}
        <Section className="bg-background border-b overflow-hidden">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen">
              <div className="flex flex-col justify-center py-12 md:py-0">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  Worship to Divinity. Blessings to Humanity.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
                  We are more than a music group. We are a family bound by love, bridging the gap between Heaven and Earth through the power of sound and the act of service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8">
                    Join Our Next Worship Night
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 bg-transparent">
                    Support Our Charity
                  </Button>
                </div>
              </div>
              <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-worship.jpg"
                  alt="People in worship with raised hands"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Who We Are Section */}
        <Section className="bg-secondary/40 border-b py-20 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-12">
                Connecting Humanity to Divinity Through Good Music
              </h2>
              <div className="space-y-6">
                <p className="section-description">
                  We believe music is a vessel. Since our origin in Aba, Abia State, in 2018, Divinity Music Crew (DMC) has grown from a local gathering into a global evangelical movement. But we don't just sing to fill the airwaves; we sing to shift atmospheres.
                </p>
                <p className="section-description">
                  We are a family defined by <span className="font-semibold">total dependence on Grace</span>. Whether we are on stage or in the streets, our mission remains the same: to gather souls, impact lives, and demonstrate that true worship always leads to service.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* All-In Pledge Section */}
        <Section className="bg-background border-b py-20 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="section-title mb-4">
                  Our Music Feeds More Than Just the Soul
                </h2>
                <h3 className="text-2xl font-light text-muted-foreground">
                  The "All-In" Promise
                </h3>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 md:p-16 mb-12 shadow-sm">
                <p className="section-description mb-8 text-center">
                  In a world where transparency is rare, we stand on a distinctive policy of integrity.
                </p>
                <div className="text-center mb-12">
                  <p className="text-6xl md:text-7xl font-light mb-4 text-primary">100%</p>
                  <p className="text-xl font-light text-foreground mb-4">
                    of all funds and proceeds go directly to charity
                  </p>
                  <p className="section-description">
                    Every donation, every ticket, and every offering given to DMC goes directly to supporting nonprofits, funding educational projects, and providing physical aid to individuals in need.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" className="gap-2 bg-transparent">
                  See Our Impact Reports →
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Charity Festival Section with Image */}
        <Section className="bg-secondary/40 border-b py-20 md:py-32">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/images/festival.jpg"
                    alt="Charity Worship Festival stage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="section-title mb-4">
                  The Charity Worship Festival
                </h2>
                <h3 className="section-subtitle mb-8">
                  A Dual-Purpose Vision Inspired by the Spirit
                </h3>
                <p className="section-description mb-8">
                  We believe in a holistic ministry. The Spirit needs revival, but the body needs sustenance. Our flagship Charity Worship Festival is where these two needs meet.
                </p>
                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-semibold mb-3">Ignite Spiritual Fire</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      High-energy, spirit-filled worship that connects you directly to the Father.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ignite Tangible Change</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      A platform to raise funds and awareness for the vulnerable in our society.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="gap-2">
                  View Upcoming Festival Dates
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* 7 Pillars Section */}
        <Section className="bg-background border-b py-20 md:py-32">
          <Container>
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">
                Bound by Love and Loyalty
              </h2>
              <p className="section-subtitle">
                Our seven core pillars keep our family strong and our mission pure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {[
                { icon: Heart, title: 'Love', description: 'The root of everything we do.' },
                { icon: MessageSquare, title: 'Prayers', description: 'The fuel for our engine.' },
                { icon: Zap, title: 'Holiness', description: 'Our standard of living.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300">
                    <div className="flex justify-center mb-6">
                      <Icon className="w-14 h-14 text-foreground/50" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {[
                { icon: Lightbulb, title: 'Passion', description: 'The energy we bring.' },
                { icon: Users, title: 'Commitment', description: 'Our promise to the cause.' },
                { icon: Globe, title: 'Service', description: 'Faith in action.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300">
                    <div className="flex justify-center mb-6">
                      <Icon className="w-14 h-14 text-foreground/50" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center pt-10 border-t border-border">
              <p className="text-2xl font-light text-foreground mb-2">
                & <span className="font-semibold">Humanity</span>
              </p>
              <p className="text-muted-foreground">Because people are the heartbeat of God.</p>
            </div>
          </Container>
        </Section>

        {/* Vision Section with Image */}
        <Section className="bg-secondary/40 border-b py-20 md:py-32">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/charity-impact.jpg"
                  alt="Community helping and charity impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="section-title mb-8">
                  The Future We Are Building
                </h2>
                <div className="space-y-6">
                  <p className="section-description">
                    Our vision is simple yet massive: <span className="font-semibold">A world reached by the Gospel of Jesus Christ and Love.</span>
                  </p>
                  <p className="section-description">
                    We are marching toward a future where massive worship meetings and charity projects are established across nations. We are building a legacy where the song of the Lord brings hope to the hopeless—spiritually and physically.
                  </p>
                  <p className="text-xl font-light text-foreground">
                    Are you ready to be part of the revival?
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-primary text-primary-foreground border-t py-20 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                Make an Impact Today
              </h2>
              <p className="text-lg mb-12 opacity-90 leading-relaxed text-balance">
                Whether you lift your voice in worship with us or sow a seed into our charity projects, you are helping connect Divinity to Humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Donate to the Cause
                </Button>
                <Button size="lg" variant="outline" className="px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
