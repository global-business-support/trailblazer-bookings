import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Route as RouteIcon, Heart, Share2, Zap } from "lucide-react";
import type { Trail } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TrailCard({ trail, index = 0 }: { trail: Trail; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant"
    >
      <Link to="/trails/$id" params={{ id: trail.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={trail.image}
            alt={trail.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {trail.tags.slice(0, 2).map((t) => (
              <Badge key={t} className="bg-gold text-gold-foreground shadow-glow">{t}</Badge>
            ))}
            {trail.instant && (
              <Badge className="gap-1 bg-forest text-forest-foreground"><Zap className="h-3 w-3" />Instant</Badge>
            )}
          </div>
          <div className="absolute right-3 top-3 flex gap-1.5">
            <button onClick={(e) => e.preventDefault()} className="glass grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110">
              <Heart className="h-4 w-4 text-forest" />
            </button>
            <button onClick={(e) => e.preventDefault()} className="glass grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110">
              <Share2 className="h-4 w-4 text-forest" />
            </button>
          </div>
          {trail.originalPrice && (
            <div className="absolute bottom-3 left-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-semibold text-destructive-foreground">
              Save ${trail.originalPrice - trail.price}
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-semibold">{trail.rating}</span>
              <span className="text-muted-foreground">({trail.reviews})</span>
            </div>
            <Badge variant="outline" className="text-[10px]">{trail.difficulty}</Badge>
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-forest">{trail.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {trail.location}
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{trail.short}</p>

          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{trail.duration}</span>
            <span className="inline-flex items-center gap-1"><RouteIcon className="h-3.5 w-3.5" />{trail.distanceKm} km</span>
            <span className="ml-auto text-forest">{trail.slots} slots</span>
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-forest">${trail.price}</span>
                {trail.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">${trail.originalPrice}</span>
                )}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">per rider</div>
            </div>
            <Button size="sm" className="bg-forest text-forest-foreground hover:bg-forest/90">Book Now</Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
