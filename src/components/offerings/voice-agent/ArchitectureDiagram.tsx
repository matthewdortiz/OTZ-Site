import { Phone, Workflow, Database, CheckCircle2 } from 'lucide-react';

const nodes = [
  {
    id: 1,
    icon: Phone,
    title: 'Customer Call',
    description: 'Incoming voice interaction',
  },
  {
    id: 2,
    icon: Workflow,
    title: 'Voice Agent',
    description: 'NLU/NLG processing & routing',
  },
  {
    id: 3,
    icon: Database,
    title: 'Workflow Engine',
    description: 'n8n / logic orchestration',
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: 'CRM / Database',
    description: 'Data sync & outcomes',
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Title */}
      <div className="text-center mb-4 sm:mb-10 md:mb-12 px-2">
        <h2
          className="text-white mb-2 sm:mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 4vw, 3rem)',
            lineHeight: '1.2',
            textShadow: '0 2px 15px rgba(0,0,0,0.3)',
          }}
        >
          How It Works
        </h2>
        <p
          className="text-white/70 max-w-[700px] mx-auto text-xs sm:text-base"
          style={{
            fontFamily: 'var(--font-display)',
          }}
        >
          Seamless integration from customer interaction to business outcome
        </p>
      </div>

      {/* Horizontal Flow Diagram */}
      <div className="relative">
        {/* Connecting Line */}
        <div 
          className="absolute top-16 left-0 right-0 h-0.5 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent)',
            animation: 'flowLine 3s ease-in-out infinite',
          }}
        />

        {/* Desktop: Horizontal Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-6">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.2}s backwards`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md relative"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '2px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                      animation: `pulse 3s ease-in-out infinite ${index * 0.5}s`,
                    }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {node.title}
                  </h3>
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {node.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Vertical Stack */}
        <div className="lg:hidden space-y-4 sm:space-y-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s backwards`,
                }}
              >
                {/* Vertical connector line */}
                {index < nodes.length - 1 && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5"
                    style={{
                      bottom: '-1rem',
                      height: '1rem',
                      background: 'rgba(255,255,255,0.2)',
                    }}
                  />
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-2 sm:mb-4 backdrop-blur-md"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '2px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
                      animation: `pulse 3s ease-in-out infinite ${index * 0.5}s`,
                    }}
                  >
                    <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3
                    className="text-white mb-1 sm:mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                    }}
                  >
                    {node.title}
                  </h3>
                  <p
                    className="text-white/70 text-xs sm:text-base px-2 sm:px-4"
                    style={{
                      fontFamily: 'var(--font-display)',
                      lineHeight: '1.4',
                    }}
                  >
                    {node.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05);
          }
          50% {
            box-shadow: 0 8px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.1);
          }
        }

        @keyframes flowLine {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}