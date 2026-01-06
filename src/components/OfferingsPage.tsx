'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { navigateTo } from '@/lib/navigation';

const consultingBg = '/assets/ac9e7f83ff72108ba815038c582eb800bc6ea521.png';
const voiceAgentsBg = '/assets/fe986447eedb9a09ab881671e743f5e3ae1b4b8f.png';
const aeoSolutionsBg = '/assets/a902e3f0e8a16e199e12b5bf0b790194e662556a.png';
const teachingsBg = '/assets/def4bbfb80bca8539192afdf547ead8d51b5bba1.png';

const offerings = [
  {
    title: 'AI Strategic Guidance',
    eyebrow: 'Strategy & Architecture',
    route: '/offerings/ai-strategic-guidance',
    backgroundImage: consultingBg,
    flipImage: false,
  },
  {
    title: 'AI Voice Agents',
    eyebrow: 'Omnichannel AI Agents',
    route: '/offerings/ai-voice-agents',
    backgroundImage: voiceAgentsBg,
    flipImage: false,
  },
  {
    title: 'AEO Solutions',
    eyebrow: 'Answer Engine Optimization',
    route: '/offerings/aeo',
    backgroundImage: aeoSolutionsBg,
    flipImage: false,
  },
  {
    title: 'AI Literacy and Training',
    eyebrow: 'Education & Enablement',
    route: '/offerings/teachings',
    backgroundImage: teachingsBg,
    flipImage: false,
  },
];

export function OfferingsPage() {
  const handleOfferingClick = (route: string) => {
    navigateTo(route);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-zinc-950" style={{ height: '100dvh', overflowY: 'auto' }}>
      <Header />
      
      <section className="relative bg-zinc-950 min-h-screen flex items-center justify-center pt-14 sm:pt-24 pb-6 sm:pb-16">
        <div className="w-full px-0 sm:px-6 lg:px-8 py-1 sm:py-6 md:py-8">
          {/* Header */}
          <h1 
            className="text-white mb-2 sm:mb-8 md:mb-10 text-center px-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 6vw, 4rem)',
              lineHeight: '1.1',
            }}
          >
            What we deliver
          </h1>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-3 sm:px-0">
            {offerings.map((offering, index) => (
              <button
                key={index}
                onClick={() => handleOfferingClick(offering.route)}
                className="group relative rounded-lg border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-white/5 flex items-center justify-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] focus-visible:ring-offset-1 focus-visible:ring-offset-white cursor-pointer w-full"
                style={{
                  backgroundColor: offering.backgroundImage ? '#000' : 'transparent',
                  aspectRatio: '4/3',
                  height: 'clamp(85px, 14vh, 480px)',
                  padding: 'clamp(0.4rem, 1.5vw, 2rem)',
                }}
              >
                {/* Background Image */}
                {offering.backgroundImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity"
                    style={{
                      backgroundImage: `url(${offering.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: offering.flipImage ? 'rotate(-90deg)' : 'none'
                    }}
                  />
                )}
                
                {/* Title */}
                <h2 
                  className="relative z-10 text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl px-2"
                  style={{
                    fontWeight: 400,
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  {offering.title}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}