import { Metadata } from 'next'
import { TeachingsPage } from '@/components/home/TeachingsPage';

export const metadata: Metadata = {
  title: 'AI Training & Education Programs',
  description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies. Miami-based AI education for businesses.',
  openGraph: {
    title: 'AI Training & Education Programs | OTZ Group',
    description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies.',
    url: 'https://otz.group/teachings',
  },
  twitter: {
    title: 'AI Training & Education Programs | OTZ Group',
    description: 'Custom AI training for teams. Learn prompt engineering, AI tools, and implementation strategies.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/teachings',
  },
}

export default function Teachings() {
  return <TeachingsPage />;
}
