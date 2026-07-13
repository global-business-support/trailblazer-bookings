import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[2rem] gradient-forest p-8 shadow-elegant md:p-14"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-saddle/30 blur-3xl" />
      <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
            <Mail className="h-3 w-3" /> Newsletter
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-forest-foreground md:text-4xl">
            Trail drops, delivered <span className="text-gradient-gold">monthly.</span>
          </h3>
          <p className="mt-3 max-w-md text-sm text-forest-foreground/70">
            Be first to the season's new rides, private ranches, and members-only pricing.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="glass-dark flex flex-col gap-2 rounded-2xl p-2 sm:flex-row">
          <Input placeholder="Your best email" className="border-0 bg-transparent text-forest-foreground placeholder:text-forest-foreground/50 focus-visible:ring-0" />
          <Button className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow">Subscribe</Button>
        </form>
      </div>
    </motion.div>
  );
}
