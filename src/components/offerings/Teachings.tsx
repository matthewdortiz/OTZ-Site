import { Header } from '../Header';
import { Footer } from '../Footer';
import { CheckCircle2, Lightbulb, PenTool, Users, Rocket } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const coverImage = '/assets/ccba4d1a51711117e56b7497b7a612e8532e7921.webp';

export function Teachings() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Background Image - Full Width */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle dark gradient overlay for legibility */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>

      {/* Content Container */}
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
                  Training & Education
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  lineHeight: '1.1',
                }}
              >
                AI Literacy & Training
              </h1>

              {/* Subheadline */}
              <p
                className="text-white/70 mb-12 max-w-[800px] mx-auto"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  lineHeight: '1.6',
                }}
              >
                Practical education programs for teams at every level. Leadership sessions on strategy and implications, technical workshops on implementation, and hands-on labs with actual AI tools.
              </p>
            </div>
          </div>
        </section>

        {/* AI Learning Journey Diagram */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-20 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              AI Learning Journey
            </h2>

            {/* Horizontal Flow Diagram */}
            <div className="relative">
              {/* Connecting Line */}
              <div 
                className="absolute top-16 left-0 right-0 h-0.5 hidden lg:block"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent)',
                  animation: 'flowLine 3s ease-in-out infinite',
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {/* Step 1: Discover */}
                <div 
                  className="relative"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.2s backwards',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md relative"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                        animation: 'pulse 3s ease-in-out infinite',
                      }}
                    >
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                      }}
                    >
                      Discover
                    </h3>
                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      Assess AI readiness, skill gaps, and opportunities.
                    </p>
                  </div>
                </div>

                {/* Step 2: Design */}
                <div 
                  className="relative"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.4s backwards',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                        animation: 'pulse 3s ease-in-out infinite 0.5s',
                      }}
                    >
                      <PenTool className="w-12 h-12 text-white" />
                    </div>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                      }}
                    >
                      Design
                    </h3>
                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      Build AI curricula and implementation frameworks.
                    </p>
                  </div>
                </div>

                {/* Step 3: Train */}
                <div 
                  className="relative"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.6s backwards',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                        animation: 'pulse 3s ease-in-out infinite 1s',
                      }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                      }}
                    >
                      Train
                    </h3>
                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      Deliver hands-on AI workshops and role-based learning.
                    </p>
                  </div>
                </div>

                {/* Step 4: Deploy */}
                <div 
                  className="relative"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.8s backwards',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                        animation: 'pulse 3s ease-in-out infinite 1.5s',
                      }}
                    >
                      <Rocket className="w-12 h-12 text-white" />
                    </div>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                      }}
                    >
                      Deploy
                    </h3>
                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      Enable adoption through ongoing support and refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes You Can Expect */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-16 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              Outcomes you can expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Leadership alignment on AI strategy',
                  description: 'Executive teams aligned on AI vision, priorities, and governance.',
                },
                {
                  title: 'Upskilled teams',
                  description: 'Practitioners confident in applying AI to real business challenges.',
                },
                {
                  title: 'Faster adoption & better safety practices',
                  description: 'Accelerated deployment with built-in ethical and security guardrails.',
                },
              ].map((outcome, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl backdrop-blur-md"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s backwards`,
                  }}
                >
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                    }}
                  >
                    {outcome.title}
                  </h3>
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-16 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              What's included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {[
                'Executive briefings & strategy sessions',
                'Hands-on team workshops & labs',
                'Role-specific AI training tracks',
                'Certification programs & assessments',
                'Implementation playbooks & templates',
                'Office hours & ongoing support',
                'Custom use case development',
                'Internal champions program',
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s backwards`,
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span
                    className="text-white/90"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      lineHeight: '1.6',
                      textShadow: '0 1px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work - Timeline */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-16 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              How we work
            </h2>

            {/* Horizontal Timeline for Desktop */}
            <div className="hidden lg:block relative">
              {/* Timeline connector */}
              <div 
                className="absolute top-12 left-0 right-0 h-0.5"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 15%, rgba(255,255,255,0.2) 85%, transparent)',
                }}
              />

              <div className="grid grid-cols-3 gap-12">
                {[
                  {
                    title: 'Discover',
                    description: 'Assess current AI literacy, identify skill gaps, and map training needs to business objectives.',
                  },
                  {
                    title: 'Design',
                    description: 'Build custom curriculum with role-specific tracks, hands-on exercises, and real-world use cases.',
                  },
                  {
                    title: 'Deliver',
                    description: 'Execute training programs with expert instructors, provide ongoing support, and certify competencies.',
                  },
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="relative pt-20"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.2}s backwards`,
                    }}
                  >
                    {/* Glowing dot */}
                    <div 
                      className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.3))',
                        boxShadow: '0 0 20px rgba(255,255,255,0.6)',
                      }}
                    />
                    <h3
                      className="text-white mb-3 text-center"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-white/70 text-center"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Timeline for Mobile */}
            <div className="lg:hidden space-y-12">
              {[
                {
                  title: 'Discover',
                  description: 'Assess current AI literacy, identify skill gaps, and map training needs to business objectives.',
                },
                {
                  title: 'Design',
                  description: 'Build custom curriculum with role-specific tracks, hands-on exercises, and real-world use cases.',
                },
                {
                  title: 'Deliver',
                  description: 'Execute training programs with expert instructors, provide ongoing support, and certify competencies.',
                },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative pl-12"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.2}s backwards`,
                  }}
                >
                  {/* Vertical connector line */}
                  {index < 2 && (
                    <div 
                      className="absolute left-3 top-8 bottom-0 w-0.5"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                      }}
                    />
                  )}
                  {/* Glowing dot */}
                  <div 
                    className="absolute left-0 top-0 w-6 h-6 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.3))',
                      boxShadow: '0 0 20px rgba(255,255,255,0.6)',
                    }}
                  />
                  <h3
                    className="text-white mb-2"
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
                      lineHeight: '1.6',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Architects */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-8 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              Meet the Architects
            </h2>
            
            <p
              className="text-white/80 mb-20 text-center max-w-[900px] mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                lineHeight: '1.8',
                textShadow: '0 1px 10px rgba(0,0,0,0.3)',
              }}
            >
              At OTZ Group, our team brings together expertise across artificial intelligence, automation, and system design. We're committed to helping organizations harness the power of AI to achieve operational excellence, scale efficiently, and transform how they work.
            </p>

            <div className="space-y-12 max-w-[900px] mx-auto">
              {[
                {
                  name: 'Mychal Ortiz',
                  title: 'AI Systems Architect & Consultant',
                  bio: 'Mychal specializes in end-to-end AI system design, helping businesses implement intelligent automation to reduce costs and improve customer engagement. He bridges the gap between technical architecture and real-world business value, ensuring every solution delivers measurable outcomes.',
                },
                {
                  name: 'Matthew Ortiz',
                  title: 'AI Systems Architect & Consultant',
                  bio: 'Matthew has over four years of experience guiding companies through their AI transformation journeys - from strategy and architecture to deployment and optimization. He combines deep technical expertise with a clear understanding of how to make AI practical, scalable, and accessible for any organization.',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl backdrop-blur-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.03)',
                    animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.2}s backwards`,
                  }}
                >
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-white/60 mb-4"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                    }}
                  >
                    {member.title}
                  </p>
                  <p
                    className="text-white/85"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      lineHeight: '1.8',
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-white/80 mt-16 text-center max-w-[900px] mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                lineHeight: '1.8',
                textShadow: '0 1px 10px rgba(0,0,0,0.3)',
              }}
            >
              Together, we help businesses unlock the full potential of AI through strategy, design, and deployment - combining innovation with hands-on implementation to drive tangible results.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-16 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textShadow: '0 2px 15px rgba(0,0,0,0.3)',
              }}
            >
              Frequently asked
            </h2>

            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: 'Who should attend these training programs?',
                    answer: 'We offer programs for all levels - from executive strategy sessions for leadership to hands-on technical workshops for implementation teams. Most organizations benefit from a multi-tier approach: executive alignment, manager enablement, and practitioner training.',
                  },
                  {
                    question: 'Do participants need technical backgrounds?',
                    answer: 'No. Our programs are designed for business users, not engineers. We teach practical AI skills that apply to daily work - prompt engineering, workflow automation, data analysis - without requiring coding or machine learning expertise.',
                  },
                  {
                    question: 'How long are the programs?',
                    answer: 'Executive briefings are typically 2-4 hours. Team workshops range from half-day sessions to multi-week programs with weekly modules. We customize duration and format based on your needs and constraints.',
                  },
                  {
                    question: 'Is this just ChatGPT training?',
                    answer: 'No. While we cover major AI assistants, we focus on AI literacy, strategic thinking, and practical application to your business challenges. Participants learn when to use AI, how to evaluate tools, and how to build sustainable AI workflows.',
                  },
                  {
                    question: 'Do you provide certifications?',
                    answer: 'Yes. Participants who complete our programs and pass assessments receive OTZ AI Practitioner certifications. We also offer custom certification tracks aligned with your internal competency frameworks.',
                  },
                  {
                    question: 'What happens after the training?',
                    answer: 'We provide ongoing support through office hours, implementation playbooks, and access to our expert community. Many clients establish internal AI champions who continue driving adoption with our guidance.',
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl px-6 backdrop-blur-md overflow-hidden"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                    }}
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
                      className="text-white/80 pb-6"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        lineHeight: '1.6',
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

        <Footer />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05);
          }
          50% {
            box-shadow: 0 8px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.1);
          }
        }

        @keyframes flowLine {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}