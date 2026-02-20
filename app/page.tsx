import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Heart, Users, Lightbulb, Zap, MessageSquare, Globe, Quote, TextQuote } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <Section className="relative border-b overflow-hidden p-0 min-h-0 flex items-stretch">
          {/* Background Image covers the whole section */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/hero-worship.jpg"
              alt="People in worship with raised hands"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 pointer-events-none bg-black/40" />
          </div>
          {/* Content (centered), constrained to container */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <Container className="flex flex-col justify-center py-16 md:py-32 w-full pointer-events-auto items-center">
              <h1 className="text-white font-light tracking-tight mb-8 text-balance leading-tight text-center">
                <span className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center">
                  <span className="flex flex-wrap items-end justify-center">
                    <span className="font-script italic text-5xl sm:text-6xl md:text-8xl">Worship</span>
                    <span className="mx-2 sm:mx-4 md:mx-5 text-2xl sm:text-3xl md:text-4xl">to</span>
                    <span className="font-script italic text-5xl sm:text-6xl md:text-8xl ">Divinity</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl">.</span>
                  </span>
                  <span className="flex flex-wrap items-end justify-center">
                    <span className="font-script italic text-5xl sm:text-6xl md:text-8xl">Blessings</span>
                    <span className="mx-2 sm:mx-4 md:mx-5 text-2xl sm:text-3xl md:text-4xl">to</span>
                    <span className="font-script italic text-5xl sm:text-6xl md:text-8xl">Humanity</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl">.</span>
                  </span>
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-balance mb-8 text-white max-w-3xl text-center">
                We are more than a music group. We are a family bound by <span className="font-script italic">love</span>, bridging the gap between Heaven and Earth through the power of <span className="font-script italic">sound</span> and the act of <span className="font-script italic">service</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-1 w-full max-w-md justify-center items-center">
                <Button size="lg" className="w-full xs:w-auto">
                  Join Our Next Worship Night
                </Button>
                <Button variant="outline" size="lg" className="w-full xs:w-auto">
                  Support Our Charity
                </Button>
              </div>
            </Container>
          </div>
        </Section>

        {/* Who We Are Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 md:mb-12 text-balance max-w-4xl">
              Connecting <span className="font-script italic text-primary">Humanity</span> to <span className="font-script italic text-yellow-500">Divinity</span> Through Good Music
            </h2>
            <div className="mb-10">
              {/* Collage Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-square rounded overflow-hidden shadow">
                    <Image
                      src="/images/hero-worship.jpg"
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
                We believe music is a <span className="font-script italic">vessel</span>. Since our origin in Aba, Abia State, in 2018, Divinity Music Crew (DMC) has grown from a local gathering into a global evangelical movement. But we don't just sing to fill the airwaves; we sing to shift atmospheres.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                We are a family defined by <span className="font-semibold">total dependence on <span className="font-script italic">Grace</span></span>. Whether we are on stage or in the streets, our mission remains the same: to gather souls, impact lives, and demonstrate that true worship always leads to <span className="font-script italic">service</span>.
              </p>
            </div>
          </Container>
        </Section>

        {/* All-In Pledge Section */}
        <Section className="bg-background border-b py-24 md:py-40 flex items-center justify-center">
          <Container>
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-center relative">
                <Image
                  src="/icons/right-quote.svg"
                  alt="Right Quote"
                  width={80}
                  height={80}
                  className="mx-auto mb-5 text-primary"
                />
                <p className="text-3xl md:text-4xl font-light italic text-balance text-foreground mb-7">
                  "In a world where transparency is rare, we stand on a distinctive policy of <span className="font-script italic">integrity</span>.<br />
                  <span className="font-medium text-primary align-middle">
                    100%
                  </span> of all funds and proceeds go directly to <span className="font-script italic">charity</span>."
                </p>
                <footer className="text-md md:text-lg text-muted-foreground mt-2">
                  — The "All-In" <span className="font-script italic">Promise</span>
                </footer>
              </blockquote>
            </div>
          </Container>
        </Section>

        {/* Charity Festival Section with Image */}
        <Section className="bg-secondary/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-5/3 w-fullrounded-lg overflow-hidden shadow-sm">
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
                  The <span className="font-script italic text-primary">Charity</span> Worship Festival
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  A Dual-Purpose <span className="font-script italic">Vision</span> Inspired by the Spirit
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  We believe in a holistic ministry. The Spirit needs <span className="font-script italic">revival</span>, but the body needs <span className="font-script italic">sustenance</span>. Our flagship Charity Worship Festival is where these two needs meet.
                </p>
                <div className="mb-8 mt-5 md:mb-10 divide-y">
                  <div className='py-3'>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Ignite <span className="font-script italic">Spiritual</span> Fire</h4>
                    <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">
                      High-energy, spirit-filled worship that connects you directly to the Father.
                    </p>
                  </div>
                  <div className='py-3'>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Ignite Tangible <span className="font-script italic">Change</span></h4>
                    <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">
                      A platform to raise funds and awareness for the vulnerable in our society.
                    </p>
                  </div>
                </div>
                <Button size="lg">
                  Learn More
                </Button>
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
