import { Header } from '../Header';
import { Footer } from '../Footer';
import { WaveformHero } from './voice-agent/WaveformHero';
import { ProblemSection } from './voice-agent/ProblemSection';
import { SolutionOverview } from './voice-agent/SolutionOverview';
import { ArchitectureDiagram } from './voice-agent/ArchitectureDiagram';
import { UseCasesSection } from './voice-agent/UseCasesSection';
import { LiveDemoSection } from './voice-agent/LiveDemoSection';
import { IntegrationsSection } from './voice-agent/IntegrationsSection';
import { CTAFooter } from './voice-agent/CTAFooter';

const backgroundImage = '/assets/95c4037445dcaa360a4f346fa42047eb05b64685.webp';

export function AIVoiceAgents() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay to ensure readability */}
      <div className="fixed inset-0 z-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
        {/* Scroll Snap Container */}
        <div
          style={{
            scrollSnapType: 'y mandatory',
            overflowY: 'scroll',
            height: 'calc(100dvh - 64px)',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Panel 1: Hero Section with Waveform Animation */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <WaveformHero />
          </section>

          {/* Panel 2: Problem Section - Chaos vs Clarity */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <ProblemSection />
          </section>

          {/* Panel 3: Solution Overview - What the Agent Does */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <SolutionOverview />
          </section>

          {/* Panel 4: Architecture Diagram - How It Works */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <ArchitectureDiagram />
          </section>

          {/* Panel 5: Use Cases - Industry Applications */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <UseCasesSection />
          </section>

          {/* Panel 6: Live Demo Section - Call the Agent */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <LiveDemoSection />
          </section>

          {/* Panel 7: Integrations - Partner Logos */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <IntegrationsSection />
          </section>

          {/* Panel 8: CTA Footer - Final Conversion Push */}
          <section
            className="flex items-center justify-center px-3 sm:px-6 lg:px-20 pb-16 sm:pb-0"
            style={{
              minHeight: '100dvh',
              height: '100dvh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <CTAFooter />
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}