import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { BowlCard } from "@/components/BowlCard";
import { bowls, categories } from "@/data/bowls";
import bowl1 from "@/assets/bowl-1.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Velmora Bowls" },
      { name: "description", content: "Explore our full menu of handcrafted exotic, protein, classic, and detox fruit bowls." },
      { property: "og:title", content: "Menu — Velmora Bowls" },
      { property: "og:description", content: "25+ handcrafted fruit bowls, made fresh daily." },
      { property: "og:image", content: bowl1 },
      { name: "twitter:image", content: bowl1 },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? bowls : bowls.filter((b) => b.category === active)),
    [active],
  );

  return (
    <SiteLayout>
      <section className="bg-cream pb-10 pt-36 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">The Menu</span>
          <h1 className="mt-6 font-display text-5xl text-foreground md:text-6xl">
            A curated collection of <span className="italic">freshness</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Twenty-five handcrafted bowls, composed each morning with seasonal fruit and quiet
            precision.
          </p>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 glass">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 py-5 lg:px-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                active === c
                  ? "bg-foreground text-background shadow-soft"
                  : "border border-border/60 text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((b) => (
              <BowlCard key={b.id} bowl={b} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
