import { Metadata } from 'next';
import { CaseStudyVitalOne } from '@/components/CaseStudyVitalOne';

export const metadata: Metadata = {
  title: 'Smart Health Dental AI Voice Agent Case Study',
  description: 'How AI voice agents reduced insurance verification time and support wait times for Smart Health Dental. HIPAA-compliant automation success story.',
  openGraph: {
    title: 'Smart Health Dental AI Voice Agent Case Study | OTZ Group',
    description: 'How AI voice agents reduced insurance verification time and support wait times for Smart Health Dental. HIPAA-compliant automation success story.',
    url: 'https://otz.group/case-studies/vital-one-health',
  },
  twitter: {
    title: 'Smart Health Dental AI Voice Agent Case Study | OTZ Group',
    description: 'How AI voice agents reduced insurance verification time and support wait times for Smart Health Dental. HIPAA-compliant automation success story.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/vital-one-health',
  },
};

export default function VitalOneHealth() {
  return <CaseStudyVitalOne />;
}
