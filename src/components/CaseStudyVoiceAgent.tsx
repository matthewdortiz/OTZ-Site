import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

export function CaseStudyVoiceAgent() {
  const data = {
    industry: 'HEALTHCARE',
    title: 'AI Voice Agent – Insurance Eligibility Verification',
    subtitle: 'Smart Health Dental deploys autonomous AI voice agents for insurance verification, reducing handle time by 65% and reclaiming 160+ agent hours monthly.',
    problem_p1: 'Smart Health Dental\'s agents were spending 70% of their day on hold with insurance carriers for basic eligibility checks. This created long turnaround times, backlog during peak hours, and high operational cost per verification.',
    problem_p2: 'The repetitive nature of verification calls was draining agent morale and limiting their availability for complex cases that required human judgment. The company needed a solution that could handle routine verifications autonomously while escalating exceptions.',
    approach_intro: 'We deployed fully autonomous AI voice agents capable of navigating carrier IVR menus, completing routine verifications, capturing results, and syncing data into their CRM. Agents escalate complex cases and handle real-time handoffs.',
    phases: [
      {
        phase: 'Carrier IVR Mapping & Prompt Engineering',
        duration: '2 weeks',
        description: 'Mapped IVR flows for major carriers, designed conversation logic, built fallback patterns.'
      },
      {
        phase: 'Voice Agent Build',
        duration: '3 weeks',
        description: 'Integrated Retell AI, configured Twilio SIP trunking, implemented verification workflows.'
      },
      {
        phase: 'CRM Integration',
        duration: '2 weeks',
        description: 'Connected TLD and Admin123 CRMs, automated data sync, built result logging.'
      },
      {
        phase: 'QA, Compliance, Full Rollout',
        duration: '1 week',
        description: 'Conducted HIPAA compliance review, tested edge cases, deployed to production.'
      }
    ],
    arch_input: 'Caller request, carrier info, member details',
    arch_processing: 'Voice agent reasoning, IVR traversal, verification retrieval',
    arch_output: 'Eligibility result, CRM update, optional handoff',
    outcomes: [
      {
        value: '65%',
        title: 'Faster Resolution',
        caption: 'Reduction in average handle time per verification'
      },
      {
        value: '80%',
        title: 'Self-Service Rate',
        caption: 'Routine verifications completed without human intervention'
      },
      {
        value: '160+',
        title: 'Hours Reclaimed',
        caption: 'Agent hours per month redirected to complex cases'
      }
    ],
    quote_text: 'Our agents can now focus on helping patients with real issues instead of sitting on hold. The AI voice system handles the grunt work flawlessly.',
    quote_name: 'Director of Operations',
    quote_org: 'Smart Health Dental LLC',
    spec_duration: '8 weeks',
    spec_team: '5 engineers, PM, QA',
    spec_stack: 'Retell AI, Twilio SIP, n8n orchestration, TLD CRM, Admin123, FastAPI, PostgreSQL',
    spec_industry: 'Healthcare Insurance'
  };

  return <CaseStudyTemplate data={data} />;
}