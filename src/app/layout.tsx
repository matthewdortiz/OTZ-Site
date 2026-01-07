import type { Metadata, Viewport } from 'next'
import './globals.css'
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema, ServicesListSchema } from '@/components/StructuredData'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://otz.group'),
  title: {
    default: 'OTZ Group | AI Consulting & Implementation',
    template: '%s | OTZ Group',
  },
  description: 'Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and 21-day deployments with measurable ROI.',
  keywords: [
    'AI consulting Miami',
    'AI implementation South Florida',
    'voice agents for business',
    'business automation Florida',
    'SMB AI solutions',
    'healthcare AI',
    'retail AI',
    'logistics AI',
    'answer engine optimization',
    'AI voice agents',
    'HIPAA compliant AI',
    'customer service automation',
    'AI training Miami',
  ],
  authors: [{ name: 'OTZ Group', url: 'https://otz.group' }],
  creator: 'OTZ Group',
  publisher: 'OTZ Group',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://otz.group',
    siteName: 'OTZ Group',
    title: 'OTZ Group | AI Consulting & Implementation',
    description: 'Miami-based AI consulting firm specializing in practical AI implementation for healthcare, retail, and logistics SMBs. Voice agents, automation, and 21-day deployments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OTZ Group - AI Consulting & Implementation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTZ Group | AI Consulting & Implementation',
    description: 'Miami-based AI consulting firm. Voice agents, automation, and 21-day deployments with measurable ROI.',
    images: ['/og-image.jpg'],
    creator: '@otzgroup',
    site: '@otzgroup',
  },
  alternates: {
    canonical: 'https://otz.group',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Miami',
    'geo.position': '25.7617;-80.1918',
    'ICBM': '25.7617, -80.1918',
    'msapplication-TileColor': '#000000',
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
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <ServicesListSchema />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 z-50 rounded"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
