'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { ChevronDown } from 'lucide-react'

export default function Festival() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-background border-b overflow-hidden relative h-screen md:h-auto md:min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/cw1.jpg"
              alt="Massive crowd in worship"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <Container>
            <div className="relative z-10 flex flex-col justify-center items-center h-full min-h-screen text-center text-white py-12 md:py-0">
              <div className="max-w-4xl mx-auto px-4 md:px-0">
                <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                  The <span className="font-script italic">Charity</span> Worship Festival
                </h1>
                <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-balance opacity-95">
                  One Night of Radical <span className="font-script italic">Worship</span>. A <span className="font-script italic">Lifetime</span> of Tangible <span className="font-script italic">Impact</span>.
                </h2>
                <p className="text-base md:text-lg mb-10 md:mb-12 opacity-90 text-balance">
                  Join the movement where we <span className="font-script italic">sing</span> to Heaven and serve on Earth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button size="lg" className="px-6 md:px-8 text-sm md:text-base bg-white text-primary hover:bg-secondary">
                    Save My Seat
                  </Button>
                  <Button size="lg" variant="outline" className="px-6 md:px-8 text-sm md:text-base text-white border-white hover:bg-white/10 bg-transparent">
                    Donate to the Cause
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* The Experience Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  More Than a Concert. It's an <span className="font-script italic">Encounter</span>.
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    The Charity Worship Festival is not just an event; it is a mandate. Born from a vision to connect <span className="font-script italic">Humanity</span> to <span className="font-script italic">Divinity</span>, we gather annually to create an atmosphere where the Spirit moves freely and lives are transformed.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Expect high-energy praise, deep soul-stirring <span className="font-script italic">worship</span>, and a community of believers united by <span className="font-semibold">Passion</span> and <span className="font-semibold">Holiness</span>. Whether you have been with us since our first gathering in Aba in 2018 or this is your first time, come ready to pour out your heart.
                  </p>
                  <Button className="mt-4 md:mt-6 text-sm md:text-base px-6 md:px-8">
                    Learn About Our History
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/cw2.jpg"
                  alt="Passionate worship moment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Vision & Mission Section */}
        <Section className="bg-secondary/40 border-b py-12 md:py-32">
          <Container>
            {/* Responsive: stacks on mobile, side-by-side on md+ */}
            <div className="flex flex-col gap-12 md:gap-16">
              <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 items-stretch">
                
                {/* Left: Vision, Mission, Dual Purpose */}
                <div className="flex-1 flex flex-col justify-center space-y-8 sm:space-y-10 md:space-y-12">
                  {/* Vision */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-script italic font-semibold text-secondary-foreground mb-2">Vision</h3>
                    <p className="text-base xs:text-lg text-foreground/80 leading-relaxed text-balance">
                      To bridge the gap between <span className="font-script italic">Heaven</span> and <span className="font-script italic">Earth</span>—igniting authentic worship that leads to practical love and service in our world.
                    </p>
                  </div>
                  {/* Mission */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-script italic font-semibold text-secondary-foreground mb-2">Mission</h3>
                    <p className="text-base xs:text-lg text-foreground/80 leading-relaxed text-balance mb-3 sm:mb-4">
                      Our mission is to gather, empower, and send out a thriving family of worshippers committed to transforming lives through music and practical service.
                    </p>
                    <ul className="list-disc ml-5 space-y-2 text-base xs:text-lg text-foreground/80 leading-relaxed">
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
                  {/* The Dual-Purpose Approach */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="p-4 sm:p-5 md:p-6 bg-white border border-border rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm md:text-base">
                        <span className="font-script italic">We Gather</span>
                      </h4>
                      <p className="text-foreground/70 text-xs sm:text-sm md:text-base">
                        To refill our spiritual vessels through praise and connection to the Divine.
                      </p>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 bg-white border border-border rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm md:text-base">
                        <span className="font-script italic">We Give</span>
                      </h4>
                      <p className="text-foreground/70 text-xs sm:text-sm md:text-base">
                        To refill the physical vessels of the needy through direct humanitarian action.
                      </p>
                    </div>
                  </div>
                  <p className="text-base xs:text-lg text-foreground/80 leading-relaxed text-balance">
                    This festival is the primary engine for our humanitarian work. The funds raised here don't just pay for a show—they pay for school fees, feed the hungry, and support <span className="font-script italic">nonprofits</span> that are changing the world.
                  </p>
                </div>

                {/* Right: Illustrative Image */}
                <div className="flex-1 flex items-center mb-6 md:mb-0">
                  <div className="relative w-full h-60 xs:h-72 sm:h-80 md:h-[28rem] rounded-lg overflow-hidden shadow-sm border border-border">
                    <Image
                      src="/images/cwl.jpg"
                      alt="Worship and service connection"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Event Details */}
        <Section className="border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance">
                  Mark Your <span className="font-script italic">Calendar</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-4">
                  Don't miss the next move of God.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">📅</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Date</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">August 8, 2026</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">📍</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Location</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">[Venue Name & City]</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">⏰</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Time</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">Doors: 7 PM | Worship: 8 PM</p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12">
                <h3 className="font-semibold mb-2 text-sm md:text-base">Featuring</h3>
                <p className="text-foreground/70 text-sm">
                  The Divinity Music Crew & Special Guest Ministers
                </p>
              </div>

            </div>
          </Container>
        </Section>

        {/* Impact Showcase */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                  What We <span className="font-script italic">Achieved</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Real <span className="font-script italic">impact</span> from the last festival
                </p>
              </div>

              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm mb-10 md:mb-12">
                <Image
                  src="/images/fp1.jpg"
                  alt="Previous festival impact"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { number: '2000+', label: 'Attendees Blessed' },
                  { number: '200K+', label: 'Raised for Charity' },
                  { number: '20+', label: 'Lives saved for God' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 md:p-6 bg-secondary/40 rounded-lg">
                    <p className="text-3xl md:text-4xl font-light text-primary mb-2">
                      {stat.number}
                    </p>
                    <p className="text-xs md:text-sm text-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Sponsorship Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-center text-balance">
                Partner With The <span className="font-script italic">Vision</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance mb-8 md:mb-12">
                The Charity Worship Festival is a massive undertaking, and we cannot do it alone. We invite corporate brands, local businesses, and individual partners to stand with us.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance mb-10 md:mb-12">
                By sponsoring this event, you aren't just getting brand visibility; you are aligning your organization with a movement of <span className="font-semibold">Love, <span className="font-script italic">Service</span>, and <span className="font-script italic">Humanity</span></span>. Help us cover the logistics so that every single penny raised from the crowd can go to the poor.
              </p>
              <div className="text-center">
                <Button size="lg" className="text-sm md:text-base px-6 md:px-8">
                  Become a Sponsor
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-10 md:mb-16 text-center text-balance">
                Frequently Asked <span className="font-script italic">Questions</span>
              </h2>
              <div className="divide-y divide-border">
                {[
                  {
                    question: 'Is the event free?',
                    answer: 'Registration is free, but we strongly encourage a donation at the door. Every offering goes directly to charity. If you wish to purchase a VIP experience, those proceeds also go 100% to our humanitarian projects.',
                  },
                  {
                    question: 'Can I donate if I cannot attend?',
                    answer: 'Absolutely! Your support is needed even if your physical presence isn\'t possible. Use the "Donate to the Cause" button on this page to sow your seed into the mission.',
                  },
                  {
                    question: 'Who benefits from the funds raised?',
                    answer: 'We partner with vetted non-profits, educational institutions, and specific community cases. You can see detailed reports on our website showing exactly where every dollar goes.',
                  },
                  {
                    question: 'What about parking and safety?',
                    answer: 'Secure parking is available on-site. We have professional security and medical staff present throughout the event to ensure the safety and comfort of all attendees.',
                  },
                  {
                    question: 'Can I bring my family?',
                    answer: 'Yes! This is a family-friendly event. We have a designated family section and activities for children. The atmosphere is welcoming for all ages.',
                  },
                ].map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-4 md:py-6 flex items-center justify-between bg-transparent text-left focus:outline-none"
                    >
                      <span className="font-medium text-sm md:text-base pr-4 text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        } text-foreground/70`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="pb-4 md:pb-6">
                        <p className="text-foreground/70 text-xs md:text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-primary text-primary-foreground border-t py-16 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                The <span className="font-script italic">Atmosphere</span> is Ready. Are You?
              </h2>
              <p className="text-base md:text-lg mb-10 md:mb-12 opacity-90 leading-relaxed text-balance">
                Come for the music. Stay for the <span className="font-script italic">mission</span>. Let's raise a sound that Heaven hears and a support system that the Earth feels.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-6 md:px-8 text-sm md:text-base">
                  Register Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 md:px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm md:text-base"
                >
                  Give an Offering
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
