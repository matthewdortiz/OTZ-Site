import { Metadata } from 'next';
import { AIVoiceAgents } from '@/components/offerings/AIVoiceAgents';

export const metadata: Metadata = {
  title: 'AI Voice Agents for Business',
  description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare. Miami AI voice agent specialists.',
  openGraph: {
    title: 'AI Voice Agents for Business | OTZ Group',
    description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare. Miami AI voice agent specialists.',
    url: 'https://otz.group/offerings/ai-voice-agents',
  },
  twitter: {
    title: 'AI Voice Agents for Business | OTZ Group',
    description: '24/7 AI voice agents for customer service, scheduling, and support. HIPAA-compliant solutions for healthcare. Miami AI voice agent specialists.',
  },
  alternates: {
    canonical: 'https://otz.group/offerings/ai-voice-agents',
  },
};

export default function OfferingsAIVoiceAgents() {
  return <AIVoiceAgents />;
}
