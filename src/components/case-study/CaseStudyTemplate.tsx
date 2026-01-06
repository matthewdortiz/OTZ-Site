'use client';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { PhaseCard } from './PhaseCard';
import { ArchitectureBlock } from './ArchitectureBlock';
import { BackendArchitectureBlock } from './BackendArchitectureBlock';
import { OutcomeCard } from './OutcomeCard';
import { QuoteBlock } from './QuoteBlock';
import { SpecRow } from './SpecRow';
import { navigateTo } from '@/lib/navigation';

interface CaseStudyData {
  industry: string;
  title: string;
  subtitle: string;
  problem_p1: string;
  problem_p2: string;
  approach_intro: string;
  phases: Array<{
    phase: string;
    duration: string;
    description: string;
  }>;
  arch_input: string | string[];
  arch_processing: string | { title: string; lines: string[] };
  arch_output: string | string[];
  arch_caption?: string;
  showBackendArchitecture?: boolean;
  outcomes: Array<{
    value?: string;
    title?: string;
    caption?: string;
    headline?: string;
    subtext?: string[];
  }>;
  quote_text: string;
  quote_name: string;
  quote_org: string;
  spec_duration: string;
  spec_stack: string;
  spec_team?: string;
  spec_industry: string;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  const specs = [
    { icon: 'duration' as const, label: 'Duration', value: data.spec_duration },
    { icon: 'stack' as const, label: 'Tech Stack', value: data.spec_stack },
    { icon: 'industry' as const, label: 'Industry', value: data.spec_industry },
  ];

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="border-b"
        style={{ 
          borderColor: 'var(--blueprint)',
          backgroundImage: `
            linear-gradient(var(--blueprint) 1px, transparent 1px),
            linear-gradient(90deg, var(--blueprint) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-14 md:py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div 
              className="inline-block px-3 py-1.5 rounded-full mb-6"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                letterSpacing: '0.05em',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              Case Study - {data.industry}
            </div>
            
            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ 
                lineHeight: '1.125',
                fontFamily: 'var(--font-display)',
                color: 'var(--ink)',
                marginBottom: 'clamp(16px, 3vw, 24px)'
              }}
            >
              {data.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl" style={{ 
              lineHeight: '1.36',
              color: '#52525b'
            }}>
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {/* Problem Section */}
            <section id="problem">
              <h2 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 4vw, 36px)',
                  lineHeight: '1.3',
                  color: 'var(--ink)'
                }}
                className="mt-4 sm:mt-6 mb-3 sm:mb-4"
              >
                Problem
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.625',
                  color: '#3f3f46'
                }}>
                  {data.problem_p1}
                </p>
                <p style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  lineHeight: '1.625',
                  color: '#3f3f46'
                }}>
                  {data.problem_p2}
                </p>
              </div>
            </section>

            {/* Approach Section */}
            <section id="approach">
              <h2 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 4vw, 36px)',
                  lineHeight: '1.3',
                  color: 'var(--ink)'
                }}
                className="mt-4 sm:mt-6 mb-3 sm:mb-4"
              >
                Approach
              </h2>
              <p style={{ 
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: '1.625',
                color: '#3f3f46',
                marginBottom: 'clamp(16px, 3vw, 24px)'
              }}>
                {data.approach_intro}
              </p>
              
              <PhaseCard phases={data.phases} />
            </section>

            {/* System Architecture Section */}
            <section id="architecture">
              <h2 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 4vw, 36px)',
                  lineHeight: '1.3',
                  color: 'var(--ink)'
                }}
                className="mt-4 sm:mt-6 mb-3 sm:mb-4"
              >
                System Architecture
              </h2>
              
              <ArchitectureBlock 
                input={data.arch_input}
                processing={data.arch_processing}
                output={data.arch_output}
                caption={data.arch_caption}
              />
            </section>

            {/* Backend Architecture & Data Orchestration Section */}
            {data.showBackendArchitecture && (
              <section id="backend-architecture">
                <h2 
                  style={{ 
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 4vw, 36px)',
                    lineHeight: '1.3',
                    color: 'var(--ink)'
                  }}
                  className="mt-4 sm:mt-6 mb-3 sm:mb-4"
                >
                  Backend Architecture & Data Orchestration
                </h2>
                
                <BackendArchitectureBlock showBackendArchitecture={data.showBackendArchitecture} />
              </section>
            )}

            {/* Outcomes Section */}
            <section id="outcomes" className="mt-6 sm:mt-8 md:mt-10">
              <h2 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 4vw, 36px)',
                  lineHeight: '1.3',
                  color: 'var(--ink)'
                }}
                className="mt-4 sm:mt-6 mb-3 sm:mb-4"
              >
                Outcomes
              </h2>
              
              <OutcomeCard outcomes={data.outcomes} />
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start lg:border-l lg:pl-8 h-fit" style={{ borderColor: 'var(--blueprint)' }}>
            <SpecRow specs={specs} />
            
            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--blueprint)' }}>
              <Button 
                className="w-full"
                variant="default"
                style={{
                  backgroundColor: 'var(--ink)',
                  color: '#ffffff'
                }}
                onClick={() => navigateTo('/case-studies')}
              >
                View More Case Studies
              </Button>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}