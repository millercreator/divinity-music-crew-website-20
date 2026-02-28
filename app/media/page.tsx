'use client'

import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Youtube, Music, ArrowUpRight } from 'lucide-react'

const streamingLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com/@dmcworship", // replace with actual channel
    icon: <Youtube className="w-6 h-6 text-red-600" />,
    color: "text-red-600",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/6SmI0NhbbX6YsJhBKt3vn1", // replace with actual
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.004C6.476 2.004 2 6.48 2 12c0 5.523 4.476 9.999 10 9.999s10-4.476 10-9.999c0-5.52-4.476-9.996-10-9.996zm4.41 14.31a.755.755 0 0 1-1.04.216c-2.85-1.752-6.446-2.146-10.668-1.166a.75.75 0 1 1-.314-1.461c4.55-1.003 8.496-.57 11.662 1.295a.751.751 0 0 1 .36 1.116zm1.484-2.666a.938.938 0 0 1-1.277.333c-3.267-2.038-8.252-2.635-12.08-1.433A.936.936 0 0 1 3.2 11.04c4.203-1.28 9.597-.637 13.321 1.562.456.295.594.908.333 1.276zm.115-2.805C15.099 8.7 8.95 8.666 4.992 9.735c-.563.146-1.143-.199-1.288-.762A.999.999 0 0 1 4.462 8.01c4.324-1.085 11.032-1.04 15.396 1.659.527.326.682 1.057.36 1.58a1.118 1.118 0 0 1-1.521.366z"/>
      </svg>
    ),
    color: "text-green-500",
  },
  {
    label: "Audiomack",
    href: "https://audiomack.com/dmcworship", // replace with actual
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
        <path d="M19.7 6.1l-1.1-2c-.3-.7-1.3-.6-1.4.2l-1.1 5.5-3-7.2c-.3-.7-1.2-.7-1.5 0L1.1 25.1c-.3.6.2 1.2.8 1.2h5.7l-1.6 4.2c-.2.6.2 1.2.8 1.2.4 0 .8-.3.9-.7l9.6-24.8zM27.2 11.4c-.4 0-.7.2-.8.6l-5.2 13.3-3-7.3c-.3-.8-1.3-.7-1.5.1l-4.6 13c-.2.6.2 1.2.8 1.2.4 0 .7-.3.9-.7l3.7-10.2 2.9 7.1c.3.8 1.3.8 1.5-.1l6.1-15.5c.2-.6-.2-1.2-.8-1.2z" />
      </svg>
    ),
    color: "text-yellow-500",
  }
];

const spotifyTracks = [
  // Replace these with your actual Spotify embed URIs or preview tracks.
  {
    title: "DMC Worship - Example Track 1",
    embedUrl: "https://open.spotify.com/embed/track/2TpxZ7JUBn3uw46aR7qd6V?utm_source=generator", // example only
  },
  {
    title: "DMC Worship - Example Track 2",
    embedUrl: "https://open.spotify.com/embed/track/5qmq61DAAOUaW8AUo8xKhh?utm_source=generator", // example only
  },
  {
    title: "DMC Worship - Example Track 3",
    embedUrl: "https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC?utm_source=generator", // example only
  },
  {
    title: "DMC Worship - Example Track 4",
    embedUrl: "https://open.spotify.com/embed/track/1301WleyT98MSxVHPZCA6M?utm_source=generator", // example only
  },
  {
    title: "DMC Worship - Example Track 5",
    embedUrl: "https://open.spotify.com/embed/track/7GhIk7Il098yCjg4BQjzvb?utm_source=generator", // example only
  },
];

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero */}
        <Section className="border-b bg-background py-20 md:py-32">
          <Container>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-8 flex justify-center">
                <Music className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-balance">
                <span className="font-script italic">DMC</span> <span className="font-normal">Music & Media</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Stream, listen, and relive the sound of revival. Find DMC Worship on your favorite music platforms.
              </p>
            </div>
          </Container>
        </Section>

        {/* Spotify Previews */}
        <Section className="border-b py-12 md:py-16">
          <Container>
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl font-light mb-6">Spotify Previews</h2>
              <div className="flex flex-col gap-4 w-full">
                {spotifyTracks.map(track => (
                  <div key={track.embedUrl} className="w-full overflow-hidden rounded-lg shadow">
                    <iframe
                      src={track.embedUrl}
                      width="100%"
                      height="80"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg border-0 w-full"
                      title={track.title}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Video Spotlight/Youtube Embed */}
        <Section className="py-16 md:py-24 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl font-light mb-6 text-center">Recent Performance Highlight</h2>
              <div className="w-full overflow-hidden rounded-lg aspect-video bg-black mb-4">
                <iframe
                  src="https://www.youtube.com/embed/HklsDLIOdCs"
                  title="DMC Worship Live Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-base text-muted-foreground text-center">
                Subscribe for more performances, new releases, and live DMC moments.
              </p>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="py-14 md:py-20 border-t">
          <Container>
            <div className="max-w-xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-light mb-4">
                Never Miss a Moment
              </h2>
              <p className="mb-8 text-base md:text-lg opacity-90">
                Stay tuned for more music drops, live sessions, and the latest from DMC Worship.
              </p>
              {/* Insert ALL streaming links here (YouTube, Spotify, Audiomack) */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto mb-3 justify-center">
                {streamingLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-3 border rounded-lg hover:border-primary transition-all group bg-transparent text-primary-foreground w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-3">
                      {link.icon}
                      <span className={`font-medium text-lg ${link.color}`}>{link.label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition" />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
