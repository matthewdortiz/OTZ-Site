import { Metadata } from 'next';
import { Teachings } from '@/components/offerings/Teachings';

export const metadata: Metadata = {
  title: 'AI Training & Education Programs',
  description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies. Miami-based AI education for businesses.',
  openGraph: {
    title: 'AI Training & Education Programs | OTZ Group',
    description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies. Miami-based AI education for businesses.',
    url: 'https://otz.group/offerings/teachings',
  },
  twitter: {
    title: 'AI Training & Education Programs | OTZ Group',
    description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies. Miami-based AI education for businesses.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/teachings',
  },
};

export default function OfferingsTeachings() {
  return <Teachings />;
}
