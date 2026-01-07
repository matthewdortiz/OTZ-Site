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

const coverImage = '/assets/809e7f5fb5a14a2a1fbc12c9308d59083d415d1b.webp';
const backgroundImage = '/assets/a902e3f0e8a16e199e12b5bf0b790194e662556a.webp';

export function AEOSolutions() {
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
      title: 'Answer accuracy uplift',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Fewer escalations to humans',
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      title: 'Better search/chat coverage',
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  const includedItems = [
    { text: 'Content schema & semantic structure' },
    { text: 'Retrieval pipeline optimization' },
    { text: 'Answer evaluation harness & testing' },
    { text: 'Multi-engine analytics & attribution' },
    { text: 'Governance guidelines & workflows' },
    { text: 'Knowledge graph development' },
    { text: 'Citation & source tracking' },
    { text: 'Performance monitoring dashboards' },
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

  const faqs = [
    {
      question: 'What is AEO and how is it different from SEO?',
      answer: 'Answer Engine Optimization (AEO) focuses on how AI systems like ChatGPT, Perplexity, Claude, and enterprise agents understand and cite your content. Unlike SEO which optimizes for keyword rankings, AEO optimizes for being the source of truth when AI systems generate answers.',
    },
    {
      question: 'Which AI systems do you optimize for?',
      answer: 'We optimize for major AI assistants (ChatGPT, Claude, Perplexity, Gemini), enterprise search systems (Glean, Guru), and custom AI agents. Our approach is platform-agnostic, focusing on semantic structure and retrieval fundamentals that work across systems.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We track citation frequency, answer accuracy, source attribution, and conversion events. Our analytics platform monitors how often your content is cited, the accuracy of AI-generated responses, and the business outcomes (leads, conversions, reduced support tickets) that result.',
    },
    {
      question: 'Do you need access to our content management system?',
      answer: 'Ideally, yes - but we can work with what you have. We can optimize through your CMS, documentation platform, or even by providing structured guidelines for your content team. The more direct access we have, the faster we can implement improvements.',
    },
    {
      question: 'How long before we see results?',
      answer: 'Initial improvements can appear within 2-4 weeks for AI systems with frequent crawls. Full optimization typically takes 2-3 months as we iterate on structure, evaluate results, and refine based on performance data.',
    },
    {
      question: 'Is this only for customer-facing content?',
      answer: 'No. AEO applies to internal knowledge bases, documentation, and enterprise search as well. Many clients see bigger ROI from optimizing internal content that powers employee-facing AI agents and search tools.',
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
      <div className="fixed inset-0 z-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-20">
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <div>
              {/* Eyebrow */}
              <div
                className="inline-flex items-center px-4 py-2 rounded-full border mb-8 backdrop-blur-sm"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <span className="text-sm text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Answer Engine Optimization
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  lineHeight: '1.1',
                }}
              >
                Answer Engine Optimization
              </h1>

              {/* Subhead */}
              <p
                className="text-white/70 mb-12 max-w-[800px] mx-auto"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  lineHeight: '1.6',
                }}
              >
                Make your content retrievable and accurate for AI search tools. As users shift from search engines to ChatGPT and Gemini for answers, AEO ensures your business shows up in AI-generated responses.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleContactClick}
                  className="text-black hover:opacity-90 rounded-full px-8 py-6 text-lg"
                  style={{ fontFamily: 'var(--font-display)', backgroundColor: 'white' }}
                >
                  Talk to an Architect
                </Button>
              </div>
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
              <Button
                onClick={() => {
                  navigateTo('/solutions');
                  window.scrollTo({ top: 0 });
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
              >
                See Services
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}