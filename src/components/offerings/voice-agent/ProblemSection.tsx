import { PhoneOff, CheckCircle2 } from 'lucide-react';

export function ProblemSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Copy */}
      <div className="text-center mb-4 sm:mb-8 md:mb-12 max-w-[900px] mx-auto px-2">
        <p
          className="text-white/80"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.875rem, 3vw, 2rem)',
            lineHeight: '1.4',
          }}
        >
          Most customer calls end with hold music, missed follow-ups, or human fatigue. 
          AI voice agents eliminate these limits - delivering instant, scalable, and consistent support.
        </p>
      </div>

      {/* Split-Screen Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-16">
        {/* Left: Problem */}
        <div
          className="relative p-4 sm:p-8 md:p-10 rounded-2xl backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
          }}
        >
          <div className="relative z-10">
            <PhoneOff className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500 mb-3 sm:mb-6" />
            <h3
              className="text-white mb-2 sm:mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 4vw, 1.75rem)',
              }}
            >
              Traditional Support
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                'Long hold times & dropped calls',
                'Limited availability (9-5 only)',
                'Inconsistent quality across reps',
                'High turnover & training costs',
                'Manual logging & follow-ups',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 sm:gap-3 text-white/60 text-xs sm:text-base"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="text-white/40 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Solution */}
        <div
          className="relative p-4 sm:p-8 md:p-10 rounded-2xl backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 30px rgba(255,255,255,0.05)',
            animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
          }}
        >
          <div className="relative z-10">
            <CheckCircle2 className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-500 mb-3 sm:mb-6" />
            <h3
              className="text-white mb-2 sm:mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 4vw, 1.75rem)',
              }}
            >
              AI Voice Agents
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                'Instant answer, zero hold time',
                'Available 24/7/365',
                'Perfect consistency every call',
                'Scales infinitely with demand',
                'Automatic logging & CRM updates',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 sm:gap-3 text-white/90 text-xs sm:text-base"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="text-white mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
      `}</style>
    </div>
  );
}