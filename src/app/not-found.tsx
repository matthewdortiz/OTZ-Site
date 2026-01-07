import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | OTZ Group',
  description: 'The page you are looking for could not be found. Return to OTZ Group homepage for AI consulting services in Miami.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Return Home
          </Link>

          <div className="pt-8">
            <p className="text-gray-500 mb-4">Or explore our services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/offerings" className="text-blue-400 hover:text-blue-300 underline">
                Our Offerings
              </Link>
              <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 underline">
                Case Studies
              </Link>
              <Link href="/offerings/ai-voice-agents" className="text-blue-400 hover:text-blue-300 underline">
                Voice Agents
              </Link>
              <Link href="/offerings/aeo" className="text-blue-400 hover:text-blue-300 underline">
                AEO Services
              </Link>
            </div>
          </div>

          <div className="pt-8 text-gray-500">
            <p>Need help? Contact us:</p>
            <p className="mt-2">
              <a href="mailto:matthew@otz.group" className="text-blue-400 hover:text-blue-300">
                matthew@otz.group
              </a>
              {' '} | {' '}
              <a href="tel:+1-305-781-4034" className="text-blue-400 hover:text-blue-300">
                +1-305-781-4034
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
