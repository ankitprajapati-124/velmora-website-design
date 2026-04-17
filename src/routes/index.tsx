import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BowlCard } from "@/components/BowlCard";
import { bowls } from "@/data/bowls";
import { Leaf, Sparkles, HandHeart, Truck, Instagram } from "lucide-react";
import heroBowl from "@/assets/hero-bowl.jpg";
import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";
import bowl4 from "@/assets/bowl-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velmora Bowls — Savor the Art of Fresh" },
      { name: "description", content: "A luxury cloud kitchen crafting handcrafted fruit bowls, fresh daily. Order on Zomato & Swiggy." },
      { property: "og:title", content: "Velmora Bowls — Savor the Art of Fresh" },
      { property: "og:description", content: "Handcrafted, premium fruit bowls delivered fresh daily." },
      { property: "og:image", content: heroBowl },
      { name: "twitter:image", content: heroBowl },
    ],
  }),
  component: HomePage,
});

const usps = [
  { icon: Leaf, title: "Farm-Fresh, Daily", text: "Sourced at dawn, served by noon. Every fruit hand-picked at peak ripeness." },
  { icon: HandHeart, title: "Handcrafted Artistry", text: "Each bowl is plated with intention by our culinary artisans." },
  { icon: Sparkles, title: "Pure & Pristine", text: "No preservatives. No shortcuts. Only what nature intended." },
  { icon: Truck, title: "Delivered with Care", text: "Temperature-controlled, sealed, and at your door within the hour." },
];

const testimonials = [
  { quote: "Velmora has redefined what a fruit bowl can be. It feels like a gift, every single time.", name: "Aanya M.", role: "Mumbai" },
  { quote: "The presentation, the freshness, the restraint — it's the most thoughtful breakfast in the city.", name: "Rohan S.", role: "Bangalore" },
  { quote: "I've been ordering daily for a month. It's become my quiet morning ritual.", name: "Priya K.", role: "Delhi" },
];

function HomePage() {
  const featured = bowls.slice(0, 4);
  const gallery = [heroBowl, bowl1, bowl2, bowl3, bowl4, heroBowl];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cream" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-36 md:pt-44 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-32">
          <div className="flex flex-col justify-center" style={{ animation: "fade-up 1s ease-out both" }}>
            <span className="text-xs uppercase tracking-[0.35em] text-gold">Luxury Cloud Kitchen</span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground text-balance md:text-6xl lg:text-7xl">
              Savor the Art<br />
              <span className="italic text-gold/90">of Fresh</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Handcrafted fruit bowls, made fresh daily — composed with the patience of a chef and the
              elegance of a still life.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-gold hover:text-gold-foreground hover:shadow-[var(--shadow-luxe)]"
              >
                Order on Zomato
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-gold hover:text-gold"
              >
                Order on Swiggy
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="hairline w-16" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Trusted by 10,000+ guests
              </p>
            </div>
          </div>

          <div className="relative" style={{ animation: "fade-in 1.4s ease-out both" }}>
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-gold/20 to-transparent blur-3xl" />
            <div className="overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-luxe)]">
              <img
                src={heroBowl}
                alt="Premium handcrafted Velmora fruit bowl"
                width={1600}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/60 bg-background/90 px-6 py-4 shadow-soft backdrop-blur md:block">
              <p className="font-display text-sm italic text-foreground/80">"A quiet ritual of taste."</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">Vogue India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BOWLS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Signature Bowls</span>
              <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                Our most loved <span className="italic">creations</span>
              </h2>
            </div>
            <Link
              to="/menu"
              className="text-xs uppercase tracking-[0.25em] text-foreground/70 underline-offset-8 hover:text-gold hover:underline"
            >
              View Full Menu →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((b) => (
              <BowlCard key={b.id} bowl={b} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY VELMORA */}
      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why Velmora</span>
            <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
              Quietly obsessed with <span className="italic text-gold">every detail.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
            {usps.map((u) => (
              <div key={u.title} className="bg-forest p-8 lg:p-10">
                <u.icon className="text-gold" size={28} strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-xl text-cream">{u.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">In Their Words</span>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Loved by the <span className="italic">discerning</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft"
              >
                <div className="text-3xl text-gold">"</div>
                <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border/60 pt-5">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">@velmorabowls</span>
              <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                Follow the <span className="italic">ritual</span>
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-gold md:inline-flex"
            >
              <Instagram size={14} /> Instagram
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            {gallery.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={src}
                  alt="Velmora Bowls Instagram"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-colors duration-500 group-hover:bg-forest/40">
                  <Instagram className="text-cream opacity-0 transition-opacity group-hover:opacity-100" size={22} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
