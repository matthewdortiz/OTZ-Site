import { HomeOfferingTemplate } from './HomeOfferingTemplate';
import { Clock, TrendingDown, FileCheck } from 'lucide-react';
import coverImage from 'figma:asset/38d56c8895b9949d72bfb36951bb909cc704e6ff.png';

export function AIVoiceAgentsPage() {
  return (
    <HomeOfferingTemplate
      eyebrow="Omnichannel AI Agents"
      title="AI Voice Agents"
      subhead="Production-ready agents for calls, messaging, and webchat - with safe human handoffs, audit trails, and enterprise compliance."
      coverImage={coverImage}
      outcomes={[
        {
          title: 'Reduced handle time',
          icon: <Clock className="w-8 h-8" />,
        },
        {
          title: 'Higher self-service containment',
          icon: <TrendingDown className="w-8 h-8" />,
        },
        {
          title: 'Full audit trails & safe handoffs',
          icon: <FileCheck className="w-8 h-8" />,
        },
      ]}
      includedItems={[
        { text: 'Channel design (phone, SMS, WhatsApp, webchat)' },
        { text: 'NLU/NLG configuration & evaluation harness' },
        { text: 'Human-in-the-loop + escalation policies' },
        { text: 'Integration to IVR/CCaaS, CRM, ticketing, identity' },
        { text: 'QA, monitoring & analytics dashboards' },
        { text: 'Runbook, rollback, and incident playbooks' },
      ]}
      workSteps={[
        {
          title: 'Discover',
          description: 'Map your customer interaction patterns, pain points, and integration requirements.',
        },
        {
          title: 'Design',
          description: 'Build conversation flows, configure NLU/NLG models, and define escalation protocols.',
        },
        {
          title: 'Deliver',
          description: 'Deploy production agents with monitoring, quality assurance, and continuous improvement.',
        },
      ]}
      integrations={[
        { name: 'Twilio' },
        { name: 'Genesys' },
        { name: 'Five9' },
        { name: 'Salesforce' },
        { name: 'HubSpot' },
        { name: 'Zendesk' },
        { name: 'ServiceNow' },
        { name: 'SSO/IdP' },
        { name: 'Data APIs' },
      ]}
      metrics={[
        {
          stat: '–20–35%',
          label: 'handle time',
        },
        {
          stat: '+15–30%',
          label: 'containment',
        },
        {
          stat: 'P95 < 1.2s',
          label: 'response',
        },
      ]}
      faqs={[
        {
          question: 'What channels are supported?',
          answer: 'We support voice (inbound/outbound), SMS, WhatsApp, webchat, and messaging platforms. Each channel can share the same underlying AI logic while adapting to channel-specific UX patterns and constraints.',
        },
        {
          question: 'What languages do you support?',
          answer: 'We support 40+ languages with native-quality text-to-speech and natural language understanding. Multi-language deployments can share business logic while maintaining language-specific tuning and voice characteristics.',
        },
        {
          question: 'How do you handle guardrails and red-team testing?',
          answer: 'Every agent undergoes adversarial testing before production. We implement guardrails for PII, profanity, off-topic requests, and brand safety. All conversations are monitored in real-time with automatic escalation on guardrail violations.',
        },
        {
          question: 'How do you measure containment?',
          answer: 'Containment is measured as successful resolution without human intervention. We track primary containment (agent handles end-to-end), partial containment (agent gathers context before handoff), and zero containment (immediate escalation). You define success criteria per use case.',
        },
        {
          question: 'What happens if handoff fails?',
          answer: 'We implement multi-layer failsafes: if primary handoff fails, the agent attempts alternate channels (callback, email, SMS). If all channels fail, the conversation is logged with priority flags and retried. Customers always receive acknowledgment and next steps.',
        },
      ]}
    />
  );
}