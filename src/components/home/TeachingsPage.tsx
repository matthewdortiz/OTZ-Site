'use client';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { CheckCircle2, Lightbulb, PenTool, Users, Rocket } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const coverImage = '/assets/def4bbfb80bca8539192afdf547ead8d51b5bba1.png';

export function TeachingsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Background Image - Flipped Horizontally */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scaleX(-1)',
        }}
      >
        {/* Subtle dark gradient at bottom for legibility */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20"
          style={{
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <div className="max-w-[1000px] mx-auto text-center">
            <h1
              className="text-white mb-4 sm:mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 8vw, 5.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              AI Teachings
            </h1>
            <p
              className="text-white/90 max-w-[700px] mx-auto px-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.9375rem, 2vw, 1.5rem)',
                lineHeight: '1.5',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              Helping teams understand, apply, and scale AI systems that create measurable impact.
            </p>
          </div>
        </section>

        {/* AI Learning Journey Diagram */}
        <section className="py-16 sm:py-32 px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2
              className="text-white mb-12 sm:mb-20 text-center"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
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
                'Executive briefings & decision labs',
                'Team workshops (product, data, engineering, ops)',
                'Hands-on labs and capstone projects',
                'Role-specific certifications & rubrics',
                'Playbooks: prompt patterns, evaluation, rollout',
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
                    question: 'What are the audience pre-requisites?',
                    answer: 'No technical background required. Our programs are designed for business users, executives, and practitioners across functions. We tailor content to role - leadership focuses on strategy and governance, while practitioners dive into hands-on implementation.',
                  },
                  {
                    question: 'What formats do you offer - in-person or remote?',
                    answer: 'Both. Executive briefings are often in-person (half-day or full-day). Team workshops can be in-person, remote, or hybrid. Hands-on labs work best in-person but we\'ve successfully delivered them remotely with proper lab environment setup.',
                  },
                  {
                    question: 'Can you customize content for our industry?',
                    answer: 'Yes. We adapt all curriculum to your industry, use cases, and business context. Exercises use your actual data (sanitized), your tools, and scenarios your teams face daily. Generic examples are replaced with your reality.',
                  },
                  {
                    question: 'What\'s the certification process?',
                    answer: 'Certification requires completing coursework, passing a practical assessment, and (for advanced tracks) delivering a capstone project. We provide rubrics, study guides, and office hours. Certified practitioners receive digital credentials and are listed in your internal AI champions directory.',
                  },
                  {
                    question: 'What support do you provide after training?',
                    answer: 'We offer office hours (weekly or bi-weekly), a private Slack channel, access to updated playbooks, and quarterly alumni sessions. Many clients establish internal AI champions who continue driving adoption with our ongoing guidance.',
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