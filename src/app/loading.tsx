export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          OTZ Group
        </div>
        <div className="mt-4 text-zinc-400 text-sm">Loading...</div>
      </div>
    </div>
  )
}
