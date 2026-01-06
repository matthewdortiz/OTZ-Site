import { Heart, Shield, Calendar, Headphones } from 'lucide-react';

const useCases = [
  {
    icon: Heart,
    title: 'Healthcare Verification',
    description: 'HIPAA-compliant patient lookups, appointment confirmations, and insurance verification with secure multi-factor authentication.',
  },
  {
    icon: Shield,
    title: 'Insurance Intake',
    description: 'Automated policy lookups, claim status updates, and intelligent call routing to specialized departments.',
  },
  {
    icon: Calendar,
    title: 'Sales & Scheduling',
    description: 'Appointment booking, lead qualification, follow-up reminders, and calendar sync across multiple platforms.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Service',
    description: 'Handle after-hours calls with full context, escalate complex issues, and maintain conversation history across channels.',
  },
];

export function UseCasesSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Title */}
      <div className="text-center mb-3 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
        <h2
          className="text-white mb-1.5 sm:mb-3 md:mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 4vw, 3rem)',
            lineHeight: '1.2',
            textShadow: '0 2px 15px rgba(0,0,0,0.3)',
          }}
        >
          Built for Your Industry
        </h2>
        <p
          className="text-white/70 max-w-[700px] mx-auto"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          }}
        >
          Flexible voice agents that adapt to any use case
        </p>
      </div>

      {/* Use Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <div
              key={index}
              className="p-3 sm:p-6 md:p-8 lg:p-10 rounded-2xl backdrop-blur-md"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s backwards`,
              }}
            >
              {/* Icon */}
              <div 
                className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-4 md:mb-5 lg:mb-6"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              {/* Content */}
              <h3
                className="text-white mb-1 sm:mb-2 md:mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.875rem, 3vw, 1.5rem)',
                }}
              >
                {useCase.title}
              </h3>
              <p
                className="text-white/70"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.6875rem, 2vw, 1rem)',
                  lineHeight: '1.4',
                }}
              >
                {useCase.description}
              </p>
            </div>
          );
        })}
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