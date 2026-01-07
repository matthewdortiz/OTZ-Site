import { ImageWithFallback } from '../../figma/ImageWithFallback';

const twilioLogo = '/assets/ea9866c85a7705215272294de8f712103cdcb9aa.webp';
const slackLogo = '/assets/b86ffa2b5af09e9147d66baa0c87a7a09b300c15.webp';
const salesforceLogo = '/assets/cb7b816fae03a389d4279c5b785817fc48076788.webp';
const openaiLogo = '/assets/09c6c860ada4518b871edf760c1524b061c59503.webp';
const googleWorkspaceLogo = '/assets/cc002106dcbee5fbba49ab6ce66c80de2f5c932d.webp';
const hubspotLogo = '/assets/13a7092c9bee9564fbfb74056c720c9c06c4895b.webp';

const integrations = [
  { 
    name: 'Twilio', 
    logo: twilioLogo
  },
  { 
    name: 'Slack', 
    logo: slackLogo
  },
  { 
    name: 'Salesforce', 
    logo: salesforceLogo
  },
  { 
    name: 'OpenAI', 
    logo: openaiLogo
  },
  { 
    name: 'Google Workspace', 
    logo: googleWorkspaceLogo
  },
  { 
    name: 'HubSpot', 
    logo: hubspotLogo
  },
];

export function IntegrationsSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-12">
        <h2
          className="text-white mb-2 sm:mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 4vw, 3rem)',
            lineHeight: '1.2',
            textShadow: '0 2px 15px rgba(0,0,0,0.3)',
          }}
        >
          Integrates with Your Stack
        </h2>
        <p
          className="text-white/70 max-w-[600px] mx-auto px-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.8125rem, 2vw, 1.125rem)',
          }}
        >
          Pre-built connectors for the platforms you already use
        </p>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="group relative p-4 sm:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`,
            }}
          >
            {/* Logo */}
            <div className="relative w-full h-12 sm:h-20 flex items-center justify-center">
              <ImageWithFallback
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="max-w-[120px] sm:max-w-[160px] max-h-10 sm:max-h-16 object-contain group-hover:scale-110 transition-transform"
                style={integration.name === 'OpenAI' ? { filter: 'brightness(0) invert(1)' } : {}}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom text */}
      <div 
        className="text-center mt-6 sm:mt-12"
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.8s backwards',
        }}
      >
        <p
          className="text-white/50"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          }}
        >
          + Many More
        </p>
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
      `}</style>
    </div>
  );
}