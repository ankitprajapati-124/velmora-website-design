import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-1">
          <span className="font-display text-2xl tracking-tight text-foreground">Velmora</span>
          <span className="font-display text-sm italic text-gold">Bowls</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://www.zomato.com"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-gold/60 bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-background transition-all hover:bg-gold hover:text-gold-foreground md:inline-block"
        >
          Order Now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-4 rounded-2xl border border-border/60 bg-background/95 p-6 shadow-soft md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-[0.18em] text-foreground/80"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-background"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
