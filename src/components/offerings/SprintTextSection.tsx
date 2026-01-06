import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function SprintTextSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.6 });

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-20">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: '1.15',
            color: '#fafafa',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Accelerate transformation without the noise.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="mb-12"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: '#a3a3a3',
            lineHeight: '1.5',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our consulting sprints compress months of strategy into measurable outcomes.
        </motion.p>

        {/* Main Paragraph */}
        <motion.div
          className="max-w-[780px] mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#bcbcbc',
              textAlign: 'center',
            }}
          >
            In a world where AI initiatives often lose momentum before they deliver results, our 21-Day Strategic Sprint provides a structured path from vision to validation. Each sprint phase is designed to uncover opportunities, align stakeholders, and deploy targeted pilots that prove real impact - without the bureaucracy or bloat.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#bcbcbc',
              textAlign: 'center',
            }}
          >
            Through continuous iteration and architectural precision, we help you move faster, think sharper, and scale intelligently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}