import { Metadata } from 'next';
import { CaseStudyProjectManagement } from '@/components/CaseStudyProjectManagement';

export const metadata: Metadata = {
  title: 'AI Project Management Automation Case Study',
  description: 'Streamlined project workflows with AI automation. See how intelligent task management and automation improved team productivity.',
  openGraph: {
    title: 'AI Project Management Automation Case Study | OTZ Group',
    description: 'Streamlined project workflows with AI automation. See how intelligent task management and automation improved team productivity.',
    url: 'https://otz.group/case-studies/project-management',
  },
  twitter: {
    title: 'AI Project Management Automation Case Study | OTZ Group',
    description: 'Streamlined project workflows with AI automation. See how intelligent task management and automation improved team productivity.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/project-management',
  },
};

export default function ProjectManagement() {
  return <CaseStudyProjectManagement />;
}
