import { Quote } from 'lucide-react';

export function TestimonialSection() {
  return (
    <div className="w-full max-w-[1100px] mx-auto">
      <div
        className="relative p-12 lg:p-16 rounded-2xl backdrop-blur-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.03)',
          animation: 'fadeInUp 0.8s ease-out backwards',
        }}
      >
        <div className="relative z-10">
          {/* Quote Icon */}
          <div className="mb-8">
            <Quote className="w-16 h-16 text-white/20" />
          </div>

          {/* Testimonial Text */}
          <blockquote
            className="text-white mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              lineHeight: '1.5',
              fontStyle: 'italic',
            }}
          >
            "We replaced an entire call center shift with a single voice agent - and our customers didn't notice the difference."
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-6">
            {/* Logo placeholder */}
            <div 
              className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span
                className="text-white/40 tracking-wider"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                }}
              >
                LOGO
              </span>
            </div>

            <div>
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                }}
              >
                Sarah Chen
              </div>
              <div
                className="text-white/60"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                }}
              >
                VP of Operations, HealthFirst Partners
              </div>
            </div>
          </div>
        </div>

        {/* Stats below testimonial */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.3s backwards',
          }}
        >
          {[
            { value: '92%', label: 'Customer satisfaction' },
            { value: '65%', label: 'Cost reduction' },
            { value: '<2s', label: 'Average response time' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="text-white mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/60"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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