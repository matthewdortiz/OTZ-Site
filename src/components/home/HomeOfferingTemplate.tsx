import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { navigateTo } from '../Router';
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

interface Integration {
  name: string;
}

interface Metric {
  stat: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ExperienceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

interface HomeOfferingProps {
  eyebrow: string;
  title: string;
  subhead: string;
  coverImage: string;
  outcomes: Outcome[];
  includedItems: IncludedItem[];
  workSteps: WorkStep[];
  integrations: Integration[];
  metrics: Metric[];
  faqs: FAQ[];
  useBackgroundImage?: boolean;
  aboutTitle?: string;
  aboutContent?: string[];
  experienceItems?: ExperienceItem[];
  teamMembers?: TeamMember[];
  teamIntro?: string;
  teamClosing?: string;
  contactEmail?: string;
}

export function HomeOfferingTemplate({
  eyebrow,
  title,
  subhead,
  coverImage,
  outcomes,
  includedItems,
  workSteps,
  integrations,
  metrics,
  faqs,
  useBackgroundImage = false,
  aboutTitle,
  aboutContent,
  experienceItems,
  teamMembers,
  teamIntro,
  teamClosing,
  contactEmail,
}: HomeOfferingProps) {
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
    <>
      {useBackgroundImage && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      <div 
        className={`min-h-screen relative ${!useBackgroundImage ? 'bg-[#09090b]' : ''}`}
        style={{
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          height: '100dvh',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Header />
        
        {/* Hero Section */}
        <section 
          className="relative flex items-center justify-center px-4 sm:px-6 lg:px-20 z-10"
          style={{
            minHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-2 sm:mb-8 text-sm">
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
              {title}
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-2 sm:mb-6">
            <span className="text-xs text-white/70" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white mb-2 sm:mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 5vw, 4rem)',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h1>

          {/* Subhead */}
          <p
            className="text-white/80 mb-4 sm:mb-10 max-w-[720px]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.85rem, 2vw, 1.125rem)',
              lineHeight: '1.5',
              fontWeight: 400,
            }}
          >
            {subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-4 sm:mb-16">
            <Button
              onClick={handleContactClick}
              className="bg-white text-black hover:bg-zinc-200 rounded-full px-6"
            >
              Talk to an Architect
            </Button>
          </div>

          {/* Cover Image Card (only if not using background) */}
          {!useBackgroundImage && (
            <div
              className="relative rounded-[20px] overflow-hidden border border-white/6 shadow-2xl"
              style={{
                boxShadow: '0 18px 64px rgba(0, 0, 0, 0.18)',
              }}
            >
              <div className="relative aspect-[21/9]">
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
                {/* Noise overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Outcomes Section */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-950' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            Outcomes you can expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-8 rounded-[20px] border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="mb-3 sm:mb-4 text-white/60">
                  {outcome.icon || <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />}
                </div>
                <h3
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
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
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-900/30' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            What's included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[900px] mx-auto">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span
                  className="text-white/80"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-950' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            How we work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {workSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 sm:p-8 rounded-[20px] border border-white/6 bg-white/[0.02]"
              >
                <div
                  className="absolute -top-4 left-6 sm:left-8 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
                  style={{
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {index + 1}
                </div>
                <h3
                  className="text-white mb-2 sm:mb-3 mt-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations & Systems Section */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-900/30' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            Integrations & Systems
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-[900px] mx-auto">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/70 text-xs sm:text-sm"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {integration.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Metrics Section */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-950' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            Proof & metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-8 rounded-[20px] border border-white/6 bg-white/[0.02] text-center"
              >
                <div
                  className="text-white mb-1 sm:mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    lineHeight: '1',
                  }}
                >
                  {metric.stat}
                </div>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-900/30' : ''}`}>
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-white mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            Frequently asked
          </h2>

          <div className="max-w-[800px] mx-auto">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/6 rounded-[20px] px-4 sm:px-6 bg-white/[0.02]"
                >
                  <AccordionTrigger
                    className="text-white hover:no-underline py-4 sm:py-6"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-white/70 pb-4 sm:pb-6"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
        <section className={`py-20 px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-950' : 'bg-zinc-950/95'}`}>
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

      {/* About Section (if no team members) */}
      {!teamMembers && aboutTitle && aboutContent && (
        <section className="py-20 px-6 lg:px-20 z-10 relative bg-zinc-950/90">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              {aboutTitle}
            </h2>
            <div className="space-y-6 max-w-[900px]">
              {aboutContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-white/80"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experienceItems && experienceItems.length > 0 && (
        <section className="py-20 px-6 lg:px-20 z-10 relative bg-zinc-900/50">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg p-8 bg-white/5"
                >
                  <div className="text-white mb-6">
                    {item.icon}
                  </div>
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className={`py-20 px-6 lg:px-20 z-10 relative ${!useBackgroundImage ? 'bg-zinc-950' : ''}`}>
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
    </>
  );
}