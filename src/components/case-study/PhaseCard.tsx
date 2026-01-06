interface Phase {
  phase: string;
  duration: string;
  description: string;
}

interface PhaseCardProps {
  phases: Phase[];
}

export function PhaseCard({ phases }: PhaseCardProps) {
  return (
    <div className="border rounded-lg p-4 sm:p-6" style={{ borderColor: 'var(--blueprint)', backgroundColor: '#ffffff' }}>
      <h3 className="mb-4 sm:mb-6" style={{ 
        fontSize: 'clamp(18px, 3vw, 22px)', 
        lineHeight: '1.36',
        fontWeight: 600,
        color: 'var(--ink)'
      }}>
        Implementation Phases
      </h3>
      
      <div className="space-y-4 sm:space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="flex gap-3 sm:gap-4">
            {/* Step number */}
            <div 
              className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ 
                border: '1px solid var(--navy)',
                backgroundColor: '#ffffff'
              }}
            >
              <span style={{ 
                fontFamily: 'monospace',
                fontSize: 'clamp(10px, 2vw, 12px)',
                color: 'var(--navy)',
                fontWeight: 600
              }}>
                {index + 1}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-1 sm:gap-2">
                <span style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: 500,
                  color: 'var(--ink)'
                }}>
                  {phase.phase}
                </span>
                <span style={{ 
                  fontFamily: 'monospace',
                  fontSize: 'clamp(10px, 2vw, 12px)',
                  color: '#71717a',
                  flexShrink: 0
                }}>
                  {phase.duration}
                </span>
              </div>
              <p style={{ 
                fontSize: 'clamp(13px, 2.5vw, 14px)',
                lineHeight: '1.57',
                color: '#52525b'
              }}>
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
