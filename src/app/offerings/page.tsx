import { Metadata } from 'next';
import { OfferingsPage } from '@/components/OfferingsPage';

export const metadata: Metadata = {
  title: 'AI Services & Solutions',
  description: 'Comprehensive AI services: strategic guidance, voice agents, AEO, and training. Miami-based AI consulting for healthcare, retail, and logistics businesses.',
  openGraph: {
    title: 'AI Services & Solutions | OTZ Group',
    description: 'Comprehensive AI services: strategic guidance, voice agents, AEO, and training. Miami-based AI consulting for healthcare, retail, and logistics businesses.',
    url: 'https://otz.group/offerings',
  },
  twitter: {
    title: 'AI Services & Solutions | OTZ Group',
    description: 'Comprehensive AI services: strategic guidance, voice agents, AEO, and training. Miami-based AI consulting for healthcare, retail, and logistics businesses.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings',
  },
};

export default function Offerings() {
  return <OfferingsPage />;
}
