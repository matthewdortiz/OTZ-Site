'use client';

import { ChevronRight, CheckCircle2, Target, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { navigateTo } from '@/lib/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Header } from '../Header';
import { Footer } from '../Footer';

const coverImage = '/assets/ac9e7f83ff72108ba815038c582eb800bc6ea521.png';

export function AIStrategicGuidancePage() {
  const handleContactClick = () => {
    if (window.location.pathname !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const calendlySection = document.getElementById('book-meeting');
        if (calendlySection) {
          calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const calendlySection = document.getElementById('book-meeting');
      if (calendlySection) {
        calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const outcomes = [
    {
      title: 'Clear roadmap & business case',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'Faster decision cycles',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Governance that scales',
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const includedItems = [
    { text: 'Discovery interviews & current-state map' },
    { text: 'Systems & data inventory (sources, lineage, quality)' },
    { text: 'Opportunity framing & ROI model' },
    { text: 'Risk, compliance, and security baseline' },
    { text: 'Target architecture & capability model' },
    { text: 'Sequenced roadmap with owners & timelines' },
    { text: 'Operating model & governance recommendations' },
  ];

  const workSteps = [
    {
      title: 'Discover',
      description: 'Deep-dive into your operations, data landscape, and business objectives to identify AI opportunities.',
    },
    {
      title: 'Design',
      description: 'Architect solutions that integrate with your existing systems and align with your strategic goals.',
    },
    {
      title: 'Deliver',
      description: 'Provide actionable roadmaps, technical specifications, and ongoing support for implementation.',
    },
  ];

  const integrations = [
    { name: 'Data warehouse' },
    { name: 'BI' },
    { name: 'MDM' },
    { name: 'ETL/ELT' },
    { name: 'API gateway' },
    { name: 'SSO/IdP' },
    { name: 'Ticketing' },
    { name: 'Knowledge bases' },
  ];

  const metrics = [
    {
      stat: '< 6 weeks',
      label: 'to roadmap',
    },
    {
      stat: '+25–40%',
      label: 'faster delivery on first wave',
    },
    {
      stat: '≥90%',
      label: 'stakeholder alignment',
    },
  ];

  const faqs = [
    {
      question: 'What\'s the typical timeline for a strategic engagement?',
      answer: 'Most strategic assessments take 4-8 weeks depending on scope. We can accelerate for focused initiatives or extend for enterprise-wide transformations. The timeline includes discovery, analysis, roadmap development, and stakeholder alignment sessions.',
    },
    {
      question: 'How much stakeholder time is required?',
      answer: 'Expect 2-3 hours per week from executive sponsors, 4-6 hours from technical leads, and 6-10 hours from business SMEs during discovery. We minimize disruption by batching interviews and async data gathering.',
    },
    {
      question: 'What outputs do you deliver?',
      answer: 'You receive a comprehensive package: current-state assessment, data & systems inventory, ROI model with financial projections, risk/compliance baseline, target architecture, sequenced roadmap with owners, and governance recommendations. All artifacts are yours to keep and iterate on.',
    },
    {
      question: 'How do you handle security and compliance?',
      answer: 'All data analysis happens on-premises or in your secure cloud environment. We sign BAAs for HIPAA, comply with SOC 2 requirements, and work within your existing security frameworks. No sensitive data leaves your environment.',
    },
    {
      question: 'How do you transition to build?',
      answer: 'We provide detailed handoff documentation, train your internal teams, and can stay engaged as advisors during implementation. Many clients choose to have us lead the first wave to establish patterns, then transition ownership to internal teams.',
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay to ensure readability */}
      <div className="fixed inset-0 z-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-8 text-sm">
              <button
                onClick={() => {
                  navigateTo('/');
                  window.scrollTo({ top: 0 });
                }}
                className="text-zinc-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white focus-visible:underline"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
              <span className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
                AI Strategic Guidance
              </span>
            </nav>

            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-xs text-white/70" style={{ fontFamily: 'var(--font-display)' }}>
                Strategy & Architecture
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: '1.1',
              }}
            >
              AI Strategic Guidance
            </h1>

            {/* Subhead */}
            <p
              className="text-white/80 mb-10 max-w-[720px]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                lineHeight: '1.6',
              }}
            >
              End-to-end advisory for AI transformation. We assess operations, design scalable systems, and build roadmaps your team can execute.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleContactClick}
                className="bg-white text-black hover:bg-zinc-200 rounded-full px-6"
              >
                Talk to an Architect
              </Button>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Outcomes you can expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-[20px] border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="mb-4 text-white/60">
                    {outcome.icon || <CheckCircle2 className="w-8 h-8" />}
                  </div>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                    }}
                  >
                    {outcome.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              What's included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-white/80"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              How we work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-[20px] border border-white/6 bg-white/[0.02]"
                >
                  <div
                    className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
                    style={{
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className="text-white mb-3 mt-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Common integrations
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/70"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                  }}
                >
                  {integration.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Typical results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-[20px] border border-white/6 bg-white/[0.02]"
                >
                  <div
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                    }}
                  >
                    {metric.stat}
                  </div>
                  <div
                    className="text-white/60"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Frequently asked
            </h2>

            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/6 rounded-[20px] px-6 bg-white/[0.02]"
                  >
                    <AccordionTrigger
                      className="text-white hover:no-underline py-6"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.125rem',
                      }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-white/70 pb-6"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                      }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Ready to get started?
            </h2>
            <p
              className="text-white/70 mb-10 max-w-[600px] mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
              }}
            >
              We'll map it in a short discovery.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                className="bg-white text-black hover:bg-zinc-200 rounded-full px-8"
              >
                Talk to an Architect
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
