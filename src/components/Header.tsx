import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { navigateTo } from './Router';
import nucleusLogo from 'figma:asset/4b687204aaec3298af0000550b663db441082924.png';
import otzLogo from 'figma:asset/a0a5640ba53bc00982c4d72a3acb171ad7d022d4.png';

export function Header() {
  const scrollToTop = () => {
    // Use client-side navigation instead of full page reload
    if (window.location.pathname !== '/') {
      navigateTo('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigateTo('/' + hash);
      // Scroll after navigation
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCaseStudiesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('/case-studies');
    window.scrollTo({ top: 0 });
  };

  const handleOfferingsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('/offerings');
    window.scrollTo({ top: 0 });
  };

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 flex-1 pl-2 sm:pl-4">
            <button 
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity cursor-pointer flex items-center" 
            >
              <img 
                src={otzLogo} 
                alt="OTZ" 
                className="h-4 sm:h-5 w-auto"
                style={{ filter: 'invert(1) brightness(1)' }}
              />
            </button>
            
            <nav className="flex items-center justify-around flex-1 px-4 sm:justify-start sm:px-0 sm:flex-initial sm:gap-4 lg:gap-8">
              <a 
                href="https://nucleus.run" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={nucleusLogo} 
                  alt="Nucleus" 
                  className="h-4 sm:h-5 w-auto hover:opacity-80 transition-opacity"
                  style={{ filter: 'invert(1) brightness(1)' }}
                />
              </a>
              <a 
                href="/offerings" 
                onClick={handleOfferingsClick} 
                className="text-xs lg:text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Offerings
              </a>
              <a 
                href="/case-studies" 
                onClick={handleCaseStudiesClick} 
                className="text-xs lg:text-sm text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Case Studies
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              onClick={handleContactClick}
              className="bg-white text-black hover:bg-zinc-200 rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2 h-8 sm:h-auto hidden sm:inline-flex"
            >
              Contact The Team
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}