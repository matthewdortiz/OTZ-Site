import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

export function CaseStudyProjectManagement() {
  const data = {
    industry: 'AUTOMATION',
    title: 'Project Management Automation System',
    subtitle: 'FirstTeam Marketing automates task tracking, deadline alerts, and project visibility for 50+ simultaneous campaigns.',
    problem_p1: 'FirstTeam Marketing was losing more than 15 hours every week manually tracking deadlines, deliverables, and progress across 50+ simultaneous client campaigns. Project updates lived across spreadsheets, email threads, and Slack messages, leading to missed reminders, inconsistent reporting, and frequent last-minute escalations.',
    problem_p2: 'Leadership lacked real-time visibility into campaign health, making it difficult to allocate resources proactively or surface blockers early. The manual overhead was slowing down the team\'s ability to scale operations.',
    approach_intro: 'We deployed a centralized CRM with automated workflows for task assignment, deadline reminders, Slack alerts, and overdue escalations. The system created a unified source of truth, eliminated manual tracking, and introduced real-time visibility for leadership.',
    phases: [
      {
        phase: 'Discovery & Workflow Mapping',
        duration: '1 week',
        description: 'Interviewed team leads, mapped existing workflows, identified integration points.'
      },
      {
        phase: 'CRM Architecture & Data Modeling',
        duration: '1 week',
        description: 'Designed database schema, configured custom fields, established automation rules.'
      },
      {
        phase: 'Automation Build',
        duration: '2 weeks',
        description: 'Built Slack integration, deadline reminder engine, escalation triggers, and reporting dashboards.'
      },
      {
        phase: 'Rollout & Team Training',
        duration: '1 week',
        description: 'Conducted training sessions, gathered feedback, refined workflows for live deployment.'
      }
    ],
    arch_input: 'Campaign tasks, deadlines, project updates',
    arch_processing: 'CRM automation engine, Slack API triggers, reminder logic',
    arch_output: 'Centralized project dashboard, real-time alerts',
    outcomes: [
      {
        value: '35%',
        title: 'Faster Delivery',
        caption: 'Project completion time reduced across all campaigns'
      },
      {
        value: '100%',
        title: 'On-Time Rate',
        caption: 'All client deadlines met since deployment'
      },
      {
        value: '15 hrs',
        title: 'Weekly Recovery',
        caption: 'Manual tracking hours redirected to strategic work'
      }
    ],
    quote_text: 'We went from constant firefighting to having a clear view of every campaign at all times. The system paid for itself in the first month.',
    quote_name: 'Operations Director',
    quote_org: 'FirstTeam Marketing',
    spec_duration: '5 weeks',
    spec_team: '3 engineers, PM, QA',
    spec_stack: 'Custom CRM, Slack API, Zapier, notification engine',
    spec_industry: 'Marketing Agency'
  };

  return <CaseStudyTemplate data={data} />;
}