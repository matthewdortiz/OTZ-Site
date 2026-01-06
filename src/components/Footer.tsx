import { Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  Solutions: ['Data Readiness', 'AI Implementation', 'Custom Agents', 'Consulting'],
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 h-screen flex items-center overflow-hidden snap-start snap-always">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-base md:text-lg text-white" style={{ fontFamily: '"Times New Roman", Times, serif', letterSpacing: '0.05em' }}>OTZ</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              AI-Powered Operational Intelligence
            </p>
            <div className="flex items-center gap-4 md:gap-5 mt-5 md:mt-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 
                className="text-sm sm:text-base text-white mb-4 md:mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category}
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 sm:pt-10 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-zinc-500 text-center sm:text-left">
            © 2025 OTZ Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 md:gap-8">
            <a href="#" className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}