import consultingBg from 'figma:asset/ac9e7f83ff72108ba815038c582eb800bc6ea521.png';
import voiceAgentsBg from 'figma:asset/fe986447eedb9a09ab881671e743f5e3ae1b4b8f.png';
import aeoSolutionsBg from 'figma:asset/a902e3f0e8a16e199e12b5bf0b790194e662556a.png';
import teachingsBg from 'figma:asset/def4bbfb80bca8539192afdf547ead8d51b5bba1.png';

const offerings = [
  {
    title: 'AI Strategic Guidance',
    eyebrow: 'Strategy & Architecture',
    anchor: '#ai-strategy',
    backgroundImage: consultingBg,
    flipImage: false,
  },
  {
    title: 'AI Voice Agents',
    eyebrow: 'Omnichannel AI Agents',
    anchor: '#voice-agents',
    backgroundImage: voiceAgentsBg,
    flipImage: false,
  },
  {
    title: 'AEO Solutions',
    eyebrow: 'Answer Engine Optimization',
    anchor: '#aeo',
    backgroundImage: aeoSolutionsBg,
    flipImage: false,
  },
  {
    title: 'Teachings',
    eyebrow: 'Education & Enablement',
    anchor: '#teachings',
    backgroundImage: teachingsBg,
    flipImage: false,
  },
];

export function OurOfferings() {
  const handleOfferingClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="offerings"
      className="relative bg-zinc-950 h-screen flex items-center justify-center snap-start snap-always overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 md:py-8 lg:py-10 w-full flex flex-col justify-center">
        {/* Responsive 2x2 grid with dynamic card sizing */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 w-full mx-auto"
          style={{
            maxWidth: 'min(100%, 1100px)',
          }}
        >
          {offerings.map((offering, index) => (
            <a
              key={index}
              href={offering.anchor}
              onClick={(e) => handleOfferingClick(e, offering.anchor)}
              className="group relative rounded-lg border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-white/5 flex items-center justify-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] focus-visible:ring-offset-1 focus-visible:ring-offset-white w-full"
              style={{
                backgroundColor: offering.backgroundImage ? '#000' : 'transparent',
                minHeight: '120px',
                maxHeight: '260px',
                height: 'clamp(120px, 20vh, 260px)',
                padding: 'clamp(0.75rem, 2.5vw, 1.5rem)',
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
              <h3 
                className="relative z-10 text-white text-center px-2 sm:px-3"
                style={{
                  fontWeight: 400,
                  lineHeight: '1.15',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 3vw, 1.75rem)',
                }}
              >
                {offering.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}