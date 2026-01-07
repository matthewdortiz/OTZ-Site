import { Metadata } from 'next'
import { AEOPage } from '@/components/home/AEOPage';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization (AEO)',
  description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity. Miami AEO experts.',
  openGraph: {
    title: 'Answer Engine Optimization (AEO) | OTZ Group',
    description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity.',
    url: 'https://otz.group/aeo',
  },
  twitter: {
    title: 'Answer Engine Optimization (AEO) | OTZ Group',
    description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/aeo',
  },
}

export default function AEO() {
  return <AEOPage />;
}
