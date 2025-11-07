export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fcfaf7] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-serif text-xl text-[#2b2118]">Neki’s Arome</h4>
          <p className="mt-2 text-sm text-[#3b2f25]/80 max-w-sm">
            Boutique fragrances and accessories for the discerning. Delicately composed, beautifully remembered.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-[#2b2118]">Visit</h5>
          <p className="mt-2 text-sm text-[#3b2f25]/80">123 Essence Lane, Lagos</p>
          <p className="text-sm text-[#3b2f25]/80">Mon–Sat: 10am – 7pm</p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-[#2b2118]">Stay in touch</h5>
          <form className="mt-3 flex gap-2">
            <input type="email" aria-label="Email address" placeholder="Your email" className="flex-1 rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a47c2b]/30" />
            <button className="px-5 py-2.5 rounded-full bg-[#a47c2b] text-white text-sm hover:bg-[#8d6a25]">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-200/70 py-6 text-center text-xs text-[#3b2f25]/70">
        © {new Date().getFullYear()} Neki’s Arome. All rights reserved.
      </div>
    </footer>
  );
}
