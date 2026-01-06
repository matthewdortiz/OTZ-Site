import { Mail, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative bg-zinc-950 h-screen flex items-center overflow-hidden snap-start snap-always">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 md:mb-10 px-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-4">
          Have questions? Reach out to us directly
        </p>
        
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-xl mx-auto px-4">
          {/* Email Contact */}
          <a 
            href="mailto:matthew@otz.group"
            className="flex items-center justify-center gap-3 sm:gap-4 text-white hover:text-zinc-300 transition-colors group"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-zinc-400 group-hover:text-zinc-300" />
            <span 
              className="text-base sm:text-lg md:text-xl lg:text-2xl break-all"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              matthew@otz.group
            </span>
          </a>
          
          {/* Phone Contact */}
          <a 
            href="tel:+13057814034"
            className="flex items-center justify-center gap-3 sm:gap-4 text-white hover:text-zinc-300 transition-colors group"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-zinc-400 group-hover:text-zinc-300" />
            <span 
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              +1 (305) 781-4034
            </span>
          </a>
        </div>
        
        <p className="text-xs sm:text-sm text-zinc-500 mt-10 sm:mt-12 md:mt-14 px-4">
          We typically respond within 1 hour
        </p>
      </div>
    </section>
  );
}