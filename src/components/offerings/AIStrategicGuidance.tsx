import { ChevronRight, Database, Network, Brain, Cog, TrendingUp, RefreshCw, BarChart, MessageSquare, Users, Activity, Target, Layers, FileText, Settings } from 'lucide-react';
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
import { ImageWithFallback } from '../figma/ImageWithFallback';
import supabaseLogo from 'figma:asset/b0f0f0c27a929959492e0c2f833b8195ffd4e71a.png';
import slackLogo from 'figma:asset/63504b50e1634a84e01bf9147536ff5e219fdb8d.png';
import salesforceLogo from 'figma:asset/cb7b816fae03a389d4279c5b785817fc48076788.png';
import openaiLogo from 'figma:asset/09c6c860ada4518b871edf760c1524b061c59503.png';
import googleWorkspaceLogo from 'figma:asset/cc002106dcbee5fbba49ab6ce66c80de2f5c932d.png';
import hubspotLogo from 'figma:asset/13a7092c9bee9564fbfb74056c720c9c06c4895b.png';
import strategyBackground from 'figma:asset/ac9e7f83ff72108ba815038c582eb800bc6ea521.png';

const integrations = [
  { 
    name: 'Supabase', 
    logo: supabaseLogo
  },
  { 
    name: 'Slack', 
    logo: slackLogo
  },
  { 
    name: 'Salesforce', 
    logo: salesforceLogo
  },
  { 
    name: 'OpenAI', 
    logo: openaiLogo
  },
  { 
    name: 'Google Workspace', 
    logo: googleWorkspaceLogo
  },
  { 
    name: 'HubSpot', 
    logo: hubspotLogo
  },
];

