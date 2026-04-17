import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import aboutCraft from "@/assets/about-craft.jpg";
import heroBowl from "@/assets/hero-bowl.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Velmora Bowls" },
      { name: "description", content: "The story of Velmora Bowls — a quiet pursuit of freshness, beauty, and craft." },
      { property: "og:title", content: "About — Velmora Bowls" },
      { property: "og:description", content: "A quiet pursuit of freshness, beauty, and craft." },
      { property: "og:image", content: aboutCraft },
      { name: "twitter:image", content: aboutCraft },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { title: "Health", text: "Bowls composed with intention — every fruit chosen for its nutrition and ripeness." },
  { title: "Aesthetics", text: "We believe how food looks shapes how it makes you feel. Every bowl is a quiet still life." },
  { title: "Quality", text: "Direct-from-farm sourcing, daily prep, zero preservatives — without compromise." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* INTRO */}
      <section className="bg-cream pb-20 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">Our Story</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground text-balance md:text-6xl">
            A quiet pursuit of <span className="italic">freshness, beauty, and craft.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Velmora was born from a simple frustration — that something as elemental as fruit had
            become an afterthought. We set out to restore its dignity, one bowl at a time.
          </p>
        </div>
      </section>

      {/* IMAGE-TEXT SPLIT 1 */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]">
            <img
              src={aboutCraft}
              alt="Chef hand-arranging fresh fruit"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Craft</span>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Composed, not assembled.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Each Velmora bowl is shaped by hand — fruit cut at the precise angle to catch the
              light, arranged with the patience of a still life. There are no machines here. Only
              chefs, knives, and quiet attention.
            </p>
            <div className="hairline mt-10 w-24" />
            <p className="mt-6 font-display text-lg italic text-foreground/80">
              "We don't make fruit bowls. We make small, edible compositions."
            </p>
          </div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</span>
            <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
              Three things, done <span className="italic text-gold">obsessively well.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title}>
                <div className="font-display text-5xl text-gold/80">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 font-display text-2xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE-TEXT SPLIT 2 */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div className="lg:order-2 overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]">
            <img
              src={heroBowl}
              alt="Velmora signature bowl"
              loading="lazy"
              width={1600}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:order-1">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Kitchen</span>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              A quiet kitchen, a careful promise.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We operate as a cloud kitchen — no walk-ins, no theater. Just a calm, refrigerated
              space where every bowl is built to order and dispatched within the hour. The result is
              the freshest fruit you'll taste outside an orchard.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
