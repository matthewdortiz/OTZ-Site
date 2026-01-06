import { Search, Workflow, BarChart3, Cpu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const agents = [
  {
    icon: Search,
    name: 'Data Discovery Agents',
    description: 'Automatically map and catalog your entire data landscape'
  },
  {
    icon: Workflow,
    name: 'System Integration Agents',
    description: 'Connect and harmonize disparate systems seamlessly'
  },
  {
    icon: BarChart3,
    name: 'Analysis & Gap Identification',
    description: 'Identify inefficiencies and optimization opportunities'
  },
  {
    icon: Cpu,
    name: 'Orchestrator Agent',
    description: 'Compile findings and generate actionable insights'
  }
];

export function CorePlatform() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isOpen) {
            // Delay the opening animation slightly for better effect
            setTimeout(() => {
              setIsOpen(true);
            }, 300);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isOpen]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-zinc-950 min-h-screen flex items-center overflow-hidden snap-start snap-always"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        {/* Header */}
        <div className="w-full text-center mb-5 sm:mb-6 md:mb-8">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 sm:mb-4 px-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Learn about OTZ's Proprietary Agentic AI Consulting Framework
          </h2>
        </div>

        {/* Content with animation */}
        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-10 bg-zinc-900/50">
            <div className="text-center mb-5 sm:mb-7 md:mb-9 lg:mb-12">
              <h3 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 md:mb-6 px-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Proprietary Agent
                <br />
                Crawler System
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
                Four specialized AI agents work in concert to understand your business from the inside out
              </p>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-zinc-700 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-zinc-800 rounded-xl group-hover:bg-zinc-700 transition-colors flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 
                          className="text-base sm:text-lg md:text-xl text-white mb-1 sm:mb-2"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {agent.name}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-400">{agent.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}