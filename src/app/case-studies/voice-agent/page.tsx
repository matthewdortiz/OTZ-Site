import { Metadata } from 'next';
import { CaseStudyVoiceAgent } from '@/components/CaseStudyVoiceAgent';

export const metadata: Metadata = {
  title: 'AI Voice Agent Implementation Case Study',
  description: 'Full voice agent deployment for automated customer service. See how AI handles calls, schedules appointments, and improves response times.',
  openGraph: {
    title: 'AI Voice Agent Implementation Case Study | OTZ Group',
    description: 'Full voice agent deployment for automated customer service. See how AI handles calls, schedules appointments, and improves response times.',
    url: 'https://otz.group/case-studies/voice-agent',
  },
  twitter: {
    title: 'AI Voice Agent Implementation Case Study | OTZ Group',
    description: 'Full voice agent deployment for automated customer service. See how AI handles calls, schedules appointments, and improves response times.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/voice-agent',
  },
};

export default function VoiceAgent() {
  return <CaseStudyVoiceAgent />;
}
