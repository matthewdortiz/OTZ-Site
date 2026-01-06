import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { navigateTo } from '../Router';

interface TimelineStage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
}

const stages: TimelineStage[] = [
  {
    id: 1,
    title: 'Discover',
    subtitle: 'Uncover AI opportunities',
    description: 'Through operational and data assessment, we identify high-impact AI opportunities aligned with your business objectives.',
    icon: Search,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 2,
    title: 'Design',
    subtitle: 'Architect roadmaps & KPIs',
    description: 'We design governance frameworks for measurable AI delivery, ensuring every solution integrates seamlessly with your existing infrastructure.',
    icon: Compass,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 3,
    title: 'Deliver',
    subtitle: 'Implement & validate',
    description: 'Solutions are deployed with rapid feedback loops, continuous validation, and real-time adjustments to ensure successful adoption.',
    icon: Rocket,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
  {
    id: 4,
    title: 'Scale',
    subtitle: 'Optimize for long-term ROI',
    description: 'We optimize performance metrics, ensure sustainable adoption, and establish processes for continuous improvement and growth.',
    icon: TrendingUp,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
];

function TimelineNode({ stage, index }: { stage: TimelineStage; index: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: false, amount: 0.5 });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={nodeRef}
      className="relative flex items-center gap-8 md:gap-16"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Node Circle */}
      <div className="relative flex-shrink-0">
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
          }}
          animate={isInView ? {
            boxShadow: [
              '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
              '0 8px 40px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.1)',
              '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)',
            ],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-baseline gap-3 mb-2">
          <span 
            className="text-sm tracking-wider text-white/60"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            STEP {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3
          className="text-white mb-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {stage.title}
        </h3>
        <p
          className="text-zinc-400 mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
          }}
        >
          {stage.subtitle}
        </p>
        <p
          className="text-zinc-500 max-w-xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}
        >
          {stage.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.8 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.8 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [allStagesVisible, setAllStagesVisible] = useState(false);

  useEffect(() => {
    const checkAllVisible = () => {
      if (scrollYProgress.get() > 0.7) {
        setAllStagesVisible(true);
      } else {
        setAllStagesVisible(false);
      }
    };

    const unsubscribe = scrollYProgress.on('change', checkAllVisible);
    return () => unsubscribe();
  }, [scrollYProgress]);

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
    <section ref={containerRef} className="relative py-32 px-6 lg:px-20 overflow-hidden">
      {/* Title */}
      <motion.div
        ref={titleRef}
        className="max-w-[1200px] mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: '1.2',
          }}
        >
          AI Strategic Guidance - Our Process
        </h2>
        <p
          className="text-zinc-400 max-w-2xl mx-auto"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
          }}
        >
          A proven methodology that transforms AI ambition into measurable business outcomes
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-[1200px] mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-[2px]" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <motion.div
            className="absolute top-0 left-0 w-full origin-top"
            style={{
              height: lineHeight,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5))',
              boxShadow: allStagesVisible 
                ? '0 0 15px rgba(255,255,255,0.4)'
                : '0 0 8px rgba(255,255,255,0.2)',
            }}
            transition={{ boxShadow: { duration: 1 } }}
          />
        </div>

        {/* Timeline Stages */}
        <div className="relative space-y-12 md:space-y-20">
          {stages.map((stage, index) => (
            <TimelineNode key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        ref={ctaRef}
        className="max-w-[1200px] mx-auto mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={ctaInView ? { scale: 1 } : { scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            onClick={handleContactClick}
            className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg group"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Talk to an Architect
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
        <p
          className="text-zinc-500 mt-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.95rem',
          }}
        >
          Start your transformation with a discovery session
        </p>
      </motion.div>
    </section>
  );
}