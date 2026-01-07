import { Metadata } from 'next';
import { AIStrategicGuidance } from '@/components/offerings/AIStrategicGuidance';

export const metadata: Metadata = {
  title: 'AI Strategic Guidance & Consulting',
  description: 'Expert AI strategy consulting for SMBs. We assess opportunities, build roadmaps, and guide implementation. 21-day deployments with measurable ROI.',
  openGraph: {
    title: 'AI Strategic Guidance & Consulting | OTZ Group',
    description: 'Expert AI strategy consulting for SMBs. We assess opportunities, build roadmaps, and guide implementation. 21-day deployments with measurable ROI.',
    url: 'https://otz.group/offerings/ai-strategic-guidance',
  },
  twitter: {
    title: 'AI Strategic Guidance & Consulting | OTZ Group',
    description: 'Expert AI strategy consulting for SMBs. We assess opportunities, build roadmaps, and guide implementation. 21-day deployments with measurable ROI.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/ai-strategic-guidance',
  },
};

export default function OfferingsAIStrategicGuidance() {
  return <AIStrategicGuidance />;
}
