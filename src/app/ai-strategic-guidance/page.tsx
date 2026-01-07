import { Metadata } from 'next'
import { AIStrategicGuidancePage } from '@/components/home/AIStrategicGuidancePage';

export const metadata: Metadata = {
  title: 'AI Strategic Guidance & Consulting',
  description: 'Expert AI strategy consulting for SMBs in Miami and South Florida. We assess opportunities, build roadmaps, and guide implementation with 21-day deployments.',
  openGraph: {
    title: 'AI Strategic Guidance & Consulting | OTZ Group',
    description: 'Expert AI strategy consulting for SMBs. We assess opportunities, build roadmaps, and guide implementation.',
    url: 'https://otz.group/ai-strategic-guidance',
  },
  twitter: {
    title: 'AI Strategic Guidance & Consulting | OTZ Group',
    description: 'Expert AI strategy consulting for SMBs. We assess opportunities, build roadmaps, and guide implementation.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/ai-strategic-guidance',
  },
}

export default function AIStrategicGuidance() {
  return <AIStrategicGuidancePage />;
}
