'use client'

import React from "react"

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Music, Heart, Users } from 'lucide-react'

type GalleryCategory = 'worship' | 'charity' | 'family'

interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
  category: GalleryCategory
}

const galleryImages: GalleryImage[] = [
  {
    id: 'worship-1',
    src: '/images/worship-moment-1.jpg',
    alt: 'Choir singing with passion on stage',
    caption: 'Deep Worship',
    category: 'worship',
  },
  {
    id: 'worship-2',
    src: '/images/worship-moment-2.jpg',
    alt: 'Crowd with hands raised in spiritual reverence',
    caption: 'The Crowd Anthem',
    category: 'worship',
  },
  {
    id: 'worship-3',
    src: '/images/worship-moment-3.jpg',
    alt: 'Band performing on stage',
    caption: 'Spirit-Filled Moments',
    category: 'worship',
  },
  {
    id: 'charity-1',
    src: '/images/charity-moment-1.jpg',
    alt: 'Team member handing aid to community member',
    caption: 'Community Support',
    category: 'charity',
  },
  {
    id: 'charity-2',
    src: '/images/charity-moment-2.jpg',
    alt: 'School outreach program with children',
    caption: 'School Outreach Project',
    category: 'charity',
  },
  {
    id: 'charity-3',
    src: '/images/charity-moment-3.jpg',
    alt: 'Community gathering for charity event',
    caption: 'Community Food Drive',
    category: 'charity',
  },
  {
    id: 'family-1',
    src: '/images/family-moment-1.jpg',
    alt: 'Choir members rehearsing together',
    caption: 'Rehearsal Moments',
    category: 'family',
  },
  {
    id: 'family-2',
    src: '/images/family-moment-2.jpg',
    alt: 'DMC crew members bonding',
    caption: 'The Family',
    category: 'family',
  },
  {
    id: 'family-3',
    src: '/images/family-moment-3.jpg',
    alt: 'Musicians practicing together',
    caption: 'Creative Sessions',
    category: 'family',
  },
]

const categories: { id: GalleryCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'worship', label: 'Worship Nights', icon: <Music className="w-4 h-4" /> },
  { id: 'charity', label: 'Outreach', icon: <Heart className="w-4 h-4" /> },
  { id: 'family', label: 'The Family', icon: <Users className="w-4 h-4" /> },
]

export default function MediaGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('worship')

  const filteredImages = galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-background border-b overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
              <div className="flex flex-col justify-center py-12 md:py-0">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
                  Moments of <span className="font-script italic">Grace</span>.
                  <br />
                  Evidence of <span className="font-script italic">Love</span>.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed text-balance">
                  Witness the journey as we connect Humanity to Divinity. From the roar of <span className="font-script italic">worship</span> in the stadium to the quiet joy of <span className="font-script italic">service</span> in the streets, this is our story in frames.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery-hero.jpg"
                  alt="Split composition of worship and charity"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Gallery Intro & Category Selector */}
        <Section className="bg-secondary/40 border-b py-12 md:py-16">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-balance">
                We Believe Every Picture <span className="font-script italic">Tells</span> a Testimony
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                Browse our gallery to experience the two heartbeats of DMC: the passion of our worship and the compassion of our outreach.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </Container>
        </Section>

        {/* Gallery Grid */}
        <Section className="bg-background border-b py-16 md:py-24">
          <Container>
            {/* Worship Section Header */}
            {activeCategory === 'worship' && (
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Sounds of <span className="font-script italic">Heaven</span>
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6">
                  Where Divinity Meets Humanity
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  When we gather, we don't just sing; we ascend. These moments capture the electric atmosphere of our Charity Worship Festivals. From Aba to the world, see the passion, the tears, and the breakthrough that happens when we lift our voices in unison.
                </p>
              </div>
            )}

            {/* Charity Section Header */}
            {activeCategory === 'charity' && (
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Hands of <span className="font-script italic">Hope</span>
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6">
                  Love in Action
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  This is where the music becomes movement. Because of our "All-In" Pledge, every worship night fuels a charity day. Explore the tangible impact of your support—real faces, real smiles, and real needs met through the Grace of God.
                </p>
              </div>
            )}

            {/* Family Section Header */}
            {activeCategory === 'family' && (
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Behind the <span className="font-script italic">Scenes</span>
                </h2>
                <h3 className="text-lg md:text-xl text-muted-foreground mb-6">
                  The Crew
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  We are a family bound by love, prayer, and commitment. These candid moments show the genuine connection, the laughter, the rehearsals, and the brotherhood that defines who we are when the spotlight fades.
                </p>
              </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden bg-muted"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm md:text-base font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section-Specific CTA */}
            {activeCategory === 'charity' && (
              <div className="mt-12 md:mt-16 text-center">
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Moved by what you see? Support our next <span className="font-script italic">project</span>.
                </p>
                <Button size="lg" className="px-8 text-sm md:text-base">
                  Support Our Next Project
                </Button>
              </div>
            )}
          </Container>
        </Section>

        {/* Video Spotlight Section */}
        <Section className="bg-secondary/40 border-b py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-balance">
                  Experience the <span className="font-script italic">Atmosphere</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  Photos capture a second, but video captures the spirit. Watch highlights from our recent gatherings and see how the DMC family brings the vision to life.
                </p>
              </div>

              <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-base md:text-lg font-light mb-2">DMC Annual Charity Worship Festival</p>
                  <p className="text-white/70 text-sm md:text-base">Official Recap Reel</p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-10">
                <p className="text-foreground font-light text-lg md:text-xl">
                  Relive the <span className="font-script italic">sound</span>. Relive the <span className="font-script italic">impact</span>.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-primary text-primary-foreground border-t py-16 md:py-24">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-balance">
                Don't Just <span className="font-script italic">Watch</span>. Be Part of the <span className="font-script italic">Picture</span>.
              </h2>
              <p className="text-base md:text-lg mb-8 md:mb-12 opacity-90 leading-relaxed text-balance">
                The next frame in our gallery is waiting for you. Whether you join us in the crowd for worship or partner with us to create more smiles in our community, your place is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-6 md:px-8 text-sm md:text-base">
                  Join Our Next Event
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 md:px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm md:text-base"
                >
                  Fund the Next Outreach
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
