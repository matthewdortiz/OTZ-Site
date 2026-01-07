'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-6">Something went wrong</h2>
        <p className="text-gray-400 mb-8">
          We encountered an unexpected error. Our team has been notified and is working on it.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Return Home
          </Link>
        </div>

        <div className="pt-8 text-gray-500">
          <p>If the problem persists, contact us:</p>
          <p className="mt-2">
            <a href="mailto:matthew@otz.group" className="text-blue-400 hover:text-blue-300">
              matthew@otz.group
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
