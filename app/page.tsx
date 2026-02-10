import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-muted/50 to-background">
          <Container>
            <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                Welcome to Your Next.js App
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                A modern, scalable foundation for building web applications with Next.js, React, and Tailwind CSS.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Features Section */}
        <Section>
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Features</h2>
              <p className="text-muted-foreground">
                Everything you need to build modern web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Next.js 16',
                  description: 'Latest Next.js with App Router and server components',
                },
                {
                  title: 'Tailwind CSS',
                  description: 'Utility-first CSS framework for rapid UI development',
                },
                {
                  title: 'shadcn/ui',
                  description: 'Beautiful and accessible component library',
                },
              ].map((feature) => (
                <div key={feature.title} className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
