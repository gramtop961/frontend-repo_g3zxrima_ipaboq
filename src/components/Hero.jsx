import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#f7f3ee] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[90vh] grid content-center">
          <div className="max-w-xl bg-white/60 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <p className="uppercase tracking-[0.3em] text-xs text-[#8a6b2f] mb-3">Unveil Your Essence</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-[#2b2118]">
              Neki’s Arome
            </h1>
            <p className="mt-4 text-[#3b2f25]/80">
              An intimate curation of perfumes, oils, and accessories that whisper luxury and linger in memory.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#a47c2b] text-white hover:bg-[#8d6a25] transition-colors">
                Explore Scents
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#a47c2b]/40 text-[#2b2118] hover:bg-white transition-colors">
                About the House
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f7f3ee] via-transparent to-transparent" />
    </section>
  );
}
