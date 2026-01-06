'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { NucleusSection } from '@/components/home/NucleusSection';
import { AIStrategicGuidanceSection } from '@/components/home/AIStrategicGuidanceSection';
import { AIVoiceAgentsSection } from '@/components/home/AIVoiceAgentsSection';
import { AEOSection } from '@/components/home/AEOSection';
import { TeachingsSection } from '@/components/home/TeachingsSection';
import { CalendlySection } from '@/components/CalendlySection';

const heroBackground = '/assets/7b4c28ac23a4d16adf49ce5d461f26c788329d3c.png';

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      {/* Fixed Background Image for entire homepage */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
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
        <Hero />
        <NucleusSection />
        <AIStrategicGuidanceSection />
        <AIVoiceAgentsSection />
        <AEOSection />
        <TeachingsSection />
        <CalendlySection />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
