import { Briefcase, Mic, TrendingUp, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { navigateTo } from './Router';

const pillars = [
  {
    icon: Briefcase,
    title: 'Consulting',
    hash: '#ai-strategic-guidance',
  },
  {
    icon: Mic,
    title: 'Voice AI',
    hash: '#ai-voice-agents',
  },
  {
    icon: TrendingUp,
    title: 'AEO',
    hash: '#aeo',
  },
  {
    icon: GraduationCap,
    title: 'AI Enablement',
    hash: '#teachings',
  },
];

export function Hero() {
  const handleContactClick = () => {
    const calendlySection = document.getElementById('book-meeting');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePillarClick = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pt-12 sm:pt-24 md:pt-32">
        <div>
          <h1 
            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white mx-auto px-2 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We build intelligence into businesses
          </h1>
          
          <p className="mt-4 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg text-zinc-200 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
            For the last several years, we've been partnering with businesses to give them quick, straightforward AI systems that modernize their operations and keep their businesses operating for the long term.
          </p>

          {/* Pillars */}
          <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-24 max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col items-center gap-2 sm:gap-4 group cursor-pointer"
                    onClick={() => handlePillarClick(pillar.hash)}
                  >
                    <div className="inline-flex p-3 sm:p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg group-hover:border-zinc-700 group-hover:bg-zinc-800/50 transition-all">
                      <Icon className="h-7 w-7 sm:h-7 sm:w-7 md:h-8 md:w-8 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                    <p 
                      className="text-sm sm:text-base text-zinc-400 group-hover:text-white transition-colors text-center"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {pillar.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-24 flex justify-center pb-6 sm:pb-8">
            <Button
              onClick={handleContactClick}
              className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact the Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}