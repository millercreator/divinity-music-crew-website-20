import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Heart, Music, Users, Lightbulb, Zap, MessageSquare, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-background border-b">
          <Container>
            <div className="flex flex-col items-center justify-center min-h-[650px] text-center py-20">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  Worship to Divinity. Blessings to Humanity.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
                  We are more than a music group. We are a family bound by love, bridging the gap between Heaven and Earth through the power of sound and the act of service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Join Our Next Worship Night
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 bg-transparent">
                    Support Our Charity
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Who We Are Section */}
        <Section className="bg-secondary/40 border-b">
          <Container>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-balance">
                Connecting Humanity to Divinity Through Good Music
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                We believe music is a vessel. Since our origin in Aba, Abia State, in 2018, Divinity Music Crew (DMC) has grown from a local gathering into a global evangelical movement. But we don't just sing to fill the airwaves; we sing to shift atmospheres.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We are a family defined by <span className="font-semibold">total dependence on Grace</span>. Whether we are on stage or in the streets, our mission remains the same: to gather souls, impact lives, and demonstrate that true worship always leads to service.
              </p>
            </div>
          </Container>
        </Section>

        {/* All-In Pledge Section */}
        <Section className="bg-background border-b">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                  Our Music Feeds More Than Just the Soul
                </h2>
                <h3 className="text-2xl font-light text-muted-foreground">
                  The "All-In" Promise
                </h3>
              </div>

              <div className="bg-secondary/30 p-8 md:p-12 border mb-8">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  In a world where transparency is rare, we stand on a distinctive policy of integrity.
                </p>
                <div className="text-center mb-8">
                  <p className="text-5xl font-light mb-2">100%</p>
                  <p className="text-xl font-light text-foreground">
                    of all funds and proceeds go directly to charity
                  </p>
                </div>
                <p className="text-foreground/70 text-center">
                  Every donation, every ticket, and every offering given to DMC goes directly to supporting nonprofits, funding educational projects, and providing physical aid to individuals in need.
                </p>
              </div>

              <div className="text-center">
                <Button variant="outline" className="gap-2 bg-transparent">
                  See Our Impact Reports →
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Charity Festival Section */}
        <Section className="bg-secondary/40 border-b">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                  The Charity Worship Festival
                </h2>
                <h3 className="text-xl text-muted-foreground mb-8">
                  A Dual-Purpose Vision Inspired by the Spirit
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We believe in a holistic ministry. The Spirit needs revival, but the body needs sustenance. Our flagship Charity Worship Festival is where these two needs meet.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Ignite Spiritual Fire</h4>
                    <p className="text-foreground/70">
                      High-energy, spirit-filled worship that connects you directly to the Father.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ignite Tangible Change</h4>
                    <p className="text-foreground/70">
                      A platform to raise funds and awareness for the vulnerable in our society.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="gap-2">
                  View Upcoming Festival Dates
                </Button>
              </div>
              <div className="bg-muted/50 h-96 rounded-sm flex items-center justify-center border">
                <Music className="w-24 h-24 text-muted-foreground/50" />
              </div>
            </div>
          </Container>
        </Section>

        {/* 7 Pillars Section */}
        <Section className="bg-background border-b">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Bound by Love and Loyalty
              </h2>
              <p className="text-lg text-muted-foreground">
                Our seven core pillars keep our family strong and our mission pure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Heart, title: 'Love', description: 'The root of everything we do.' },
                { icon: MessageSquare, title: 'Prayers', description: 'The fuel for our engine.' },
                { icon: Zap, title: 'Holiness', description: 'Our standard of living.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-foreground/40" />
                    <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-foreground/70">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Lightbulb, title: 'Passion', description: 'The energy we bring.' },
                { icon: Users, title: 'Commitment', description: 'Our promise to the cause.' },
                { icon: Globe, title: 'Service', description: 'Faith in action.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-foreground/40" />
                    <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-foreground/70">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center pt-8 border-t">
              <p className="text-lg font-light text-foreground">
                & <span className="font-semibold">Humanity</span>
              </p>
              <p className="text-muted-foreground">Because people are the heartbeat of God.</p>
            </div>
          </Container>
        </Section>

        {/* Vision Section */}
        <Section className="bg-secondary/40 border-b">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-balance">
                The Future We Are Building
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Our vision is simple yet massive: <span className="font-semibold">A world reached by the Gospel of Jesus Christ and Love.</span>
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                We are marching toward a future where massive worship meetings and charity projects are established across nations. We are building a legacy where the song of the Lord brings hope to the hopeless—spiritually and physically.
              </p>
              <p className="text-xl font-light">
                Are you ready to be part of the revival?
              </p>
            </div>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-primary text-primary-foreground border-t">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                Make an Impact Today
              </h2>
              <p className="text-lg mb-10 opacity-90 leading-relaxed">
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
