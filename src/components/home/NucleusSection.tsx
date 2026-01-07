'use client';

import { ArrowRight } from 'lucide-react';

const nucleusLogo = '/assets/4b687204aaec3298af0000550b663db441082924.png';
const nucleusImage = '/assets/db9edf86cd0a365118b0849fed74a23bf31b3a45.png';

export function NucleusSection() {
  const handleLearnMore = () => {
    window.open('https://nucleus.run', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="nucleus"
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
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-[8vh] mt-8 sm:mt-12 md:mt-16">
        <div className="mx-auto w-full max-w-[420px] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[1200px]">
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left: Hero Text */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
              
              {/* Nucleus Logo */}
              <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                <img 
                  src={nucleusLogo} 
                  alt="Nucleus" 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                  style={{ filter: 'invert(1) brightness(1)' }}
                />
              </div>

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
                Unify all of your business data into a secure AI core so your team can ask questions, pull insights, and trigger AI workflows, all through natural conversation. Act quicker. Smarter.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
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
              aria-label="Learn more about Nucleus"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)'
              }}
            >
              <img
                src={nucleusImage}
                alt="abstract flowing design"
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