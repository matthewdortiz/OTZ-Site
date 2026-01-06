interface Outcome {
  value?: string;
  headline?: string;
  title?: string;
  caption?: string;
  subtext?: string[];
}

interface OutcomeCardProps {
  outcomes: Outcome[];
}

export function OutcomeCard({ outcomes }: OutcomeCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 md:mt-10">
      {outcomes.map((outcome, index) => (
        <div 
          key={index}
          className="border rounded-xl p-4 sm:p-5 lg:p-6 flex flex-col justify-center"
          style={{ 
            borderColor: 'var(--blueprint)', 
            backgroundColor: '#ffffff',
            minHeight: 'clamp(160px, 25vw, 200px)',
            overflow: 'hidden'
          }}
        >
          {/* Legacy format with value */}
          {outcome.value && (
            <>
              <div 
                style={{ 
                  fontSize: 'clamp(24px, 4vw, 34px)',
                  lineHeight: '1.15',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--navy)',
                  marginBottom: 'clamp(6px, 1.5vw, 10px)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'none'
                }}
              >
                {outcome.value}
              </div>
              <div style={{ 
                fontSize: 'clamp(11px, 1.8vw, 14px)',
                lineHeight: '1.15',
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
                color: 'var(--ink)',
                marginBottom: 'clamp(4px, 1vw, 6px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'none'
              }}
              >
                {outcome.title}
              </div>
              <p style={{ 
                fontSize: 'clamp(10px, 1.8vw, 12px)',
                lineHeight: '1.4',
                color: 'var(--ink)',
                opacity: 0.8,
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {outcome.caption}
              </p>
            </>
          )}
          
          {/* New format with headline and subtext */}
          {outcome.headline && (
            <>
              <div style={{ 
                fontSize: 'clamp(16px, 3vw, 24px)',
                lineHeight: '1.3',
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
                color: 'var(--ink)',
                marginBottom: 'clamp(8px, 2vw, 12px)'
              }}
              >
                {outcome.headline}
              </div>
              {outcome.subtext && outcome.subtext.map((line, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    fontSize: idx === 0 ? 'clamp(13px, 2.5vw, 14px)' : 'clamp(11px, 2vw, 12px)',
                    lineHeight: idx === 0 ? '1.57' : '1.33',
                    color: 'var(--ink)',
                    opacity: 0.8,
                    marginBottom: idx < outcome.subtext!.length - 1 ? '4px' : '0'
                  }}
                >
                  {line}
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}