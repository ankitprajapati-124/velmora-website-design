import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Velmora Bowls" },
      { name: "description", content: "Get in touch with Velmora Bowls. Order, partner, or simply say hello." },
      { property: "og:title", content: "Contact — Velmora Bowls" },
      { property: "og:description", content: "Get in touch with Velmora Bowls." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <SiteLayout>
      <section className="bg-cream pb-16 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">Contact</span>
          <h1 className="mt-6 font-display text-5xl text-foreground md:text-6xl">
            We'd love to <span className="italic">hear from you.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Questions, collaborations, or simply a hello — our table is always set.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-5 lg:gap-20 lg:px-10">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-[2rem] border border-border/60 bg-card p-8 shadow-soft md:p-12"
          >
            <h2 className="font-display text-3xl text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within a few hours.</p>

            <div className="mt-10 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-0"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-0"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-foreground/70">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-0"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-gold hover:text-gold-foreground hover:shadow-[var(--shadow-luxe)]"
            >
              {sent ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>

          {/* DETAILS */}
          <aside className="lg:col-span-2 space-y-8">
            <div className="rounded-[2rem] bg-forest p-8 text-cream md:p-10">
              <h3 className="font-display text-2xl text-cream">Cloud Kitchen</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                We operate from a single, dedicated cloud kitchen — no storefront, only fresh
                deliveries.
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-gold" size={18} strokeWidth={1.25} />
                  <span className="text-cream/85">
                    Velmora Cloud Kitchen<br />
                    Indiranagar, Bangalore — 560038
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-gold" size={18} strokeWidth={1.25} />
                  <span className="text-cream/85">+91 00000 00000</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-gold" size={18} strokeWidth={1.25} />
                  <span className="text-cream/85">hello@velmorabowls.com</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="lift flex items-center justify-between gap-4 rounded-[2rem] border border-gold/40 bg-card p-6 shadow-soft md:p-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">WhatsApp</p>
                <p className="mt-2 font-display text-xl text-foreground">Chat with us</p>
                <p className="mt-1 text-xs text-muted-foreground">Quickest way to order or ask</p>
              </div>
              <div className="rounded-full bg-foreground p-4 text-background">
                <MessageCircle size={22} strokeWidth={1.5} />
              </div>
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
