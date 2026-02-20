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
        <Section className="bg-background border-b py-16 md:py-32 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  Fueled by <span className="font-script italic">Grace</span>. Committed to <span className="font-script italic">Service</span>.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
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
                  src="/bucket/25.jpeg"
                  alt="Warm welcoming team"
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
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 md:mb-12 text-balance max-w-4xl">
              Our <span className="font-script italic text-primary">Vision</span>
            </h2>
            <div className="mb-10">
              {/* Collage Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {["/bucket/3.jpeg", "/bucket/4.jpeg", "/bucket/5.jpeg", "/bucket/6.jpeg"].map((i) => (
                  <div key={i} className="relative aspect-square rounded overflow-hidden shadow">
                    <Image
                      src={i || ""}
                      alt={`Collage ${i}`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                Our vision is to see hearts awakened and lives transformed through the power of worship, creativity, and community. We long to be a bridge—reconciling humanity to <span className="font-script italic">Divinity</span> by carrying the presence of God into every space we enter, from local streets to global stages.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                We envision a world where pure worship inspires radical acts of love, service, and unity. Our commitment is to nurture a family defined by spiritual hunger, integrity, and an unwavering dependence on <span className="font-script italic">Grace</span>. Ultimately, every melody, every testimony, and every act of service points to our desire—seeing our generation touched, healed, and transformed by God’s love.
              </p>
            </div>
          </Container>
        </Section>


        {/* Mission Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/bucket/1.jpeg"
                  alt="Mission: worship and impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  Our <span className="font-script italic text-primary">Mission</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Our mission is to gather, empower, and send out a thriving family of worshippers committed to transforming lives through music and practical service.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    We exist to <span className="font-script italic">bridge the gap</span> between Heaven and Earth—leading people into authentic encounters with God and releasing blessings that meet real needs in our communities.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-lg text-foreground/80 leading-relaxed">
                    <li>
                      Using <span className="font-script italic">music</span> as a vessel to inspire hope, faith, and devotion.
                    </li>
                    <li>
                      Demonstrating the love of Christ through acts of service, compassion, and charity.
                    </li>
                    <li>
                      Raising a generation that pursues <span className="font-script italic">worship</span> and <span className="font-script italic">service</span> as inseparable callings.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 7 Pillars Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                The Values That Sustain Us
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                We are not just a team; we are a <span className="font-script italic">family</span> bound by <span className="font-script italic">loyalty</span>
              </p>
            </div>

            {/* Desktop: 4 columns, Mobile: stack vertically. */}
            <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-10 mb-10 md:mb-16">
              {[
                { icon: Heart, title: 'Love', description: 'The foundation of our existence and the motive behind our music.' },
                { icon: MessageSquare, title: 'Prayers', description: 'The engine room where our power is generated.' },
                { icon: Shield, title: 'Holiness', description: 'The standard of living we uphold, on and off the stage.' },
                { icon: Zap, title: 'Passion', description: 'The relentless energy we bring to the Kingdom.' },
                { icon: Lightbulb, title: 'Commitment', description: 'Our unwavering loyalty to the vision and to one another.' },
                { icon: Users, title: 'Service', description: 'The evidence of our faith. We lead by serving.' },
                { icon: Users, title: 'Humanity', description: 'Because people are the priority of Heaven.' },
              ].map((pillar, idx) => {
                const Icon = pillar.icon

                // To achieve up to 4 columns while distributing 6 items,
                // group into two rows if needed for larger screens.
                // We'll force wrapping after the 4th item.
                return (
                  <div
                    key={pillar.title}
                    className="text-center p-4 md:p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300 w-full"
                    style={idx === 4 && typeof window !== 'undefined' ? { gridColumnStart: 1 } : {}}
                  >
                    <div className="flex justify-center mb-4 md:mb-6">
                      <span className="flex items-center justify-center rounded-full bg-primary/10 size-18">
                        <Icon className="w-8 md:w-10 h-8 md:h-10 text-primary" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm mx-auto max-w-xs">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Team Members Gallery */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Meet Our <span className="font-script italic">Family</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                The faces, hearts, and hands behind the movement
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "David Oluwadamilare",
                  role: "Convener",
                  image: "/bucket/3.jpeg",
                },
                {
                  name: "Grace Adeyemi",
                  role: "Lead Vocalist",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Emmanuel Ibe",
                  role: "Music Director",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Sarah Olamide",
                  role: "Outreach Coordinator",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Joshua Bello",
                  role: "Guitarist",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Rebecca Edet",
                  role: "Welfare",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Deborah Ajayi",
                  role: "Finance",
                  image: "/placeholder-user.jpg",
                },
                {
                  name: "Ikechukwu Onuoha",
                  role: "Media",
                  image: "/placeholder-user.jpg",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="relative rounded-lg overflow-hidden group shadow-md transition-transform duration-300 hover:scale-[1.025] aspect-4/6 flex"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start p-4">
                    <div className="w-full text-left">
                      <h3 className="text-white text-lg md:text-xl font-script italic font-semibold mb-1 drop-shadow">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-sm text-white/90 drop-shadow">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
