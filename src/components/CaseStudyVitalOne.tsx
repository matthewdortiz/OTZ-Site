import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

const vitalOneData = {
  industry: 'Insurance',
  title: 'Smart Health Dental Cuts Insurance Verification Time and Support Waits with AI Voice Agents',
  subtitle: '24/7 inbound/outbound AI agents integrated with TLD CRM and Admin123 to verify benefits, route calls, and schedule follow-ups.',
  
  problem_p1: 'Smart Health Dental\'s member services team handled high call volumes for eligibility and benefits verification. Agents waited on hold with carriers, re-asked members for known details, and re-entered data in multiple systems. Average handle time was inconsistent, queues spiked mid-day, and abandonment led to repeat calls and dissatisfied members.',
  
  problem_p2: 'Processes were manual and fragmented across the phone system, carrier IVRs, and internal tools. Scripting varied by agent, audit trails were incomplete, and supervisors lacked a reliable way to track verification outcomes end-to-end. The team needed an always-on solution that could verify benefits, document outcomes in the CRM, and escalate exceptions to humans.',
  
  approach_intro: 'We deployed production AI voice agents to handle insurance verifications and frontline support. The agents capture intent, authenticate callers, collect required policy details, traverse carrier IVRs, log outcomes, and hand off complex cases to live staff - while keeping a full audit trail and HIPAA-aligned controls.',
  
  phases: [
    {
      phase: 'Discovery & Mapping',
      duration: '3 weeks',
      description: 'Current call flows, carrier IVRs, verification fields, consent language, QA definitions, security review'
    },
    {
      phase: 'Architecture & Design',
      duration: '2 weeks',
      description: 'Twilio SIP + Retell AI voice agent design, n8n orchestration, TLD CRM and Admin123 API integration, fallback/handoff logic'
    },
    {
      phase: 'Development & Testing',
      duration: '8 weeks',
      description: 'Voice prompts + barge-in, dynamic slot filling, verification scripts, CRM writes, exception queues, red-team and UAT with call recordings'
    },
    {
      phase: 'Deployment & Handoff',
      duration: '2 weeks',
      description: 'Go-live, team training, dashboards, alerting, and documentation with ongoing tuning playbook'
    }
  ],
  
  arch_input: [
    'Inbound member calls & web call-backs',
    'Outbound verification calls',
    'Carrier IVRs/portals',
    'CRM events & webhooks'
  ],
  arch_processing: {
    title: 'AI voice agent & dialog manager',
    lines: [
      'Caller authentication & consent logging',
      'Dynamic verification workflows',
      'Carrier IVR navigation & data capture',
      'Rules-based escalation & warm transfer',
      'Full transcription & audit trail'
    ]
  },
  arch_output: [
    'Verified eligibility/benefits written to TLD CRM & Admin123',
    'Tickets/tasks & next-action scheduling',
    'Automatic CRM updates + appointment callbacks',
    'Smart call transfers to the right queue',
    'Supervisor dashboards & QA analytics'
  ],
  arch_caption: 'All PHI protected in transit and at rest with explicit consent capture, searchable transcripts, and end-to-end auditability.',
  
  outcomes: [
    {
      headline: 'Faster verifications',
      subtext: [
        'Reduced average handle time',
        'Consistent performance across carriers'
      ]
    },
    {
      headline: 'Higher self-service',
      subtext: [
        'More calls completed by the voice agent',
        'Fewer handoffs to humans'
      ]
    },
    {
      headline: 'Capacity unlocked',
      subtext: [
        'Agent hours reallocated monthly',
        'Focus shifted to complex cases & escalations'
      ]
    }
  ],
  
  quote_text: 'The voice agent now handles verifications end-to-end and documents everything in our CRM. Our team focuses on nuanced cases instead of sitting in carrier queues.',
  quote_name: 'Operations Lead',
  quote_org: 'Smart Health Dental',
  
  spec_duration: '15 weeks',
  spec_team: '5 (2 engineers, 1 architect, 1 PM, 1 QA)',
  spec_stack: 'Retell AI, Twilio SIP, n8n, TLD CRM, Admin123, FastAPI, PostgreSQL',
  spec_industry: 'Health Insurance'
};

export function CaseStudyVitalOne() {
  return <CaseStudyTemplate data={vitalOneData} />;
}