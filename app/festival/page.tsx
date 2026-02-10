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
              src="/images/festival-hero.jpg"
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
                  <p className="section-description text-sm md:text-base">
                    The Charity Worship Festival is not just an event; it is a mandate. Born from a vision to connect <span className="font-script italic">Humanity</span> to <span className="font-script italic">Divinity</span>, we gather annually to create an atmosphere where the Spirit moves freely and lives are transformed.
                  </p>
                  <p className="section-description text-sm md:text-base">
                    Expect high-energy praise, deep soul-stirring <span className="font-script italic">worship</span>, and a community of believers united by <span className="font-semibold">Passion</span> and <span className="font-semibold">Holiness</span>. Whether you have been with us since our first gathering in Aba in 2018 or this is your first time, come ready to pour out your heart.
                  </p>
                  <Button className="mt-4 md:mt-6 text-sm md:text-base px-6 md:px-8">
                    Learn About Our History
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/experience-moment.jpg"
                  alt="Passionate worship moment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* The Mission Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/images/mission-split.jpg"
                  alt="Worship and service connection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 md:mb-8 text-balance">
                  Your <span className="font-script italic">Worship</span> Has Hands and Feet.
                </h2>
                <p className="section-description text-sm md:text-base mb-6 md:mb-8">
                  We believe that true worship must lead to <span className="font-script italic">service</span>. That is why this gathering is unique. It is a "Dual-Purpose Vision" inspired by the Holy Spirit:
                </p>
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  <div className="p-4 md:p-6 bg-white border border-border rounded-lg">
                    <h3 className="font-semibold mb-2 text-sm md:text-base">
                      <span className="font-script italic">We Gather</span>
                    </h3>
                    <p className="text-foreground/70 text-xs md:text-sm">
                      To refill our spiritual vessels through praise and connection to the Divine.
                    </p>
                  </div>
                  <div className="p-4 md:p-6 bg-white border border-border rounded-lg">
                    <h3 className="font-semibold mb-2 text-sm md:text-base">
                      <span className="font-script italic">We Give</span>
                    </h3>
                    <p className="text-foreground/70 text-xs md:text-sm">
                      To refill the physical vessels of the needy through direct humanitarian action.
                    </p>
                  </div>
                </div>
                <p className="section-description text-sm md:text-base">
                  This festival is the primary engine for our humanitarian work. The funds raised here don't just pay for a show—they pay for school fees, feed the hungry, and support <span className="font-script italic">nonprofits</span> that are changing the world.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* The All-In Guarantee */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-block mb-6 md:mb-8">
                  <div className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg border border-primary/20">
                    <p className="text-sm md:text-base font-semibold">100% Policy</p>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                  The "All-In" <span className="font-script italic">Pledge</span>
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground">
                  Where Your Money Goes
                </h3>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 md:p-12 mb-8 md:mb-10 shadow-sm">
                <p className="section-description text-sm md:text-base mb-6 md:mb-8 text-center">
                  We want you to worship with a free mind and a clear <span className="font-script italic">conscience</span>.
                </p>
                <p className="text-center text-xl md:text-2xl font-light mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-light text-primary">100%</span>
                  <br />
                  of all proceeds, ticket sales, and offerings raised during this festival are strictly directed toward <span className="font-script italic">charity</span> outreaches.
                </p>
                <p className="section-description text-sm md:text-base text-center mb-6 md:mb-8">
                  We do not use festival proceeds to cover overheads. When you buy a ticket or sow a seed at the Charity Worship Festival, you are directly funding:
                </p>
                <div className="space-y-3 md:space-y-4 text-center">
                  <p className="text-sm md:text-base">✓ Charity Organization Support</p>
                  <p className="text-sm md:text-base">✓ Educational Projects</p>
                  <p className="text-sm md:text-base">✓ Orphanage & Widow Relief</p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" className="gap-2 bg-transparent text-sm md:text-base px-6 md:px-8">
                  Read About Our Financial Integrity →
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Event Details */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 md:mb-12 text-center text-balance">
                Mark Your <span className="font-script italic">Calendar</span>
              </h2>
              <p className="section-subtitle text-center mb-10 md:mb-16">
                Don't miss the next move of God.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">📅</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Date</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">August 10, 202X</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">📍</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Location</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">[Venue Name & City]</p>
                </div>
                <div className="bg-white border border-border rounded-lg p-6 md:p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl mb-4 font-light">⏰</div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Time</h3>
                  <p className="text-foreground/70 text-xs md:text-sm">Doors: 4 PM | Worship: 5 PM</p>
                </div>
              </div>

              <div className="text-center bg-white border border-border rounded-lg p-6 md:p-8">
                <h3 className="font-semibold mb-4 text-sm md:text-base">Featuring</h3>
                <p className="text-foreground/70 text-xs md:text-sm">
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
                <p className="section-subtitle">
                  Real <span className="font-script italic">impact</span> from the last festival
                </p>
              </div>

              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-sm mb-10 md:mb-12">
                <Image
                  src="/images/impact-previous.jpg"
                  alt="Previous festival impact"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { number: '500+', label: 'Students Supported' },
                  { number: '2000+', label: 'Attendees Blessed' },
                  { number: '$50K+', label: 'Raised for Charity' },
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
              <p className="section-description text-center text-sm md:text-base mb-8 md:mb-12">
                The Charity Worship Festival is a massive undertaking, and we cannot do it alone. We invite corporate brands, local businesses, and individual partners to stand with us.
              </p>
              <p className="section-description text-center text-sm md:text-base mb-10 md:mb-12">
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

              <div className="space-y-3 md:space-y-4">
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
                  <div key={index} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-secondary/20 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-sm md:text-base pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-border bg-secondary/20">
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
