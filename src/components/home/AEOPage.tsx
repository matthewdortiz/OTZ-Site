'use client';

import { ChevronRight, CheckCircle2, TrendingUp, UserCheck, BarChart3 } from 'lucide-react';
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

const backgroundImage = '/assets/a902e3f0e8a16e199e12b5bf0b790194e662556a.webp';

export function AEOPage() {
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
      title: 'Higher answer accuracy',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Fewer human escalations',
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      title: 'Better search & chat coverage',
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  const includedItems = [
    { text: 'Content audit & schema (documents, FAQs, KBs)' },
    { text: 'Retrieval pipeline (indexing, chunking, embeddings)' },
    { text: 'Evaluation harness (gold sets & error taxonomy)' },
    { text: 'Feedback loop & analytics (coverage, accuracy, drift)' },
    { text: 'Governance: content freshness SLAs, ownership, rollout' },
  ];

  const workSteps = [
    {
      title: 'Discover',
      description: 'Audit your existing content, analyze how AI systems currently surface your information, and identify gaps.',
    },
    {
      title: 'Design',
      description: 'Structure content for optimal retrieval, build knowledge graphs, and configure evaluation systems.',
    },
    {
      title: 'Deliver',
      description: 'Deploy optimized content pipelines with ongoing monitoring, testing, and refinement.',
    },
  ];

  const integrations = [
    { name: 'SharePoint' },
    { name: 'Google Drive' },
    { name: 'Confluence' },
    { name: 'Vector DBs' },
    { name: 'LLM gateways' },
    { name: 'Site search' },
    { name: 'Analytics' },
  ];

  const metrics = [
    {
      stat: '+20–45%',
      label: 'answer accuracy',
    },
    {
      stat: '–30%',
      label: 'escalations',
    },
    {
      stat: 'TTV < 4 weeks',
      label: 'initial scope',
    },
  ];

  const faqs = [
    {
      question: 'Where does AEO help most?',
      answer: 'AEO delivers the biggest impact when you have large content repositories (documentation, FAQs, knowledge bases) that power customer-facing or employee-facing AI systems. It\'s critical for reducing hallucinations, improving answer quality, and ensuring AI systems cite your content as authoritative.',
    },
    {
      question: 'What\'s your evaluation approach?',
      answer: 'We build gold-standard test sets with your SMEs, covering common questions, edge cases, and known failure modes. We measure accuracy, coverage, citation quality, and drift over time. Evaluation runs automatically on every content update or model change.',
    },
    {
      question: 'How do you handle content freshness?',
      answer: 'We establish content ownership, define freshness SLAs per content type, and implement monitoring to flag stale content. You\'ll receive alerts when high-traffic content falls out of SLA or when answer accuracy drops due to outdated information.',
    },
    {
      question: 'Are you vendor-locked to specific AI platforms?',
      answer: 'No. Our approach is platform-agnostic - we optimize for retrieval fundamentals (chunking, embeddings, metadata) that work across OpenAI, Anthropic, Cohere, and open-source models. You can swap LLMs without re-doing content optimization.',
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay to ensure readability */}
      <div className="fixed inset-0 z-0 bg-black/30" />
      
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
                AEO Solutions
              </span>
            </nav>

            {/* Eyebrow */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-xs text-white/70" style={{ fontFamily: 'var(--font-display)' }}>
                Answer Engine Optimization
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
              AEO Solutions
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
              Structure content and retrieval so your organization becomes the source of truth across search, chat, and agents - with instrumentation for outcomes.
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