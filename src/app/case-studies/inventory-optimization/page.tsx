import { Metadata } from 'next';
import { CaseStudyInventoryOptimization } from '@/components/CaseStudyInventoryOptimization';

export const metadata: Metadata = {
  title: 'AI Inventory Optimization Case Study',
  description: 'AI-powered inventory management reducing stockouts and overstock. Real results from intelligent demand forecasting and automation.',
  openGraph: {
    title: 'AI Inventory Optimization Case Study | OTZ Group',
    description: 'AI-powered inventory management reducing stockouts and overstock. Real results from intelligent demand forecasting and automation.',
    url: 'https://otz.group/case-studies/inventory-optimization',
  },
  twitter: {
    title: 'AI Inventory Optimization Case Study | OTZ Group',
    description: 'AI-powered inventory management reducing stockouts and overstock. Real results from intelligent demand forecasting and automation.',
  },
  alternates: {
    canonical: 'https://otz.group/case-studies/inventory-optimization',
  },
};

export default function InventoryOptimization() {
  return <CaseStudyInventoryOptimization />;
}
