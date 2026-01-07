import { Metadata } from 'next';
import { CaseStudyDataPipeline } from '@/components/CaseStudyDataPipeline';

export const metadata: Metadata = {
  title: 'AI Data Pipeline Automation Case Study',
  description: 'Automated data processing and pipeline management with AI. Real results from intelligent data integration and transformation.',
  openGraph: {
    title: 'AI Data Pipeline Automation Case Study | OTZ Group',
    description: 'Automated data processing and pipeline management with AI. Real results from intelligent data integration and transformation.',
    url: 'https://otz.group/case-studies/data-pipeline',
  },
  twitter: {
    title: 'AI Data Pipeline Automation Case Study | OTZ Group',
    description: 'Automated data processing and pipeline management with AI. Real results from intelligent data integration and transformation.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/data-pipeline',
  },
};

export default function DataPipeline() {
  return <CaseStudyDataPipeline />;
}
