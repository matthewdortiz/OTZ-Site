import { Metadata } from 'next';
import { AEOSolutions } from '@/components/offerings/AEOSolutions';

export const metadata: Metadata = {
  title: 'Answer Engine Optimization (AEO)',
  description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity. Miami AEO experts.',
  openGraph: {
    title: 'Answer Engine Optimization (AEO) | OTZ Group',
    description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity. Miami AEO experts.',
    url: 'https://otz.group/offerings/aeo',
  },
  twitter: {
    title: 'Answer Engine Optimization (AEO) | OTZ Group',
    description: 'Optimize your business for AI search engines and voice assistants. Get discovered by ChatGPT, Claude, and Perplexity. Miami AEO experts.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/aeo',
  },
};

export default function OfferingsAEO() {
  return <AEOSolutions />;
}
