import { Button } from '../../ui/button';
import { navigateTo } from '../../Router';

export function CTAFooter() {
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
    <div className="w-full max-w-[900px] mx-auto text-center px-2">
      {/* Headline */}
      <h2
        className="text-white mb-3 sm:mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 6vw, 4rem)',
          lineHeight: '1.1',
        }}
      >
        Ready to Give Your Business a Voice?
      </h2>

      {/* Subtext */}
      <p
        className="text-white/70 mb-6 sm:mb-12 max-w-[700px] mx-auto px-2"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
          lineHeight: '1.5',
        }}
      >
        Let's map your customer journey and design an AI agent that delivers real value from day one.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
        <Button
          onClick={handleContactClick}
          className="text-black hover:opacity-90 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          style={{ fontFamily: 'var(--font-display)', backgroundColor: 'white' }}
        >
          Book a Strategy Call
          <span className="ml-2 inline-block">
            →
          </span>
        </Button>
      </div>

      {/* Small tagline */}
      <p
        className="text-white/50 mt-4 sm:mt-8 text-xs sm:text-sm"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Typically live in 3-4 weeks • No upfront hardware costs
      </p>
    </div>
  );
}