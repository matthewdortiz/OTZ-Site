import { Button } from '../../ui/button';
import { navigateTo } from '../../Router';

export function WaveformHero() {
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
    <div className="relative w-full">
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <div>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center px-3 py-1.5 rounded-full border mb-4 sm:mb-8 backdrop-blur-sm"
            style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <span className="text-xs sm:text-sm text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Omnichannel AI Agents
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-3 sm:mb-6 px-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 7vw, 6rem)',
              lineHeight: '1.1',
            }}
          >
            AI Voice Agents
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/70 mb-6 sm:mb-12 max-w-[800px] mx-auto px-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
              lineHeight: '1.5',
            }}
          >
            Automate customer calls and chat. Built on your conversation data, integrated with your CRM and phone system, with controls for compliance and escalation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Button
              onClick={handleContactClick}
              className="text-black hover:opacity-90 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-display)', backgroundColor: 'white' }}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}