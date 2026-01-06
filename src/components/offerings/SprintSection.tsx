import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Compass, Rocket, CheckCircle } from 'lucide-react';

interface SprintStage {
  id: number;
  days: string;
  title: string;
  description: string;
  output: string;
  icon: React.ElementType;
}

const stages: SprintStage[] = [
  {
    id: 1,
    days: 'Day 1–5',
    title: 'Discover',
    description: 'Define AI opportunities, success metrics, and integration points.',
    output: 'Discovery brief & KPI alignment',
    icon: Search,
  },
  {
    id: 2,
    days: 'Day 6–10',
    title: 'Design',
    description: 'Architect workflows, governance models, and data pipelines.',
    output: 'Strategic AI roadmap',
    icon: Compass,
  },
  {
    id: 3,
    days: 'Day 11–17',
    title: 'Deploy',
    description: 'Implement and test working prototypes or workflows.',
    output: 'Functional MVP or pilot workflow',
    icon: Rocket,
  },
  {
    id: 4,
    days: 'Day 18–21',
    title: 'Deliver & Scale',
    description: 'Validate results, finalize documentation, and hand off governance tools.',
    output: 'Scalable playbook and go-forward roadmap',
    icon: CheckCircle,
  },
];

function SprintStageCard({ stage, index, isInView }: { stage: SprintStage; index: number; isInView: boolean }) {
  const Icon = stage.icon;
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-1 min-w-[280px]"
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Circular Icon Node */}
        <motion.div
          className="w-32 h-32 rounded-full flex items-center justify-center mb-6 backdrop-blur-md relative"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
          }}
          animate={{
            boxShadow: [
              '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
              '0 8px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.1)',
              '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <Icon className="w-12 h-12 text-white" />
        </motion.div>

        {/* Days */}
        <div 
          className="mb-2 tracking-wider text-xs text-white/60"
          style={{ 
            fontFamily: 'var(--font-display)',
          }}
        >
          {stage.days}
        </div>

        {/* Title */}
        <h3
          className="text-white mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
          }}
        >
          {stage.title}
        </h3>

        {/* Description */}
        <p
          className="text-white/70 mb-6 max-w-[280px]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}
        >
          {stage.description}
        </p>

        {/* Output */}
        <div className="pt-4 border-t border-white/10 w-full max-w-[280px]">
          <div 
            className="text-xs tracking-wider mb-2 text-white/50"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            OUTPUT
          </div>
          <p
            className="text-white/80"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
            }}
          >
            {stage.output}
          </p>
        </div>
      </div>

      {/* Connector Line (not on last item) - Desktop only */}
      {index < stages.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-[calc(50%+64px)] w-[calc(100%-128px)] h-0.5">
          <motion.div
            className="h-full origin-left"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.3))',
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          />
        </div>
      )}
    </motion.div>
  );
}

export function SprintSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const diagramRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, amount: 0.8 });
  const diagramInView = useInView(diagramRef, { once: false, amount: 0.3 });

  return (
    <section ref={containerRef} className="relative py-32 px-6 lg:px-20 overflow-hidden">
      {/* Top Text Block - BCG-inspired Two-Column Layout */}
      <motion.div
        ref={headerRef}
        className="max-w-[1400px] mx-auto mb-24"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.1',
              }}
            >
              Our 21-Day Strategic Sprint
            </h2>
          </motion.div>

          {/* Right Column - Paragraph */}
          <motion.div
            className="lg:pt-4"
            initial={{ opacity: 0, x: 30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p
              className="text-white/70"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                lineHeight: '1.8',
              }}
            >
              In just 21 days, our architects guide your team through a focused transformation sprint - aligning business objectives with actionable AI outcomes.
            </p>
            <p
              className="text-white/70 mt-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                lineHeight: '1.8',
              }}
            >
              Each sprint phase combines strategic planning, model design, and validation to accelerate adoption without sacrificing precision or governance.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Diagram Section */}
      <div ref={diagramRef} className="max-w-[1400px] mx-auto">
        {/* Connecting Line - Desktop */}
        <div 
          className="absolute top-[calc(50%+2rem)] left-0 right-0 h-0.5 hidden lg:block pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent)',
          }}
        />

        {/* Sprint Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {stages.map((stage, index) => (
            <SprintStageCard
              key={stage.id}
              stage={stage}
              index={index}
              isInView={diagramInView}
            />
          ))}
        </div>

        {/* Mobile Timeline Indicator */}
        <motion.div
          className="mt-12 lg:hidden text-center"
          initial={{ opacity: 0 }}
          animate={diagramInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p
            className="text-white/50 text-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            21-day sprint progression
          </p>
        </motion.div>
      </div>
    </section>
  );
}