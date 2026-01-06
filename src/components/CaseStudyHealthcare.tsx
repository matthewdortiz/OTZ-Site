import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

const healthcareData = {
  industry: 'Healthcare',
  title: 'Smart Health Dental Automates Enrollment Verification & Customer Support with AI Voice Agents',
  subtitle: 'An AI-powered voice system that handles compliant verification, enrollment confirmation, and customer service interactions across Smart Health Dental\'s dental and vision plans.',
  
  problem_p1: 'Smart Health Dental required strict post-enrollment verification calls for their dental and vision plan offerings, including Dental Discount, PPO, MAX, Elevate, and Vision add-on products. Each verification call needed to execute legally required scripts verbatim, confirm identity, plan selection, pricing, and payment authorization, while reading state-specific fraud disclosures. Manual execution by human agents created risk of script deviation, inconsistent disclosure delivery, and compliance exposure.',
  
  problem_p2: 'Customer service workflows for enrollment status, plan confirmation, and billing questions required consistent execution of approved language across all interactions. Scaling these verification and support operations meant adding headcount, while compliance audits demanded reliable documentation. The organization needed a solution that could handle both outbound verification and inbound support calls while maintaining compliance standards and operational consistency.',
  
  approach_intro: 'We deployed a script-driven AI voice agent system that executes compliant verification workflows and handles customer service interactions across Smart Health Dental\'s plan portfolio.',
  
  phases: [
    {
      phase: 'Discovery & Script Mapping',
      duration: '3 weeks',
      description: 'Compliance requirements, script documentation, plan workflow mapping'
    },
    {
      phase: 'Development & Integration',
      duration: '5 weeks',
      description: 'Voice flow development, enrollment system integration, compliance testing'
    },
    {
      phase: 'Pilot & Validation',
      duration: '3 weeks',
      description: 'Limited deployment, script refinement, coordinator escalation testing'
    },
    {
      phase: 'Full Deployment',
      duration: '2 weeks',
      description: 'Production rollout, monitoring configuration, audit trail validation'
    }
  ],
  
  arch_input: 'Enrollment data, plan selection, billing details',
  arch_processing: 'AI voice execution of compliant scripts, conditional plan logic, consent capture',
  arch_output: 'Verification status, compliance-ready call logs, routed service interactions',
  arch_caption: 'All calls recorded and encrypted; routes to Elite Care Coordinators when human assistance required.',
  
  showBackendArchitecture: true,
  
  outcomes: [
    {
      value: 'Consistent',
      title: 'Compliance execution',
      caption: 'Verbatim script delivery across all plan types'
    },
    {
      value: 'Scalable',
      title: 'Service capacity',
      caption: 'Handles verification and support without additional staffing'
    },
    {
      value: 'Standardized',
      title: 'Customer experience',
      caption: 'Uniform interactions across enrollment and service workflows'
    }
  ],
  
  quote_text: 'The voice agent handles verification and customer service calls consistently and routes complex cases to our team exactly when needed. It executes our compliance scripts without deviation.',
  quote_name: 'Operations Team',
  quote_org: 'Smart Health Dental',
  
  spec_duration: '13 weeks',
  spec_team: '4 (1 voice AI engineer, 1 integration specialist, 1 compliance advisor, 1 PM)',
  spec_stack: 'Voice AI platform, Python, RESTful APIs, Enrollment system integration',
  spec_industry: 'Healthcare / Dental & Vision Plans'
};

export function CaseStudyHealthcare() {
  return <CaseStudyTemplate data={healthcareData} />;
}