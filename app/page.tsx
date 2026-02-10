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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
              <div className="flex flex-col justify-center py-12 md:py-0">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  <span className="font-script italic text-6xl md:text-8xl">Worship</span> to 
                  <span className="font-script italic text-6xl md:text-8xl"> Divinity</span>. 
                  <br />
                  <span className="font-script italic text-6xl md:text-8xl">Blessings</span> to 
                  <span className="font-script italic text-6xl md:text-8xl"> Humanity</span>.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed text-balance">
                  We are more than a music group. We are a family bound by <span className="font-script italic text-lg">love</span>, bridging the gap between Heaven and Earth through the power of <span className="font-script italic text-lg">sound</span> and the act of <span className="font-script italic text-lg">service</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="px-6 md:px-8 text-sm md:text-base">
                    Join Our Next Worship Night
                  </Button>
                  <Button variant="outline" size="lg" className="px-6 md:px-8 bg-transparent text-sm md:text-base">
                    Support Our Charity
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
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
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 md:mb-12 text-balance">
                Connecting <span className="font-script italic">Humanity</span> to <span className="font-script italic">Divinity</span> Through Good Music
              </h2>
              <div className="space-y-6">
                <p className="section-description">
                  We believe music is a <span className="font-script italic">vessel</span>. Since our origin in Aba, Abia State, in 2018, Divinity Music Crew (DMC) has grown from a local gathering into a global evangelical movement. But we don't just sing to fill the airwaves; we sing to shift atmospheres.
                </p>
                <p className="section-description">
                  We are a family defined by <span className="font-semibold">total dependence on <span className="font-script italic">Grace</span></span>. Whether we are on stage or in the streets, our mission remains the same: to gather souls, impact lives, and demonstrate that true worship always leads to <span className="font-script italic">service</span>.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* All-In Pledge Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Our Music Feeds More Than Just the <span className="font-script italic">Soul</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-light text-muted-foreground">
                  The "All-In" <span className="font-script italic">Promise</span>
                </h3>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 md:p-16 mb-10 md:mb-12 shadow-sm">
                <p className="section-description mb-8 text-center">
                  In a world where transparency is rare, we stand on a distinctive policy of <span className="font-script italic">integrity</span>.
                </p>
                <div className="text-center mb-10 md:mb-12">
                  <p className="text-5xl md:text-7xl font-light mb-4 text-primary">100%</p>
                  <p className="text-lg md:text-xl font-light text-foreground mb-4">
                    of all funds and proceeds go directly to <span className="font-script italic">charity</span>
                  </p>
                  <p className="section-description text-sm md:text-base">
                    Every donation, every ticket, and every offering given to DMC goes directly to supporting nonprofits, funding educational projects, and providing physical aid to individuals in need.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" className="gap-2 bg-transparent text-sm md:text-base">
                  See Our Impact Reports →
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Charity Festival Section with Image */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/images/festival.jpg"
                    alt="Charity Worship Festival stage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  The <span className="font-script italic">Charity</span> Worship Festival
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  A Dual-Purpose <span className="font-script italic">Vision</span> Inspired by the Spirit
                </h3>
                <p className="section-description text-sm md:text-base mb-6 md:mb-8">
                  We believe in a holistic ministry. The Spirit needs <span className="font-script italic">revival</span>, but the body needs <span className="font-script italic">sustenance</span>. Our flagship Charity Worship Festival is where these two needs meet.
                </p>
                <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Ignite <span className="font-script italic">Spiritual</span> Fire</h4>
                    <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">
                      High-energy, spirit-filled worship that connects you directly to the Father.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Ignite Tangible <span className="font-script italic">Change</span></h4>
                    <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">
                      A platform to raise funds and awareness for the vulnerable in our society.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="gap-2 text-sm md:text-base px-6 md:px-8">
                  View Upcoming Festival Dates
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* 7 Pillars Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Bound by <span className="font-script italic">Love</span> and Loyalty
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Our seven core pillars keep our family strong and our mission <span className="font-script italic">pure</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
              {[
                { icon: Heart, title: 'Love', description: 'The root of everything we do.' },
                { icon: MessageSquare, title: 'Prayers', description: 'The fuel for our engine.' },
                { icon: Zap, title: 'Holiness', description: 'Our standard of living.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center p-4 md:p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300">
                    <div className="flex justify-center mb-4 md:mb-6">
                      <Icon className="w-12 md:w-14 h-12 md:h-14 text-foreground/50" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
              {[
                { icon: Lightbulb, title: 'Passion', description: 'The energy we bring.' },
                { icon: Users, title: 'Commitment', description: 'Our promise to the cause.' },
                { icon: Globe, title: 'Service', description: 'Faith in action.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="text-center p-4 md:p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300">
                    <div className="flex justify-center mb-4 md:mb-6">
                      <Icon className="w-12 md:w-14 h-12 md:h-14 text-foreground/50" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center pt-8 md:pt-10 border-t border-border">
              <p className="text-xl md:text-2xl font-light text-foreground mb-2">
                & <span className="font-script italic font-semibold">Humanity</span>
              </p>
              <p className="text-muted-foreground text-sm md:text-base">Because people are the heartbeat of God.</p>
            </div>
          </Container>
        </Section>

        {/* Vision Section with Image */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/charity-impact.jpg"
                  alt="Community helping and charity impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  The <span className="font-script italic">Future</span> We Are Building
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="section-description text-sm md:text-base">
                    Our vision is simple yet massive: <span className="font-semibold font-script italic">A world reached by the Gospel of Jesus Christ and Love.</span>
                  </p>
                  <p className="section-description text-sm md:text-base">
                    We are marching toward a future where massive worship meetings and charity projects are established across nations. We are building a <span className="font-script italic">legacy</span> where the song of the Lord brings <span className="font-script italic">hope</span> to the hopeless—spiritually and physically.
                  </p>
                  <p className="text-lg md:text-xl font-light text-foreground">
                    Are you ready to be part of the <span className="font-script italic">revival</span>?
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-primary text-primary-foreground border-t py-16 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                Make an <span className="font-script italic">Impact</span> Today
              </h2>
              <p className="text-base md:text-lg mb-8 md:mb-12 opacity-90 leading-relaxed text-balance">
                Whether you lift your voice in <span className="font-script italic">worship</span> with us or sow a <span className="font-script italic">seed</span> into our charity projects, you are helping connect Divinity to Humanity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-6 md:px-8 text-sm md:text-base">
                  Donate to the Cause
                </Button>
                <Button size="lg" variant="outline" className="px-6 md:px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm md:text-base">
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
