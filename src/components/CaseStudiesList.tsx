'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/lib/navigation';

export function CaseStudiesList() {
  const caseStudies = [
    {
      eyebrow: 'Case Study - Healthcare',
      title: 'AI Voice Agent – Insurance Eligibility Verification',
      subtitle: 'Smart Health Dental deploys autonomous AI voice agents for insurance verification, reducing handle time by 65% and reclaiming 160+ agent hours monthly.',
      link: '/case-studies/healthcare',
    },
    {
      eyebrow: 'Case Study - Automation',
      title: 'Project Management Automation System',
      subtitle: 'FirstTeam Marketing automates task tracking, deadline alerts, and project visibility for 50+ simultaneous campaigns.',
      link: '/case-studies/project-management',
    },
    {
      eyebrow: 'Case Study - AI Systems',
      title: 'Forecasted Inventory Optimization Engine',
      subtitle: 'If/Then reduces holding costs by 40% with AI-driven forecasting and automated reorder logic for $2M+ footwear inventory.',
      link: '/case-studies/inventory-optimization',
    },
    {
      eyebrow: 'Case Study - Automation',
      title: 'Event Space Data Pipeline Automation',
      subtitle: 'Banegaarden eliminates booking data loss with a rebuilt Webflow → Tripleseat pipeline featuring automatic failover and validation.',
      link: '/case-studies/data-pipeline',
    },
  ];

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
    window.scrollTo({ top: 0 });
  };

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 md:mb-6 px-2"
              style={{ 
                fontFamily: 'var(--font-display)',
                color: 'var(--ink)',
                lineHeight: '1.125'
              }}
            >
              Case Studies
            </h1>
            <p className="text-base sm:text-lg md:text-xl px-4" style={{ color: '#52525b', maxWidth: '42rem', margin: '0 auto' }}>
              Real implementations, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <a
                key={index}
                href={study.link}
                onClick={(e) => handleCardClick(e, study.link)}
                className="group block border rounded-lg p-4 sm:p-6 md:p-8 transition-all hover:shadow-lg bg-white"
                style={{ borderColor: 'var(--blueprint)' }}
              >
                {/* Eyebrow */}
                <div 
                  className="uppercase mb-3 sm:mb-4"
                  style={{ 
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    letterSpacing: '0.05em',
                    color: '#71717a',
                    lineHeight: '16px'
                  }}
                >
                  {study.eyebrow}
                </div>
                
                {/* Title */}
                <h2 
                  className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors"
                  style={{ 
                    color: 'var(--ink)', 
                    lineHeight: '1.3',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  {study.title}
                </h2>
                
                {/* Subtitle */}
                <p style={{ 
                  fontSize: 'clamp(14px, 2vw, 16px)', 
                  lineHeight: '1.625', 
                  color: '#52525b',
                  marginBottom: '1.5rem'
                }}>
                  {study.subtitle}
                </p>
                
                {/* Link */}
                <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all" style={{ color: 'var(--navy)' }}>
                  <span>Read case study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}