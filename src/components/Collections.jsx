const items = [
  {
    title: 'Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop',
    description: 'Signature blends crafted to leave an unforgettable trail.'
  },
  {
    title: 'Perfume Oils',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop',
    description: 'Concentrated oils that melt into the skin and bloom slowly.'
  },
  {
    title: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1600&auto=format&fit=crop',
    description: 'Curated pairings for the ones you cherish.'
  }
];

export default function Collections() {
  return (
    <section id="shop" className="bg-[#fcfaf7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2118]">Featured Collections</h2>
          <p className="mt-2 text-[#3b2f25]/80">Discover our most loved categories—crafted for every mood and moment.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a key={item.title} href="#" className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#2b2118]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#3b2f25]/80">{item.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#a47c2b]">
                  <span className="text-sm">Shop now</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
