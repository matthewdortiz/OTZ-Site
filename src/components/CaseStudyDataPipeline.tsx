import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

export function CaseStudyDataPipeline() {
  const data = {
    industry: 'AUTOMATION',
    title: 'Event Space Data Pipeline Automation',
    subtitle: 'Banegaarden eliminates booking data loss with a rebuilt Webflow → Tripleseat pipeline featuring automatic failover and validation.',
    problem_p1: 'Banegaarden\'s Webflow → Tripleseat integration was failing unpredictably, causing up to 20% of bookings to vanish before reaching the event management platform. Staff spent hours every week manually reconciling missing submissions.',
    problem_p2: 'The lack of error handling and validation meant that data loss often went unnoticed until customers followed up. This created operational chaos, damaged trust, and forced the team into constant reactive mode.',
    approach_intro: 'We rebuilt the data pipeline with improved error handling, validation checks, and an automatic failover layer that guarantees 100% capture of booking data. The system also includes reporting for anomaly detection and pipeline health.',
    phases: [
      {
        phase: 'Audit & Mapping of Existing Pipeline',
        duration: '1 week',
        description: 'Analyzed failure points, documented data flow, identified integration gaps.'
      },
      {
        phase: 'Integration Rebuild',
        duration: '1.5 weeks',
        description: 'Reconstructed Webflow CMS API → Tripleseat connection with proper error handling.'
      },
      {
        phase: 'Failover Logic + Backup Data Lake',
        duration: '1 week',
        description: 'Implemented automatic retry logic, backup storage, and alerting for anomalies.'
      },
      {
        phase: 'Testing, Monitoring, Go-Live',
        duration: '0.5 weeks',
        description: 'Conducted end-to-end testing, deployed monitoring dashboard, launched to production.'
      }
    ],
    arch_input: 'Webflow form submissions, CMS metadata',
    arch_processing: 'Validation, transformation, error handling, fallback pipeline',
    arch_output: 'Tripleseat booking entries + backup records',
    outcomes: [
      {
        value: 'Zero',
        title: 'Data Loss',
        caption: 'No booking submissions lost since deployment'
      },
      {
        value: '8 hrs',
        title: 'Weekly Savings',
        caption: 'Eliminated manual reconciliation and data recovery'
      },
      {
        value: '30%',
        title: 'More Events',
        caption: 'Increase in confirmed bookings due to improved reliability'
      }
    ],
    quote_text: 'We finally have confidence that every booking will make it through. The stress of lost data is completely gone.',
    quote_name: 'Events Manager',
    quote_org: 'Banegaarden',
    spec_duration: '4 weeks',
    spec_team: '3 engineers, PM',
    spec_stack: 'Make.com advanced scenarios, Webflow CMS API, Tripleseat webhooks, backup data lake',
    spec_industry: 'Hospitality & Events'
  };

  return <CaseStudyTemplate data={data} />;
}