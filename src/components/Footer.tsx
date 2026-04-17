import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-3xl text-cream">Velmora</span>
              <span className="font-display text-base italic text-gold">Bowls</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Handcrafted fruit bowls, made fresh daily. A quiet ritual of taste, color, and care —
              delivered to your door.
            </p>
            <div className="mt-8 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-cream/20 p-3 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold">Order</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li><a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="hover:text-gold">Zomato</a></li>
              <li><a href="https://www.swiggy.com" target="_blank" rel="noreferrer" className="hover:text-gold">Swiggy</a></li>
              <li><a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Velmora Bowls. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Cloud Kitchen · Crafted in India</p>
        </div>
      </div>
    </footer>
  );
}
