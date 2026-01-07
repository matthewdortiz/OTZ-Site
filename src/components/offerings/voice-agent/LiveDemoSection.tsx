'use client';

import { Phone, PhoneCall } from 'lucide-react';
import { Button } from '../../ui/button';

export function LiveDemoSection() {
  return (
    <div className="w-full max-w-[900px] mx-auto px-2 sm:px-4">
      <div className="text-center">
        {/* Title */}
        <h2
          className="text-white mb-2 sm:mb-4 md:mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 5vw, 3rem)',
            lineHeight: '1.2',
            textShadow: '0 2px 15px rgba(0,0,0,0.3)',
          }}
        >
          Experience It Live
        </h2>

        {/* Description */}
        <p
          className="text-white/70 mb-4 sm:mb-8 md:mb-12 max-w-[600px] mx-auto px-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.8125rem, 2.5vw, 1.125rem)',
            lineHeight: '1.5',
          }}
        >
          Call our demo agent and experience intelligent conversation powered by AI. Try asking about appointments, account verification, or general inquiries.
        </p>
      </div>

      {/* Phone Number Display */}
      <div
        className="relative p-4 sm:p-8 md:p-12 rounded-2xl backdrop-blur-lg"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.03)',
          animation: 'fadeInUp 0.8s ease-out 0.3s backwards',
        }}
      >
        <div className="relative z-10 text-center">
          {/* Phone Icon */}
          <div
            className="inline-flex p-3 sm:p-5 md:p-6 rounded-full mb-3 sm:mb-6 md:mb-8"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          >
            <PhoneCall className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>

          {/* Phone Number */}
          <a
            href="tel:+16282304815"
            className="block mb-2 sm:mb-4"
          >
            <span
              className="text-white transition-colors hover:text-white/80"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 6vw, 3.5rem)',
                letterSpacing: '0.05em',
              }}
            >
              (628) 230-4815
            </span>
          </a>

          {/* Subtext */}
          <p
            className="text-white/60 mb-2 sm:mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.6875rem, 2vw, 1rem)',
            }}
          >
            Available 24/7 • Average response time: {'<2'} seconds
          </p>

          {/* Description */}
          <p
            className="text-white/60 mb-3 sm:mb-6 md:mb-8 px-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.6875rem, 2vw, 1rem)',
              lineHeight: '1.4',
            }}
          >
            Live AI voice demo showcasing an insurance-style workflow, including customer service, policy inquiries, plan verification, and appointment requests.
          </p>

          {/* CTA Button */}
          <div
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.5s backwards',
            }}
          >
            <Button
              onClick={() => window.open('tel:+16282304815', '_self')}
              className="text-black hover:opacity-90 rounded-full px-5 sm:px-8 py-3 sm:py-6"
              style={{ 
                fontFamily: 'var(--font-display)', 
                backgroundColor: 'white',
                fontSize: 'clamp(0.8125rem, 2vw, 1.125rem)',
              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Pills */}
      <div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-8 md:mt-12 px-2"
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.7s backwards',
        }}
      >
        {['Natural Language', 'Context Aware', 'Instant Handoff'].map((feature, index) => (
          <div
            key={index}
            className="px-2.5 sm:px-4 md:px-5 py-1 sm:py-2 rounded-full backdrop-blur-sm"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.6875rem, 2vw, 0.875rem)',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}