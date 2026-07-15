// import { useNavigate } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Calendar, Users, Baby, Route, Clock, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";

// export function SearchWidget({ compact = false }: { compact?: boolean }) {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [adults, setAdults] = useState("2");
//   const [children, setChildren] = useState("0");
//   const [type, setType] = useState("");
//   const [duration, setDuration] = useState("");

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3, duration: 0.6 }}
//       onSubmit={(e) => {
//         e.preventDefault();
//         const params = new URLSearchParams({ location, date, adults, children, type, duration });
//         navigate({ to: "/trails", search: Object.fromEntries(params) as never });
//       }}
//       className={`glass rounded-3xl p-4 shadow-elegant md:p-6 ${compact ? "" : ""}`}
//     >
//       <div className="grid gap-3 md:grid-cols-6">
//         <Field icon={<MapPin className="h-4 w-4" />} label="Location">
//           <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Aspen, Big Sur..." className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0" />
//         </Field>
//         <Field icon={<Calendar className="h-4 w-4" />} label="Date">
//           <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0" />
//         </Field>
//         <Field icon={<Users className="h-4 w-4" />} label="Adults">
//           <Select value={adults} onValueChange={setAdults}>
//             <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0"><SelectValue /></SelectTrigger>
//             <SelectContent>{[1,2,3,4,5,6,7,8].map(n => <SelectItem key={n} value={String(n)}>{n} Adult{n>1?"s":""}</SelectItem>)}</SelectContent>
//           </Select>
//         </Field>
//         <Field icon={<Baby className="h-4 w-4" />} label="Children">
//           <Select value={children} onValueChange={setChildren}>
//             <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0"><SelectValue /></SelectTrigger>
//             <SelectContent>{[0,1,2,3,4,5].map(n => <SelectItem key={n} value={String(n)}>{n} Child{n===1?"":"ren"}</SelectItem>)}</SelectContent>
//           </Select>
//         </Field>
//         <Field icon={<Route className="h-4 w-4" />} label="Trail Type">
//           <Select value={type} onValueChange={setType}>
//             <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0"><SelectValue placeholder="Any" /></SelectTrigger>
//             <SelectContent>
//               {["Sunrise","Sunset","Family","Couple","Kids","Safari","Trekking","Camping"].map(t => <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>)}
//             </SelectContent>
//           </Select>
//         </Field>
//         <Field icon={<Clock className="h-4 w-4" />} label="Duration">
//           <Select value={duration} onValueChange={setDuration}>
//             <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0"><SelectValue placeholder="Any" /></SelectTrigger>
//             <SelectContent>
//               <SelectItem value="1">Up to 1 hour</SelectItem>
//               <SelectItem value="3">Half day</SelectItem>
//               <SelectItem value="6">Full day</SelectItem>
//               <SelectItem value="24">Overnight</SelectItem>
//             </SelectContent>
//           </Select>
//         </Field>
//       </div>
//       <Button type="submit" className="mt-4 w-full gap-2 bg-forest text-forest-foreground shadow-glow hover:bg-forest/90 md:h-12 md:text-base">
//         <Search className="h-4 w-4" /> Search Trails
//       </Button>
//     </motion.form>
//   );
// }

