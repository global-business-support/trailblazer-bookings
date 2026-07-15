// import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Star, Clock, MapPin, Route as RouteIcon, Heart, Share2, Zap } from "lucide-react";
// import type { Trail } from "@/lib/data";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export function TrailCard({ trail, index = 0 }: { trail: Trail; index?: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
//       whileHover={{ y: -6 }}
//       className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant"
//     >
//       <Link to="/trails/$id" params={{ id: trail.slug }} className="block">
//         <div className="relative aspect-[4/3] overflow-hidden">
//           <img
//             src={trail.image}
//             alt={trail.name}
//             loading="lazy"
//             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//           <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
//             {trail.tags.slice(0, 2).map((t) => (
//               <Badge key={t} className="bg-gold text-gold-foreground shadow-glow">{t}</Badge>
//             ))}
//             {trail.instant && (
//               <Badge className="gap-1 bg-forest text-forest-foreground"><Zap className="h-3 w-3" />Instant</Badge>
//             )}
//           </div>
//           <div className="absolute right-3 top-3 flex gap-1.5">
//             <button onClick={(e) => e.preventDefault()} className="glass grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110">
//               <Heart className="h-4 w-4 text-forest" />
//             </button>
//             <button onClick={(e) => e.preventDefault()} className="glass grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110">
//               <Share2 className="h-4 w-4 text-forest" />
//             </button>
//           </div>
//           {trail.originalPrice && (
//             <div className="absolute bottom-3 left-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-semibold text-destructive-foreground">
//               Save ${trail.originalPrice - trail.price}
//             </div>
//           )}
//         </div>

//         <div className="p-5">
//           <div className="flex items-center justify-between gap-2">
//             <div className="flex items-center gap-1 text-sm">
//               <Star className="h-4 w-4 fill-gold text-gold" />
//               <span className="font-semibold">{trail.rating}</span>
//               <span className="text-muted-foreground">({trail.reviews})</span>
//             </div>
//             <Badge variant="outline" className="text-[10px]">{trail.difficulty}</Badge>
//           </div>
//           <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-forest">{trail.name}</h3>
//           <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
//             <MapPin className="h-3.5 w-3.5" /> {trail.location}
//           </div>
//           <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{trail.short}</p>

//           <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
//             <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{trail.duration}</span>
//             <span className="inline-flex items-center gap-1"><RouteIcon className="h-3.5 w-3.5" />{trail.distanceKm} km</span>
//             <span className="ml-auto text-forest">{trail.slots} slots</span>
//           </div>

//           <div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
//             <div>
//               <div className="flex items-baseline gap-2">
//                 <span className="font-display text-2xl font-bold text-forest">${trail.price}</span>
//                 {trail.originalPrice && (
//                   <span className="text-sm text-muted-foreground line-through">${trail.originalPrice}</span>
//                 )}
//               </div>
//               <div className="text-[11px] uppercase tracking-wider text-muted-foreground">per rider</div>
//             </div>
//             <Button size="sm" className="bg-forest text-forest-foreground hover:bg-forest/90">Book Now</Button>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MapPin,
  Route as RouteIcon,
  Heart,
  Share2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import type { Trail } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TrailCard({
  trail,
  index = 0,
}: {
  trail: Trail;
  index?: number;
}) {
  const [saved, setSaved] = useState(false);

  const handleShare = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const url = `${window.location.origin}/trails/${trail.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: trail.name,
          text: trail.short,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);
    } catch {
      // User may cancel the native share dialog.
    }
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.5,
        delay: (index % 6) * 0.05,
      }}
      whileHover={{
        y: -6,
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden",
        "rounded-[1.6rem] border border-border/70 bg-card",
        "shadow-[0_18px_55px_-30px_rgba(24,63,40,0.55)]",
        "transition-shadow duration-300 hover:shadow-[0_28px_70px_-30px_rgba(24,63,40,0.65)]",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link
          to="/trails/$id"
          params={{ id: trail.slug }}
          className="absolute inset-0"
          aria-label={`View ${trail.name}`}
        >
          <img
            src={trail.image}
            alt={trail.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex max-w-[70%] flex-wrap gap-1.5">
          {trail.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              className="border-0 bg-gold text-[10px] font-semibold text-gold-foreground shadow-glow"
            >
              {tag}
            </Badge>
          ))}

          {trail.instant && (
            <Badge className="gap-1 border-0 bg-forest text-[10px] text-forest-foreground">
              <Zap className="h-3 w-3" />
              Instant
            </Badge>
          )}
        </div>

        <div className="absolute right-3 top-3 flex gap-1.5">
          <button
            type="button"
            aria-label={
              saved
                ? "Remove from saved trails"
                : "Save trail"
            }
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setSaved((value) => !value);
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/35 bg-white/85 text-forest shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white"
          >
            <Heart
              className={cn(
                "h-4 w-4",
                saved && "fill-forest",
              )}
            />
          </button>

          <button
            type="button"
            aria-label="Share trail"
            onClick={handleShare}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/35 bg-white/85 text-forest shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {trail.originalPrice && (
          <div className="absolute bottom-3 left-3 rounded-full bg-destructive px-3 py-1 text-[11px] font-semibold text-destructive-foreground shadow-sm">
            Save ${trail.originalPrice - trail.price}
          </div>
        )}

        <div className="absolute bottom-3 right-3 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {trail.slots <= 4
            ? `Only ${trail.slots} spots left`
            : `${trail.slots} spots available`}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-gold text-gold" />

            <span className="font-semibold text-foreground">
              {trail.rating}
            </span>

            <span className="text-muted-foreground">
              ({trail.reviews})
            </span>
          </div>

          <Badge
            variant="outline"
            className="shrink-0 rounded-full px-2.5 text-[10px]"
          >
            {trail.difficulty}
          </Badge>
        </div>

        <Link
          to="/trails/$id"
          params={{ id: trail.slug }}
          className="mt-3 block"
        >
          <h3 className="font-display text-lg font-semibold leading-snug text-forest transition-colors group-hover:text-saddle">
            {trail.name}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-saddle" />
          <span className="line-clamp-1">
            {trail.location}
          </span>
        </div>

        <p className="mt-3 min-h-[40px] line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {trail.short}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-forest" />
            {trail.duration}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <RouteIcon className="h-3.5 w-3.5 text-forest" />
            {trail.distanceKm} km
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/70 pt-4">
          <div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-forest">
                ${trail.price}
              </span>

              {trail.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${trail.originalPrice}
                </span>
              )}
            </div>

            <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              per rider
            </div>
          </div>

          <Button
            size="sm"
            className="shrink-0 rounded-full bg-forest px-4 text-forest-foreground hover:bg-forest/90"
            asChild
          >
            <Link
              to="/trails/$id"
              params={{ id: trail.slug }}
            >
              Book
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}