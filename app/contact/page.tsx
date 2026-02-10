'use client'

import React from "react"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Mail, Phone, MapPin, Mic2, Hand as Hands, Handshake } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', topic: 'general', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const directChannels = [
    {
      icon: Mic2,
      title: 'Ministry & Bookings',
      description: 'Looking to bring the Divinity Music Crew to your city, church, or conference? We are ready to labor with you in worship.',
      email: 'bookings@divinitymusic.com',
      image: '/images/contact-booking.jpg',
    },
    {
      icon: Handshake,
      title: 'Charity & Partnerships',
      description: 'Interested in supporting the Charity Worship Festival or partnering with us to aid the vulnerable? Let\'s discuss how we can impact Humanity together.',
      email: 'partners@divinitymusic.com',
      image: '/images/contact-partnership.jpg',
    },
    {
      icon: Hands,
      title: 'Prayer & Testimonies',
      description: 'Do you have a testimony of what God did through our music? Or do you need a family to agree with you in prayer? We are here for you.',
      email: 'care@divinitymusic.com',
      image: '/images/contact-prayer.jpg',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-background border-b py-16 md:py-32 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-balance">
                  Let's <span className="font-script italic">Connect</span>. Let's <span className="font-script italic">Build</span>.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
                  Whether you want to invite us to minister, partner with our charity projects, or simply share a <span className="font-script italic">testimony</span>—we are listening.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="px-6 md:px-8 text-sm md:text-base">
                    Send Us a Message
                  </Button>
                  <Button variant="outline" size="lg" className="px-6 md:px-8 bg-transparent text-sm md:text-base">
                    Call Us
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/contact-hero.jpg"
                  alt="Warm welcoming team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Direct Channels Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Direct <span className="font-script italic">Channels</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                To ensure your message reaches the right part of the family, please choose the channel that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {directChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <div key={channel.title} className="group">
                    <div className="relative h-48 md:h-56 rounded-lg overflow-hidden mb-6 bg-muted">
                      <Image
                        src={channel.image || "/placeholder.svg"}
                        alt={channel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/50 flex-shrink-0 mt-1" strokeWidth={1.5} />
                      <h3 className="text-xl md:text-2xl font-light">
                        <span className="font-script italic font-semibold">{channel.title}</span>
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                      {channel.description}
                    </p>
                    <Link
                      href={`mailto:${channel.email}`}
                      className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {channel.email}
                    </Link>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Contact Form Section */}
        <Section className="bg-background border-b py-16 md:py-32">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Send Us a <span className="font-script italic">Message</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Fill out the form below, and a member of our team will get back to you within 48 hours.
                </p>
              </div>

              {submitted && (
                <div className="bg-primary/10 border border-primary/20 text-primary p-4 md:p-6 rounded-lg mb-8 text-center">
                  <p className="font-semibold mb-1">Message Received!</p>
                  <p className="text-sm md:text-base">God bless you, we will be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm md:text-base font-medium mb-2">
                    Phone Number <span className="text-muted-foreground">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base"
                    placeholder="+234 (0) 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm md:text-base font-medium mb-2">
                    Topic <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="partnership">Charity Partnership</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="testimony">Share a Testimony</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm md:text-base resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-8 text-sm md:text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </Container>
        </Section>

        {/* Direct Contact Info Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Our <span className="font-script italic">Base</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                  While our vision is global, our roots are local.
                </p>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-foreground/50 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-base md:text-lg mb-1">Headquarters</p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Aba, Abia State, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  <span className="font-script italic">Speak</span> with Us
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                  Available Mon-Fri, 9am - 5pm WAT
                </p>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-foreground/50 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-base md:text-lg mb-1">Phone</p>
                    <Link
                      href="tel:+234123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-foreground transition-colors text-sm md:text-base"
                    >
                      +234 (0) 123 456 789
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Social Connectivity Section */}
        <Section className="bg-primary text-primary-foreground border-t py-16 md:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                Join the <span className="font-script italic">Family</span> Online
              </h2>
              <p className="text-base md:text-lg mb-10 opacity-90 text-balance">
                Follow the movement for daily worship clips, charity updates, and behind-the-scenes moments.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link
                  href="https://instagram.com/divinitymusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
                >
                  Instagram
                </Link>
                <Link
                  href="https://facebook.com/divinitymusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 border-2 border-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors text-sm md:text-base"
                >
                  Facebook
                </Link>
                <Link
                  href="https://youtube.com/@divinitymusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 border-2 border-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors text-sm md:text-base"
                >
                  YouTube
                </Link>
                <Link
                  href="https://twitter.com/divinitymusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 border-2 border-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors text-sm md:text-base"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
