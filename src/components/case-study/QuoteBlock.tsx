interface QuoteBlockProps {
  text: string;
  name: string;
  org: string;
}

export function QuoteBlock({ text, name, org }: QuoteBlockProps) {
  return (
    <blockquote 
      className="border-l-4 pl-6 md:pl-8 py-4"
      style={{ borderColor: 'var(--navy)' }}
    >
      <p className="text-2xl md:text-3xl" style={{ 
        lineHeight: '1.29',
        fontWeight: 600,
        color: 'var(--ink)',
        marginBottom: '16px',
        fontFamily: 'var(--font-display)'
      }}>
        "{text}"
      </p>
      <div>
        <div style={{ 
          fontSize: '16px',
          lineHeight: '26px',
          fontWeight: 500,
          color: 'var(--ink)'
        }}>
          {name}
        </div>
        <div style={{ 
          fontSize: '14px',
          lineHeight: '22px',
          color: '#71717a'
        }}>
          {org}
        </div>
      </div>
    </blockquote>
  );
}