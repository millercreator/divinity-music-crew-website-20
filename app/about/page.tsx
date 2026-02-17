import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Heart, MessageSquare, Zap, Lightbulb, Users, Globe, Shield } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Divinity Music Crew\'s mission, history, and commitment to worship and service.',
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-background border-b overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
              <div className="flex flex-col justify-center py-12 md:py-0">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  Bound by <span className="font-script italic">Love</span>. Fueled by <span className="font-script italic">Grace</span>. Committed to <span className="font-script italic">Service</span>.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed text-balance">
                  We are Divinity Music Crew—an evangelical family on a mission to connect the heart of humanity to the presence of Divinity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="px-6 md:px-8 text-sm md:text-base">
                    Our Story
                  </Button>
                  <Button variant="outline" size="lg" className="px-6 md:px-8 bg-transparent text-sm md:text-base">
                    Partner With Us
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Divinity Music Crew team together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Origin Story Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/origin-story.jpg"
                  alt="DMC growth from 2018 to global movement"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  From a <span className="font-script italic">Seed</span> in Aba to a <span className="font-script italic">Global</span> Voice
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Every great move of God begins with a simple act of obedience.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Divinity Music Crew (DMC) was birthed on <span className="font-semibold">August 10, 2018</span>, in the vibrant city of <span className="font-semibold">Aba, Abia State, Nigeria</span>. What began as a local gathering of believers has blossomed into a global movement, recording hundreds of participants annually and crossing borders with a singular message of <span className="font-script italic">hope</span>.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    We didn't set out just to start a band. We set out to build a <span className="font-semibold">family</span>. Over the years, our growth hasn't been defined by fame, but by the lives touched, the souls won, and the communities uplifted. We operate with a total dependence on <span className="font-script italic">Grace</span>, acknowledging that every melody we sing and every life we impact is a testament to God's faithfulness.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Philosophy Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  <span className="font-script italic">Worship</span> to Divinity. <span className="font-script italic">Blessings</span> to Humanity.
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  Bridging the Gap Between the <span className="font-script italic">Spiritual</span> and the Physical
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    In the world of gospel music, it is easy to focus solely on the "Spiritual Impact"—the song, the sound, the atmosphere. But at DMC, we believe the Gospel is holistic. It must feed the <span className="font-script italic">soul</span> <span className="font-semibold">and</span> the <span className="font-script italic">body</span>.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Our ministry is built on a <span className="font-semibold">Dual-Purpose Vision</span> inspired by the Holy Spirit:
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-4 md:p-5 bg-secondary/30 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm md:text-base">To The Kingdom</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">
                        We offer high-energy, spirit-filled worship that connects men to God.
                      </p>
                    </div>
                    <div className="p-4 md:p-5 bg-secondary/30 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm md:text-base">To Society</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">
                        We offer tangible physical impact that connects the Church to the streets.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    We don't just sing about <span className="font-script italic">love</span>; we demonstrate it. Through our flagship Charity Worship Festival, we turn our praise into power—raising funds to support non-profits, educational projects, and individuals in need.
                  </p>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/bridge-concept.jpg"
                  alt="Bridge connecting spiritual and physical"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* 7 Pillars Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                The Values That Sustain Us
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                We are not just a team; we are a <span className="font-script italic">family</span> bound by <span className="font-script italic">loyalty</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                { icon: Heart, title: 'Love', description: 'The foundation of our existence and the motive behind our music.' },
                { icon: MessageSquare, title: 'Prayers', description: 'The engine room where our power is generated.' },
                { icon: Shield, title: 'Holiness', description: 'The standard of living we uphold, on and off the stage.' },
                { icon: Zap, title: 'Passion', description: 'The relentless energy we bring to the Kingdom.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="p-4 md:p-6 bg-white border border-border rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                    <Icon className="w-10 md:w-12 h-10 md:h-12 text-foreground/50 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: Lightbulb, title: 'Commitment', description: 'Our unwavering loyalty to the vision and to one another.' },
                { icon: Users, title: 'Service', description: 'The evidence of our faith. We lead by serving.' },
                { icon: Globe, title: 'Humanity', description: 'Because people are the priority of Heaven.' },
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="p-4 md:p-6 bg-white border border-border rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                    <Icon className="w-10 md:w-12 h-10 md:h-12 text-foreground/50 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* All-In Pledge Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  A Radical Commitment to <span className="font-script italic">Integrity</span>
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground">
                  The "All-In" <span className="font-script italic">Pledge</span>
                </h3>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 md:p-12 mb-10 md:mb-12 shadow-sm">
                <p className="text-lg text-foreground/80 leading-relaxed text-balance mb-8 text-center">
                  We know that trust is earned. That is why DMC operates differently from many other organizations.
                </p>
                <div className="text-center mb-10 md:mb-12">
                  <p className="text-2xl md:text-3xl font-light mb-4 text-foreground">
                    Our <span className="font-script italic">Pledge</span> is Simple:
                  </p>
                  <p className="text-5xl md:text-7xl font-light mb-6 text-primary">100%</p>
                  <p className="text-lg md:text-xl font-light text-foreground mb-6">
                    <span className="font-script italic">For Charity</span>
                  </p>
                  <p className="section-description text-sm md:text-base mb-6">
                    We have a strict policy that <span className="font-semibold">ALL</span> funds and proceeds generated from our projects are directed strictly toward charity outreaches and support.
                  </p>
                  <div className="space-y-2 text-foreground/70 text-xs md:text-sm mb-8">
                    <p><span className="font-semibold">Zero</span> percentage goes to overheads.</p>
                    <p><span className="font-semibold">Zero</span> percentage goes to personal profit.</p>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    When you support DMC, you aren't just funding a concert; you are funding educational scholarships, supporting orphanages, and providing relief to the vulnerable. We are merely the <span className="font-script italic">vessel</span>; the destination of your giving is always <span className="font-script italic">Humanity</span>.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" className="gap-2 bg-transparent text-sm md:text-base px-6 md:px-8">
                  See Our Impact →
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Mission & Vision Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/worship-crowd.jpg"
                  alt="Worship crowd with raised hands"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  Where We Are <span className="font-script italic">Going</span>
                </h2>

                <div className="space-y-8 md:space-y-10">
                  <div>
                    <h3 className="text-lg md:text-2xl font-light mb-3 md:mb-4">
                      Our <span className="font-script italic">Vision</span>
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                      To see a world reached by the Gospel of Jesus Christ and Love, preached through the medium of music and acts of service. We are building toward a future of massive worship meetings and charity projects established across nations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-light mb-3 md:mb-4">
                      Our <span className="font-script italic">Mission</span>
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                      To connect humanity to Divinity through good music.
                    </p>
                  </div>
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
                Join the <span className="font-script italic">Family</span>. Join the <span className="font-script italic">Movement</span>.
              </h2>
              <p className="text-base md:text-lg mb-8 md:mb-12 opacity-90 leading-relaxed text-balance">
                Whether you are a creative looking to serve, a partner looking to give, or a worshiper looking to belong—there is a place for you in this <span className="font-script italic">family</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-6 md:px-8 text-sm md:text-base">
                  Partner With Us
                </Button>
                <Button size="lg" variant="outline" className="px-6 md:px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm md:text-base">
                  Contact Us for Bookings
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