export function AIStrategicGuidance() {
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
    <div 
      className="min-h-screen relative"
      style={{
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        height: '100dvh',
      }}
    >
      {/* Fixed Background Image for entire page */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${strategyBackground})`,
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
        
        {/* Panel 1: Hero Section */}
        <section 
          className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-20"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="relative z-10 max-w-[1200px] mx-auto text-center w-full">
            <div>
              {/* Title */}
              <h1
                className="text-white mb-3 sm:mb-6 px-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 7vw, 6rem)',
                  lineHeight: '1.1',
                }}
              >
                Strategy & Architecture for AI
              </h1>

              {/* Subhead */}
              <p
                className="text-white/70 mb-6 sm:mb-10 md:mb-12 max-w-[800px] mx-auto px-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                  lineHeight: '1.5',
                }}
              >
                We transform your data into AI-ready infrastructure, then deploy our proprietary agentic system to continuously identify and execute high-impact use cases across your organization.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={handleContactClick}
                  className="text-black hover:opacity-90 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                  style={{ fontFamily: 'var(--font-display)', backgroundColor: 'white' }}
                >
                  Talk to an Architect
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 2: Intelligent Data Foundation */}
        <section 
          className="flex items-center justify-center px-4 sm:px-6 lg:px-20 py-12 sm:py-20"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="max-w-[1400px] mx-auto w-full">
            <h2
              className="text-white mb-6 sm:mb-10 md:mb-12 text-center px-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              }}
            >
              Intelligent Data Foundation
            </h2>
            
            {/* Main paragraph */}
            <p
              className="text-white/80 mb-4 sm:mb-6 max-w-[780px] mx-auto text-center px-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.875rem, 2vw, 1.25rem)',
                lineHeight: '1.7',
              }}
            >
              Businesses, naturally, have data scattered across platforms - CRMs, ERPs, databases, files, etc. Each one may have "AI features," but nothing's unified. Our focus is connecting these sources, structuring the data, and deploying domain-specific AI agents trained on your business data.
            </p>
          </div>
        </section>

        {/* Panel 3: What Becomes Possible with 4 white boxes */}
        <section 
          className="flex items-center justify-center px-3 sm:px-6 lg:px-20 py-6 sm:py-12 md:py-16"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="max-w-[1400px] mx-auto w-full">
            {/* What Becomes Possible header */}
            <h3
              className="text-white mb-2 sm:mb-6 md:mb-8 text-center px-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 4vw, 3rem)',
              }}
            >
              What Becomes Possible
            </h3>

            {/* 4 white boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 max-w-[1100px] mx-auto">
              {[
                {
                  title: 'Agentic Assistants',
                  description: 'Trained on your business data that perform routine tasks (policy Q&A, invoice/vendor lookups, SOP search, ticket triage)',
                  icon: <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7" />
                },
                {
                  title: 'Process Automation',
                  description: 'Drafts, routes, and updates records across systems',
                  icon: <Activity className="w-5 h-5 sm:w-7 sm:h-7" />
                },
                {
                  title: 'Cross-System Analytics',
                  description: 'Answer real business questions in seconds',
                  icon: <BarChart className="w-5 h-5 sm:w-7 sm:h-7" />
                },
                {
                  title: 'Repeatable Playbook',
                  description: 'Add new use cases in days - not months',
                  icon: <Users className="w-5 h-5 sm:w-7 sm:h-7" />
                }
              ].map((deliverable, index) => (
                <div
                  key={index}
                  className="p-2.5 sm:p-5 md:p-7 rounded-lg transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1.5 sm:mb-4 transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      border: '1.5px solid rgba(100, 100, 100, 0.15)',
                    }}
                  >
                    <div style={{ color: '#4b5563' }}>
                      {deliverable.icon}
                    </div>
                  </div>
                  <h4
                    className="mb-1 sm:mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
                      color: '#1f2937',
                    }}
                  >
                    {deliverable.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                      lineHeight: '1.4',
                      color: '#4b5563',
                    }}
                  >
                    {deliverable.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel 4: Integrates with Your Stack */}
        <section 
          className="flex items-center justify-center px-4 sm:px-6 lg:px-20 py-12 sm:py-20"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="max-w-[1200px] mx-auto w-full">
            <h2
              className="text-white mb-8 sm:mb-12 text-center px-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Integrates with Your Stack
            </h2>
            
            {/* Integration Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Logo */}
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <ImageWithFallback
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="max-w-[160px] max-h-16 object-contain"
                      style={integration.name === 'OpenAI' ? { filter: 'brightness(0) invert(1)' } : {}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel 5: Strategic Engagement */}
        <section 
          className="flex items-center justify-center px-4 sm:px-6 lg:px-20 py-12 sm:py-16"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  }}
                >
                  Strategic Engagement
                </h2>

                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.875rem, 1.8vw, 1.0625rem)',
                    lineHeight: '1.7',
                  }}
                >
                  We combine consulting, architecture, and implementation expertise with our proprietary agentic system to transform your business operations. We don't just deliver recommendations, we build and integrate solutions that work within your existing infrastructure and workflows.
                </p>
              </div>

              {/* Right Column - Process Diagram */}
              <div className="relative">
                {/* Connecting Line for Desktop */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" 
                  style={{ zIndex: 0 }}
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M 50%,10% L 50%,90%"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Process Steps */}
                <div className="space-y-2 relative z-10">
                  {[
                    {
                      number: 1,
                      title: 'Data & Systems Assessment',
                      description: 'Map CRMs, ERPs, files, and workflows across your stack.',
                      icon: <Layers className="w-5 h-5" />
                    },
                    {
                      number: 2,
                      title: 'Secure Data Ingestion',
                      description: 'Connect and centralize your data with enterprise-grade security measures and compliance protocols.',
                      icon: <Database className="w-5 h-5" />
                    },
                    {
                      number: 3,
                      title: 'AI Opportunity Discovery',
                      description: 'Identify high-impact use cases where AI agents can provide value and enhance decision-making using our agentic system.',
                      icon: <Brain className="w-5 h-5" />
                    },
                    {
                      number: 4,
                      title: 'Implementation & Change Management',
                      description: 'Co-deliver builds, integrate with your tools, train teams.',
                      icon: <Settings className="w-5 h-5" />
                    },
                    {
                      number: 5,
                      title: 'Continuous Optimization',
                      description: 'Monitor impact, refine agents, and roll out new use cases.',
                      icon: <RefreshCw className="w-5 h-5" />
                    }
                  ].map((step) => (
                    <div
                      key={step.number}
                      className="relative p-3 rounded-lg backdrop-blur-sm transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Number Badge */}
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                          }}
                        >
                          <span
                            className="text-white"
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.8125rem',
                            }}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <div className="text-white/80">
                              {step.icon}
                            </div>
                            <h4
                              className="text-white"
                              style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9375rem',
                              }}
                            >
                              {step.title}
                            </h4>
                          </div>
                          <p
                            className="text-white/70"
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.8125rem',
                              lineHeight: '1.4',
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 6: FAQ Section */}
        <section 
          className="flex items-center justify-center px-6 lg:px-20 py-20"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <div className="max-w-[1200px] mx-auto w-full">
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
                {[
                  {
                    question: 'How long does a strategic engagement typically take?',
                    answer: 'Most strategic assessments take 4-8 weeks, depending on the complexity of your operations and the scope of AI implementation. We can accelerate timelines for focused initiatives or extend for enterprise-wide transformations.',
                  },
                  {
                    question: 'What kind of access do you need to our systems?',
                    answer: 'We work directly with your IT and security teams to establish secure, read-only access with role-based permissions and audit logging. Our processes align with SOC 2, GDPR, and HIPAA requirements to ensure compliance at every step.',
                  },
                  {
                    question: 'Do you help with implementation, or just strategy?',
                    answer: 'We provide both. Our strategic engagements include detailed implementation roadmaps, and we can continue as your implementation partner or hand off to your internal teams with comprehensive documentation and training.',
                  },
                  {
                    question: 'How do you measure success?',
                    answer: 'We establish clear KPIs upfront tied to your business objectives - whether that\'s cost reduction, revenue growth, efficiency gains, or customer satisfaction improvements. Every recommendation includes projected impact metrics based on your actual data.',
                  },
                  {
                    question: 'What industries do you specialize in?',
                    answer: 'We have deep expertise in healthcare, financial services, and professional services, but our methodology is industry-agnostic. Our proprietary analysis system adapts to any business model with structured data and operational processes.',
                  },
                ].map((faq, index) => (
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

        <Footer />
      </div>
    </div>
  );
}