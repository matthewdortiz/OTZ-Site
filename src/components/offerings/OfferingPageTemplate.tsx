'use client';

import { ChevronRight, CheckCircle2 } from 'lucide-react';
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

interface Outcome {
  title: string;
  icon?: React.ReactNode;
}

interface IncludedItem {
  text: string;
}

interface WorkStep {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

interface OfferingPageProps {
  eyebrow: string;
  title: string;
  subhead: string;
  coverImage: string;
  outcomes: Outcome[];
  includedItems: IncludedItem[];
  workSteps: WorkStep[];
  faqs: FAQ[];
  teamMembers?: TeamMember[];
  teamIntro?: string;
  teamClosing?: string;
  contactEmail?: string;
  aboutTitle?: string;
}

export function OfferingPageTemplate({
  eyebrow,
  title,
  subhead,
  coverImage,
  outcomes,
  includedItems,
  workSteps,
  faqs,
  teamMembers,
  teamIntro,
  teamClosing,
  contactEmail,
  aboutTitle,
}: OfferingPageProps) {
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

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-6 lg:px-20 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
          }}
        />
        
        <div className="max-w-[1200px] mx-auto relative z-10 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-sm">
            <button
              onClick={() => {
                navigateTo('/');
                window.scrollTo({ top: 0 });
              }}
              className="text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white focus-visible:underline"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
            <button
              onClick={() => {
                navigateTo('/#offerings');
              }}
              className="text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white focus-visible:underline"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Offerings
            </button>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
            <span className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 mb-6 backdrop-blur-sm">
            <span className="text-xs text-white/90" style={{ fontFamily: 'var(--font-display)' }}>
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h1>

          {/* Subhead */}
          <p
            className="text-white/90 mb-10 max-w-[720px]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            }}
          >
            {subhead}
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
      <section className="py-20 px-6 lg:px-20 bg-zinc-900/30">
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

      {/* Team Section (if team members provided) */}
      {teamMembers && teamMembers.length > 0 && (
        <section className="py-20 px-6 lg:px-20 bg-zinc-900/30">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-8 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              {aboutTitle || 'Our Team'}
            </h2>
            
            {teamIntro && (
              <p
                className="text-white/80 mb-16 text-center max-w-[900px] mx-auto"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                {teamIntro}
              </p>
            )}

            <div className="space-y-12 max-w-[900px] mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-[20px] p-8 bg-white/[0.02]"
                >
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-white/60 mb-4"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                    }}
                  >
                    {member.title}
                  </p>
                  <p
                    className="text-white/80"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      lineHeight: '1.8',
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            {teamClosing && (
              <p
                className="text-white/80 mt-12 text-center max-w-[900px] mx-auto"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                {teamClosing}
              </p>
            )}

            {contactEmail && (
              <div className="mt-12 text-center">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.05] text-white hover:bg-white/[0.1] transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                  }}
                >
                  Email Mychal
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 px-6 lg:px-20 bg-zinc-900/30">
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
  );
}
