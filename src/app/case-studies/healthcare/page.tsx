import { Metadata } from 'next';
import { CaseStudyHealthcare } from '@/components/CaseStudyHealthcare';

export const metadata: Metadata = {
  title: 'Healthcare AI Automation Case Study',
  description: 'AI-powered enrollment verification and customer support automation for healthcare. HIPAA-compliant voice agents delivering 24/7 service.',
  openGraph: {
    title: 'Healthcare AI Automation Case Study | OTZ Group',
    description: 'AI-powered enrollment verification and customer support automation for healthcare. HIPAA-compliant voice agents delivering 24/7 service.',
    url: 'https://otz.group/case-studies/healthcare',
  },
  twitter: {
    title: 'Healthcare AI Automation Case Study | OTZ Group',
    description: 'AI-powered enrollment verification and customer support automation for healthcare. HIPAA-compliant voice agents delivering 24/7 service.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/healthcare',
  },
};

export default function Healthcare() {
  return <CaseStudyHealthcare />;
}
