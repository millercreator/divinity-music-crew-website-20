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
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
                <Image
                  src="images/aboutus2.png"
                  alt="Warm welcoming team"
                  fill
                  className="object-cover"
                  priority
                  style = {{objectPosition: "top"}}
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Who We Are Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 md:mb-12 text-balance max-w-4xl">
              Our <span className="font-script italic text-secondary">Vision</span>
            </h2>
            <div className="mb-10">
              {/* Collage Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {["/bucket/24.jpeg", "/bucket/9.jpeg", "/bucket/37.jpeg", "/bucket/34.jpeg"].map((i) => (
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
                <strong>Our vision is to reach the world with the gospel of Jesus Christ and love preached through music and service.</strong> 
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                We envision a world where pure worship inspires radical acts of love, service, and unity. Our commitment is to nurture a family defined by spiritual hunger, integrity, and an unwavering dependence on <span className="font-script italic">Grace</span>. Ultimately, every melody, every testimony, and every act of service points to our desire—seeing our generation touched, healed, and transformed by God’s love.
              </p>
            </div>
          </Container>
        </Section>


        {/* Mission Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/bucket/35.jpeg"
                  alt="Mission: worship and impact"
                  fill
                  className="object-cover"
                   style = {{objectPosition: "top"}}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  Our <span className="font-script italic text-secondary">Mission</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    <strong>Connecting humanity to divinity through good music.</strong>
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
        <Section className="bg-secondary/20 border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance text-secondary-foreground">
                The Values That Sustain Us
              </h2>
              <p className="text-base md:text-lg text-secondary-foreground/90">
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

                return (
                  <div
                    key={pillar.title}
                    className="text-center p-4 md:p-6 w-full"
                    style={idx === 4 && typeof window !== 'undefined' ? { gridColumnStart: 1 } : {}}
                  >
                    <div className="flex justify-center mb-4 md:mb-6">
                      <span className="flex items-center justify-center rounded-full bg-primary size-20">
                        <Icon className="w-8 md:w-10 h-8 md:h-10 text-white" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-script italic font-semibold mb-2 md:mb-3 text-secondary-foreground">{pillar.title}</h3>
                    <p className="text-secondary-foreground/80 text-xs md:text-sm mx-auto max-w-xs">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Team Members Media */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Meet Our <span className="font-script text-secondary italic">Family</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                The faces, hearts, and hands behind the movement
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Favour Ikpeazu (Graceboy)",
                  role: "Founder/Director (Active)",
                  part: "Vocals",
                  status: "Active",
                  image: "images/graceboy.jpg",
                },
                {
                  name: "King Osinachi Erondu (King Trumpet)",
                  role: "Team Manager (Vocals & Trumpet (Active))",
                  part: "Vocals/Trumpet",
                  status: "Active",
                  image: "images/Ossy.jpg",
                },
                {
                  name: "Nmesoma Emecheta",
                  role: "Stage Director (Piano & Bass Guitar (Active))",
                  part: "Piano/Keyboard, Bass Guitar",
                  status: "Active",
                  image: "images/nmeso.jpg",
                },
                {
                  name: "Miracle Assumpta Nzeh",
                  role: "Team Welfare Director (Vocals (Active))",
                  part: "Vocals",
                  status: "Active",
                  image: "images/assumpta.jpg",
                },
                {
                  name: "Grace Anyanwu",
                  role: "Vocals (Active)",
                  status: "Active",
                  image: "images/grace.jpg",
                },
                {
                  name: "Ibeh Chidera Gift",
                  role: "Vocals (Active)",
                  status: "Active",
                  image: "images/dera.jpg",
                },
                {
                  name: "Franklin Arinze Onwosi",
                  role: "Drums (Active)",
                  status: "Active",
                  image: "images/Franklin.jpg",
                },
                {
                  name: "Ebuka Wilfred Ezeh",
                  role: "Bass Guitar, Piano/Keyboard (Active)",
                  status: "Active",
                  image: "images/Clinton.jpg",
                },
                {
                  name: "Ukpong Okon",
                  role: "Drums (Active)",
                  status: "Active",
                  image: "images/ukpong.jpg",
                },
                {
                  name: "Promise Effiong",
                  role: "Drums (Pioneer Member)",
                  status: "Pioneer Member",
                  image: "images/promise.jpg",
                },
                {
                  name: "Miracle Idika",
                  role: "Piano/Keyboard (Pioneer Member)",
                  status: "Pioneer Member",
                  image: "images/sunday.jpg",
                },
                {
                  name: "Chijioke Anyanwu",
                  role: "Piano/Keyboard (Pioneer Member)",
                  status: "Pioneer Member",
                  image: "images/chijioke.jpg",
                },
                {
                name: "Esther Chiedozie-Stanley",
                  role: "Vocals (Pioneer Member)",
                  status: "Pioneer Member",
                  image: "images/esther.jpg",
                },
                {
                name: "Emmanuella Ndukwo",
                  role: "Vocals (Pioneer Member)",
                  status: "Pioneer Member",
                  image: "images/ella.jpg",
                }
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
                <a 
                   href="https://forms.gle/BRxP4SnhFTpEdzr69" 
                    target="_blank" 
                    rel="noopener noreferrer"
>
                    <Button 
                   size="lg" 
                    variant="outline" 
                    className="px-6 md:px-8 text-sm md:text-base text-white border-white hover:bg-white/10 bg-transparent"
                    >
                      Join the workforce
                  </Button>
                  </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
