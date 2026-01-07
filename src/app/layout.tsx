import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTZ Group | AI Transformation for South Florida SMBs',
  description: 'Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and our proprietary Nucleus platform. 21-day deployments with measurable ROI.',
  keywords: 'AI consulting Miami, AI implementation, voice agents, business automation, SMB AI solutions, healthcare AI, retail AI, logistics AI, South Florida',
  authors: [{ name: 'OTZ Group' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://otz.group/',
    title: 'OTZ Group | AI Transformation for South Florida SMBs',
    description: 'Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and our proprietary Nucleus platform.',
    siteName: 'OTZ Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTZ Group | AI Transformation for South Florida SMBs',
    description: 'Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and our proprietary Nucleus platform.',
  },
  alternates: {
    canonical: 'https://otz.group/',
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Miami',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/175ef9c37b5530325437f7966a6f530739cadb92.png" />
        <link rel="apple-touch-icon" href="/assets/175ef9c37b5530325437f7966a6f530739cadb92.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OTZ Group",
              "description": "AI consulting firm specializing in practical AI implementation for SMBs across healthcare, retail, and logistics in South Florida.",
              "url": "https://otz.group",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": "South Florida",
              "serviceType": ["AI Consulting", "AI Implementation", "Voice Agents", "Business Automation"],
              "industry": ["Healthcare", "Retail", "Logistics"]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
