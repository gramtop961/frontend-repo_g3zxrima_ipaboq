import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-serif text-xl tracking-wide text-[#2b2118]">
            Neki’s Arome
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#3b2f25]/80 hover:text-[#2b2118] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Cart"
              className="relative p-2 rounded-full border border-neutral-300/70 hover:border-neutral-400 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-[#2b2118]" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-[#a47c2b] text-white rounded-full px-1.5 py-0.5">2</span>
            </button>

            <button
              className="md:hidden p-2 rounded-md border border-neutral-300/70"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-sm text-[#3b2f25] hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
