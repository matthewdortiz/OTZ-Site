export function CalendlySection() {
  return (
    <section 
      id="book-meeting"
      className="relative flex items-center justify-center overflow-hidden snap-start snap-always bg-black"
      style={{
        minHeight: '100vh',
        height: '100vh',
      }}
    >
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8 flex flex-col">
        <div className="text-center mb-4 sm:mb-6">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white px-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's Talk
          </h2>
          <p 
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Schedule a 30-minute conversation with our team to discuss how we can help transform your business with AI.
          </p>
        </div>
        
        {/* Calendly iframe */}
        <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto">
          <iframe
            src="https://calendly.com/mychal-otz/30min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting"
            style={{
              minHeight: '450px',
              maxHeight: '700px',
              border: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}