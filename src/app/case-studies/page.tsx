import { Metadata } from 'next';
import { CaseStudiesList } from '@/components/CaseStudiesList';

export const metadata: Metadata = {
  title: 'AI Implementation Case Studies',
  description: 'Real results from AI implementations. See how South Florida businesses transformed operations with voice agents, automation, and AI solutions.',
  openGraph: {
    title: 'AI Implementation Case Studies | OTZ Group',
    description: 'Real results from AI implementations. See how South Florida businesses transformed operations with voice agents, automation, and AI solutions.',
    url: 'https://otz.group/case-studies',
  },
  twitter: {
    title: 'AI Implementation Case Studies | OTZ Group',
    description: 'Real results from AI implementations. See how South Florida businesses transformed operations with voice agents, automation, and AI solutions.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies',
  },
};

export default function CaseStudies() {
  return <CaseStudiesList />;
}
