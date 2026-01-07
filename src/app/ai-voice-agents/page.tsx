import { Metadata } from 'next'
import { AIVoiceAgentsPage } from '@/components/home/AIVoiceAgentsPage';

export const metadata: Metadata = {
  title: 'AI Voice Agents for Business',
  description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare. Miami-based AI voice agent specialists.',
  openGraph: {
    title: 'AI Voice Agents for Business | OTZ Group',
    description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare.',
    url: 'https://otz.group/ai-voice-agents',
  },
  twitter: {
    title: 'AI Voice Agents for Business | OTZ Group',
    description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/ai-voice-agents',
  },
}

export default function AIVoiceAgents() {
  return <AIVoiceAgentsPage />;
}
