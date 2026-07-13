import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Map, List, X } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { TrailCard } from "@/components/site/TrailCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { trails } from "@/lib/data";

export const Route = createFileRoute("/trails")({
  head: () => ({
    meta: [
      { title: "All Horse Trails — Horse Trails" },
      { name: "description", content: "Browse and filter every horse riding trail on Horse Trails — by location, difficulty, price, breed, and duration." },
    ],
  }),
  component: TrailsPage,
});

const difficulties = ["Easy", "Moderate", "Challenging"] as const;
const breeds = Array.from(new Set(trails.map((t) => t.breed)));

function TrailsPage() {
  const [priceMax, setPriceMax] = useState(700);
  const [minRating, setMinRating] = useState(0);
  const [diff, setDiff] = useState<string[]>([]);
  const [breed, setBreed] = useState<string[]>([]);
  const [privateOnly, setPrivateOnly] = useState(false);
  const [instantOnly, setInstantOnly] = useState(false);
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState<"list" | "map">("list");
  const [openFilters, setOpenFilters] = useState(false);

  const filtered = useMemo(() => {
    let f = trails.filter((t) =>
      t.price <= priceMax &&
      t.rating >= minRating &&
      (diff.length === 0 || diff.includes(t.difficulty)) &&
      (breed.length === 0 || breed.includes(t.breed)) &&
      (!privateOnly || t.private) &&
      (!instantOnly || t.instant),
    );
    if (sort === "rating") f = [...f].sort((a, b) => b.rating - a.rating);
    if (sort === "price") f = [...f].sort((a, b) => a.price - b.price);
    if (sort === "newest") f = [...f].reverse();
    return f;
  }, [priceMax, minRating, diff, breed, privateOnly, instantOnly, sort]);

  const toggle = (list: string[], v: string, set: (x: string[]) => void) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const Filters = (
    <div className="space-y-6">
      <div>
        <Label className="font-display text-sm font-semibold text-forest">Max price</Label>
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>$0</span><span className="font-semibold text-forest">${priceMax}</span>
        </div>
        <Slider value={[priceMax]} onValueChange={(v) => setPriceMax(v[0])} min={50} max={700} step={10} className="mt-2" />
      </div>
      <div>
        <Label className="font-display text-sm font-semibold text-forest">Minimum rating</Label>
        <div className="mt-3 flex gap-2">
          {[0, 4, 4.5, 4.8].map((r) => (
            <button key={r} onClick={() => setMinRating(r)} className={`rounded-full border px-3 py-1 text-xs ${minRating === r ? "border-forest bg-forest text-forest-foreground" : "border-border bg-card"}`}>
              {r === 0 ? "Any" : `${r}+`}
            </button>
          ))}
        </div>
      </div>
      <FilterGroup title="Difficulty">
        {difficulties.map((d) => (
          <label key={d} className="flex items-center gap-2 text-sm">
            <Checkbox checked={diff.includes(d)} onCheckedChange={() => toggle(diff, d, setDiff)} /> {d}
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Horse breed">
        {breeds.map((b) => (
          <label key={b} className="flex items-center gap-2 text-sm">
            <Checkbox checked={breed.includes(b)} onCheckedChange={() => toggle(breed, b, setBreed)} /> {b}
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Booking">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox checked={privateOnly} onCheckedChange={(v) => setPrivateOnly(!!v)} /> Private rides only
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox checked={instantOnly} onCheckedChange={(v) => setInstantOnly(!!v)} /> Instant booking
        </label>
      </FilterGroup>
    </div>
  );

  return (
    <SiteLayout>
      <section className="container-wide">
        {/* Page header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-saddle">Horse Trails</div>
            <h1 className="mt-1 font-display text-4xl font-bold text-forest md:text-5xl">All experiences</h1>
            <p className="mt-2 text-muted-foreground">{filtered.length} trails available</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="glass flex gap-1 rounded-full p-1">
              <button onClick={() => setView("list")} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ${view === "list" ? "bg-forest text-forest-foreground" : "text-forest"}`}>
                <List className="h-4 w-4" /> List
              </button>
              <button onClick={() => setView("map")} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ${view === "map" ? "bg-forest text-forest-foreground" : "text-forest"}`}>
                <Map className="h-4 w-4" /> Map
              </button>
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-40 bg-card"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="lg:hidden" onClick={() => setOpenFilters(true)}>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="glass sticky top-28 rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-forest">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </div>
              {Filters}
            </div>
          </aside>

          <div>
            {view === "map" ? (
              <div className="glass grid h-[600px] place-items-center rounded-3xl">
                <div className="text-center">
                  <Map className="mx-auto h-10 w-10 text-forest" />
                  <div className="mt-3 font-display text-lg font-semibold text-forest">Interactive map</div>
                  <div className="text-sm text-muted-foreground">Live map view coming soon.</div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-4 flex flex-wrap gap-2">
                  {diff.map((d) => (
                    <Badge key={d} variant="outline" className="gap-1 bg-card">
                      {d} <button onClick={() => toggle(diff, d, setDiff)}><X className="h-3 w-3" /></button>
                    </Badge>
                  ))}
                </div>
                {filtered.length === 0 ? (
                  <div className="glass rounded-3xl p-16 text-center">
                    <div className="font-display text-xl font-semibold text-forest">No trails match your filters</div>
                    <p className="mt-2 text-sm text-muted-foreground">Try loosening a few filters to see more results.</p>
                  </div>
                ) : (
                  <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((t, i) => <TrailCard key={t.id} trail={t} index={i} />)}
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {openFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-forest/40" onClick={() => setOpenFilters(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} className="absolute right-0 top-0 h-full w-80 max-w-[90vw] overflow-y-auto bg-background p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="font-display text-lg font-semibold text-forest">Filters</div>
                <Button variant="ghost" size="icon" onClick={() => setOpenFilters(false)}><X className="h-4 w-4" /></Button>
              </div>
              {Filters}
              <Button className="mt-6 w-full bg-forest text-forest-foreground" onClick={() => setOpenFilters(false)}>Show {filtered.length} results</Button>
            </motion.div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button asChild variant="outline"><Link to="/">Back to home</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="font-display text-sm font-semibold text-forest">{title}</Label>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}
