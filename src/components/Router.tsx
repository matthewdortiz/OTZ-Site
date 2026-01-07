'use client';

import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { OurOfferings } from './OurOfferings';
import { OfferingsPage } from './OfferingsPage';
import { CTA } from './CTA';
import { Footer } from './Footer';
import { CaseStudyHealthcare } from './CaseStudyHealthcare';
import { CaseStudyVitalOne } from './CaseStudyVitalOne';
import { CaseStudiesList } from './CaseStudiesList';
import { CaseStudyProjectManagement } from './CaseStudyProjectManagement';
import { CaseStudyInventoryOptimization } from './CaseStudyInventoryOptimization';
import { CaseStudyVoiceAgent } from './CaseStudyVoiceAgent';
import { CaseStudyDataPipeline } from './CaseStudyDataPipeline';
import { AIStrategicGuidance } from './offerings/AIStrategicGuidance';
import { AIVoiceAgents } from './offerings/AIVoiceAgents';
import { AEOSolutions } from './offerings/AEOSolutions';
import { Teachings } from './offerings/Teachings';
import { AIStrategicGuidancePage } from './home/AIStrategicGuidancePage';
import { AIVoiceAgentsPage } from './home/AIVoiceAgentsPage';
import { AEOPage } from './home/AEOPage';
import { TeachingsPage } from './home/TeachingsPage';
import { AIStrategicGuidanceSection } from './home/AIStrategicGuidanceSection';
import { AIVoiceAgentsSection } from './home/AIVoiceAgentsSection';
import { AEOSection } from './home/AEOSection';
import { TeachingsSection } from './home/TeachingsSection';
import { NucleusSection } from './home/NucleusSection';
import { CalendlySection } from './CalendlySection';

const heroBackground = '/assets/7b4c28ac23a4d16adf49ce5d461f26c788329d3c.png';

// Custom navigation event for SPA routing
export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Standalone offerings page
  if (currentPath === '/offerings' || currentPath === '/offerings/') {
    return <OfferingsPage />;
  }

  // Home child pages (direct routes)
  if (currentPath === '/ai-strategic-guidance' || currentPath === '/ai-strategic-guidance/') {
    return <AIStrategicGuidancePage />;
  }

  if (currentPath === '/ai-voice-agents' || currentPath === '/ai-voice-agents/') {
    return <AIVoiceAgentsPage />;
  }

  if (currentPath === '/aeo' || currentPath === '/aeo/') {
    return <AEOPage />;
  }

  if (currentPath === '/teachings' || currentPath === '/teachings/') {
    return <TeachingsPage />;
  }

  // Offering pages
  if (currentPath.startsWith('/offerings/ai-strategic-guidance')) {
    return <AIStrategicGuidance />;
  }

  if (currentPath.startsWith('/offerings/ai-voice-agents')) {
    return <AIVoiceAgents />;
  }

  if (currentPath.startsWith('/offerings/aeo')) {
    return <AEOSolutions />;
  }

  if (currentPath.startsWith('/offerings/teachings')) {
    return <Teachings />;
  }

  // Case studies list page
  if (currentPath === '/case-studies' || currentPath === '/case-studies/') {
    return <CaseStudiesList />;
  }

  // Smart Health Dental case study
  if (currentPath.startsWith('/case-studies/vital-one-health')) {
    return <CaseStudyVitalOne />;
  }

  // Case study detail pages
  if (currentPath.startsWith('/case-studies/healthcare') || currentPath === '/case-studies/template') {
    return <CaseStudyHealthcare />;
  }

  // Project management case study
  if (currentPath.startsWith('/case-studies/project-management')) {
    return <CaseStudyProjectManagement />;
  }

  // Inventory optimization case study
  if (currentPath.startsWith('/case-studies/inventory-optimization')) {
    return <CaseStudyInventoryOptimization />;
  }

  // Voice agent case study
  if (currentPath.startsWith('/case-studies/voice-agent')) {
    return <CaseStudyVoiceAgent />;
  }

  // Data pipeline case study
  if (currentPath.startsWith('/case-studies/data-pipeline')) {
    return <CaseStudyDataPipeline />;
  }

  // Catch-all: Default home page (handles all other paths including deep links)
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