import type { Bowl } from "@/data/bowls";

export function BowlCard({ bowl }: { bowl: Bowl }) {
  return (
    <article className="lift group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={bowl.image}
          alt={bowl.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur">
          {bowl.category}
        </span>
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-foreground">{bowl.name}</h3>
          <span className="font-display text-lg text-gold">₹{bowl.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{bowl.description}</p>
      </div>
    </article>
  );
}