// function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
//   return (
//     <div className="rounded-2xl border border-border/60 bg-card/60 px-4 py-2.5">
//       <Label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
//         <span className="text-forest">{icon}</span> {label}
//       </Label>
//       <div className="mt-1">{children}</div>
//     </div>
//   );
// }
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Baby,
  Route,
  Clock,
  Search,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function SearchWidget({
  compact = false,
}: {
  compact?: boolean;
}) {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const search: Record<string, string> = {};

    if (location.trim()) {
      search.location = location.trim();
    }

    if (date) {
      search.date = date;
    }

    if (adults) {
      search.adults = adults;
    }

    if (children) {
      search.children = children;
    }

    if (type) {
      search.type = type;
    }

    if (duration) {
      search.duration = duration;
    }

    navigate({
      to: "/trails",
      search: search as never,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
        duration: 0.55,
      }}
      onSubmit={handleSubmit}
      className={cn(
        "relative overflow-visible rounded-[1.75rem] border border-white/70",
        "bg-ivory/95 p-3 shadow-[0_25px_70px_-30px_rgba(24,63,40,0.55)]",
        "backdrop-blur-2xl sm:p-4",
        compact && "rounded-2xl",
      )}
    >
      <div
        className={cn(
          "grid gap-3",
          compact
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        )}
      >
        <Field
          icon={<MapPin className="h-4 w-4" />}
          label="Location"
        >
          <Input
            value={location}
            onChange={(event) =>
              setLocation(event.target.value)
            }
            placeholder="Aspen, Big Sur..."
            className="h-7 border-0 bg-transparent p-0 text-sm shadow-none placeholder:text-muted-foreground/70 focus-visible:ring-0"
          />
        </Field>

        <Field
          icon={<Calendar className="h-4 w-4" />}
          label="Date"
        >
          <Input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="h-7 border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
          />
        </Field>

        <Field
          icon={<Users className="h-4 w-4" />}
          label="Adults"
        >
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger className="h-7 border-0 bg-transparent p-0 text-sm shadow-none focus:ring-0">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="z-[200]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <SelectItem
                  key={number}
                  value={String(number)}
                >
                  {number} Adult{number > 1 ? "s" : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          icon={<Baby className="h-4 w-4" />}
          label="Children"
        >
          <Select
            value={children}
            onValueChange={setChildren}
          >
            <SelectTrigger className="h-7 border-0 bg-transparent p-0 text-sm shadow-none focus:ring-0">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="z-[200]">
              {[0, 1, 2, 3, 4, 5].map((number) => (
                <SelectItem
                  key={number}
                  value={String(number)}
                >
                  {number}{" "}
                  {number === 1 ? "Child" : "Children"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          icon={<Route className="h-4 w-4" />}
          label="Trail Type"
        >
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="h-7 border-0 bg-transparent p-0 text-sm shadow-none focus:ring-0">
              <SelectValue placeholder="Any trail" />
            </SelectTrigger>

            <SelectContent className="z-[200]">
              {[
                "Sunrise",
                "Sunset",
                "Family",
                "Couple",
                "Kids",
                "Safari",
                "Trekking",
                "Camping",
              ].map((trailType) => (
                <SelectItem
                  key={trailType}
                  value={trailType.toLowerCase()}
                >
                  {trailType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          icon={<Clock className="h-4 w-4" />}
          label="Duration"
        >
          <Select
            value={duration}
            onValueChange={setDuration}
          >
            <SelectTrigger className="h-7 border-0 bg-transparent p-0 text-sm shadow-none focus:ring-0">
              <SelectValue placeholder="Any duration" />
            </SelectTrigger>

            <SelectContent className="z-[200]">
              <SelectItem value="1">
                Up to 1 hour
              </SelectItem>

              <SelectItem value="3">
                Half day
              </SelectItem>

              <SelectItem value="6">
                Full day
              </SelectItem>

              <SelectItem value="24">
                Overnight
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Button
        type="submit"
        className={cn(
          "mt-3 h-12 w-full gap-2 rounded-2xl bg-forest",
          "text-sm font-semibold text-forest-foreground",
          "shadow-[0_12px_30px_-14px_rgba(24,63,40,0.65)]",
          "transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90",
          !compact && "sm:text-base",
        )}
      >
        <Search className="h-4 w-4" />
        Search Trails
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </motion.form>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl border border-border/70",
        "bg-card/80 px-4 py-3 transition-all duration-200",
        "hover:border-forest/25 hover:bg-card",
        "focus-within:border-forest/35 focus-within:ring-2 focus-within:ring-forest/10",
      )}
    >
      <Label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span className="text-forest">{icon}</span>
        {label}
      </Label>

      <div className="mt-1 min-w-0">{children}</div>
    </div>
  );
}