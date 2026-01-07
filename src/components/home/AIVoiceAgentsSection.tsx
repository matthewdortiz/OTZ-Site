'use client';

import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/lib/navigation';

const voiceAgentsBg = '/assets/fe986447eedb9a09ab881671e743f5e3ae1b4b8f.webp';

export function AIVoiceAgentsSection() {
  const handleLearnMore = () => {
    navigateTo('/offerings/ai-voice-agents');
  };

  const handleContact = () => {
    const calendlySection = document.getElementById('book-meeting');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="voice-agents"
      className="snap-start relative text-white h-screen overflow-hidden flex items-center"
      style={{
        animation: 'fadeInUp 0.6s ease-out'
      }}
    >
      {/* Background with subtle parallax effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8 md:py-[8vh]">
        <div className="mx-auto w-full max-w-[420px] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[1200px]">
          
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            
            {/* Left: Hero Text */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
              
              {/* H1 */}
              <h1
                className="text-white mb-4 sm:mb-5 md:mb-6 px-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 6vw, 5rem)',
                  lineHeight: '1.1',
                  fontWeight: 400,
                  letterSpacing: '-0.02em'
                }}
              >
                AI Voice & Chat Agents
              </h1>

              {/* Subhead */}
              <p
                className="text-white/70 max-w-xl mx-auto lg:mx-0 px-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.9375rem, 2vw, 1.5rem)',
                  lineHeight: '1.6',
                  fontWeight: 400,
                }}
              >
                Automate customer calls and chat. Built on your conversation data, integrated with your CRM and phone system, with controls for compliance and escalation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                <button
                  onClick={handleLearnMore}
                  className="group relative px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent flex items-center justify-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                    lineHeight: '1.1',
                    color: 'rgba(255, 255, 255, 0.8)',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.13)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right: Clickable Image */}
            <div 
              onClick={handleLearnMore}
              className="relative aspect-video lg:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLearnMore();
                }
              }}
              aria-label="Learn more about AI Voice Agents"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)'
              }}
            >
              <img
                src={voiceAgentsBg}
                alt="abstract wave texture with sound resonance motif"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}