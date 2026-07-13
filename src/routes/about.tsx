import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Compass, HeartHandshake, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/lib/data";

const team = [
  { name: "Elena Marchetti", role: "Founder & CEO", avatar: "https://i.pravatar.cc/240?img=45" },
  { name: "James Whitaker", role: "Head of Ranch Partnerships", avatar: "https://i.pravatar.cc/240?img=12" },
  { name: "Amara Odili", role: "Chief Safety Officer", avatar: "https://i.pravatar.cc/240?img=32" },
  { name: "Kenji Watanabe", role: "Head of Experience Design", avatar: "https://i.pravatar.cc/240?img=68" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Horse Trails" },
      { name: "description", content: "The story, mission, and team behind the world's most curated horse riding marketplace." },
      { property: "og:image", content: "" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-saddle">About Horse Trails</div>
            <h1 className="mt-2 font-display text-4xl font-bold text-forest md:text-6xl">Built by riders, <span className="text-gradient-gold">for riders.</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Horse Trails started with a simple frustration: finding a trustworthy, beautifully run stable when travelling is nearly impossible. We spent three years personally visiting every ranch we list, and today we power tens of thousands of rides across six continents.
            </p>
          </div>
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={images.portrait} alt="" loading="lazy" className="rounded-3xl shadow-elegant" />
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "Make world-class equestrian experiences accessible to anyone, anywhere." },
            { icon: Compass, title: "Our Vision", text: "A future where every meaningful stable is one click away from a thoughtful rider." },
            { icon: HeartHandshake, title: "Our Values", text: "Horse welfare first, guide livelihoods second, revenue third — in that order." },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-3xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-forest text-forest-foreground shadow-glow"><v.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl font-bold text-forest">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Meet the team" title="Small team, big saddles" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant">
                <img src={m.avatar} alt={m.name} className="aspect-square w-full object-cover" />
                <div className="p-5">
                  <div className="font-display text-lg font-semibold text-forest">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-4 md:grid-cols-4">
          {[
            ["240+", "Vetted Ranches"],
            ["68k", "Happy Riders"],
            ["4.94", "Avg. Rating"],
            ["6", "Continents"],
          ].map(([v, l]) => (
            <div key={l} className="glass rounded-3xl p-6 text-center">
              <div className="font-display text-3xl font-bold text-forest md:text-4xl">{v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl gradient-forest p-8 md:p-14">
          <div className="flex items-center gap-2 text-gold"><Award className="h-4 w-4" /> Safety standards</div>
          <h3 className="mt-2 font-display text-3xl font-bold text-forest-foreground md:text-4xl">A rigorous standard, checked yearly.</h3>
          <p className="mt-3 max-w-2xl text-forest-foreground/75">Every partner ranch passes a 48-point inspection covering horse welfare, guide certification, equipment, insurance, and emergency response — audited annually by our in-house team.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
