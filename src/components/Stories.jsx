export default function Stories() {
  return (
    <section id="about" className="bg-[#f7f3ee] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-[#8a6b2f]">Our Story</p>
        <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-[#2b2118]">Crafted with love, elegance, and identity</h3>
        <p className="mt-4 text-[#3b2f25]/80 max-w-3xl mx-auto">
          Neki’s Arome was born from a devotion to scents that feel like memories—subtle, intimate, and unforgettable.
          Each bottle is a narrative: florals that glow like dawn, ambers that hum with warmth, and musks that linger like a secret.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          {["Small-batch creations", "Ethically sourced essences", "Designed for lasting presence"].map((point) => (
            <div key={point} className="p-6 rounded-2xl bg-white border border-neutral-200/70 shadow-sm">
              <p className="font-medium text-[#2b2118]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
