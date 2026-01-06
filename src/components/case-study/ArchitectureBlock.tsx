interface ArchitectureBlockProps {
  input: string | string[];
  processing: string | { title: string; lines: string[] };
  output: string | string[];
  caption?: string;
}

export function ArchitectureBlock({ input, processing, output, caption }: ArchitectureBlockProps) {
  // Inherit the exact body font used by Problem/Approach (whatever the page sets)
  const bodyTextStyle: React.CSSProperties = {
    fontFamily: 'inherit',
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    lineHeight: '1.57',
    color: 'var(--ink)',
    maxWidth: '32ch',
    margin: '0 auto',
  };

  const bullet = (bg: string) =>
    ({
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: bg,
      opacity: 0.7,
    }) as React.CSSProperties;

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <div className="space-y-2" style={{ fontFamily: 'inherit' }}>
          {content.map((line, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2"
              style={{ ...bodyTextStyle }}
            >
              <span className="inline-block flex-shrink-0" style={bullet('var(--ink)')} />
              <span className="flex-1 text-center">{line}</span>
            </div>
          ))}
        </div>
      );
    }
    return <p style={bodyTextStyle}>{content}</p>;
  };

  const renderProcessing = () => {
    if (typeof processing === 'string') {
      return (
        <p
          style={{
            ...bodyTextStyle,
            color: 'var(--paper)',
            fontWeight: 500,
          }}
        >
          {processing}
        </p>
      );
    }
    return (
      <div className="space-y-2" style={{ fontFamily: 'inherit' }}>
        {processing.lines.map((line, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-2"
            style={{
              fontFamily: 'inherit',
              fontSize: '14px',
              lineHeight: '22px',
              color: 'var(--paper)',
              maxWidth: '32ch',
              margin: '0 auto',
            }}
          >
            <span className="inline-block flex-shrink-0" style={bullet('var(--paper)')} />
            <span className="flex-1 text-center">{line}</span>
          </div>
        ))}
      </div>
    );
  };

  const tileLabelBase: React.CSSProperties = {
    fontFamily: 'inherit',
    fontSize: 'clamp(10px, 2vw, 12px)',
    lineHeight: '1.33',
    letterSpacing: '0.05em',
    fontWeight: 600,
    marginBottom: 'clamp(4px, 1vw, 6px)',
    textTransform: 'uppercase',
  };

  return (
    <div style={{ fontFamily: 'inherit' }}>
      {/* Outer Container */}
      <div
        className="border rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-3 sm:mb-4"
        style={{ borderColor: 'var(--blueprint)', backgroundColor: 'var(--paper)' }}
      >
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {/* Input Tile */}
          <div
            className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center text-center"
            style={{ 
              borderColor: 'var(--blueprint)', 
              backgroundColor: 'var(--paper)',
              minHeight: 'clamp(120px, 20vw, 172px)'
            }}
          >
            <div style={{ ...tileLabelBase, color: 'var(--navy)' }}>Input</div>
            <div>{renderContent(input)}</div>
          </div>

          {/* Processing Tile - inverted */}
          <div
            className="border-2 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center text-center"
            style={{ 
              backgroundColor: 'var(--navy)', 
              borderColor: 'var(--navy)',
              minHeight: 'clamp(120px, 20vw, 172px)'
            }}
          >
            <div style={{ ...tileLabelBase, color: 'var(--paper)' }}>Processing</div>
            {renderProcessing()}
          </div>

          {/* Output Tile */}
          <div
            className="border rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center text-center"
            style={{ 
              borderColor: 'var(--blueprint)', 
              backgroundColor: 'var(--paper)',
              minHeight: 'clamp(120px, 20vw, 172px)'
            }}
          >
            <div style={{ ...tileLabelBase, color: 'var(--navy)' }}>Output</div>
            <div>{renderContent(output)}</div>
          </div>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p
          className="text-center mt-3"
          style={{
            fontFamily: 'inherit',
            fontSize: '12px',
            lineHeight: '16px',
            color: 'var(--ink)',
            opacity: 0.7,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
