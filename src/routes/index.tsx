// // // // import { createFileRoute, Link } from "@tanstack/react-router";
// // // // import { motion } from "framer-motion";
// // // // import { ArrowRight, Award, Shield, Sparkles, Users } from "lucide-react";
// // // // import { SiteLayout } from "@/components/site/Layout";
// // // // import { SearchWidget } from "@/components/site/SearchWidget";
// // // // import { CategoryGrid } from "@/components/site/CategoryGrid";
// // // // import { TrailCard } from "@/components/site/TrailCard";
// // // // import { SectionHeading } from "@/components/site/SectionHeading";
// // // // import { Testimonials } from "@/components/site/Testimonials";
// // // // import { InstagramGallery } from "@/components/site/InstagramGallery";
// // // // import { FAQAccordion } from "@/components/site/FAQAccordion";
// // // // import { Newsletter } from "@/components/site/Newsletter";
// // // // import { Button } from "@/components/ui/button";
// // // // import { images, trails } from "@/lib/data";

// // // // export const Route = createFileRoute("/")({
// // // //   component: Home,
// // // // });

// // // // function Home() {
// // // //   const popular = trails.slice(0, 6);
// // // //   const featured = trails.slice(2, 6);
// // // //   const topRated = [...trails].sort((a, b) => b.rating - a.rating).slice(0, 4);

// // // //   return (
// // // //     <SiteLayout>
// // // //       {/* HERO */}
// // // //       <section className="container-wide relative">
// // // //         <div className="relative overflow-hidden rounded-[2.5rem] shadow-elegant">
// // // //           <img src={images.hero} alt="Horse riding at sunrise" width={1920} height={1200} className="h-[85vh] max-h-[820px] w-full object-cover" />
// // // //           <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/10 to-ivory/95" />
// // // //           <div className="absolute inset-0 flex flex-col justify-center">
// // // //             <div className="container-wide">
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.7 }}
// // // //                 className="max-w-2xl"
// // // //               >
// // // //                 <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
// // // //                   <Sparkles className="h-3.5 w-3.5" /> Premium Equestrian Marketplace
// // // //                 </div>
// // // //                 <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-white drop-shadow-lg md:text-7xl">
// // // //                   Ride where the <span className="text-gradient-gold">wild ones</span> live.
// // // //                 </h1>
// // // //                 <p className="mt-5 max-w-xl text-lg text-white/90 drop-shadow">
// // // //                   Curated horse riding experiences across six continents — sunrise ridges, private beaches, and safari plains, all in one place.
// // // //                 </p>
// // // //                 <div className="mt-8 flex flex-wrap gap-3">
// // // //                   <Button asChild size="lg" className="bg-gold text-gold-foreground shadow-glow hover:bg-gold/90">
// // // //                     <Link to="/trails">Explore Trails <ArrowRight className="ml-2 h-4 w-4" /></Link>
// // // //                   </Button>
// // // //                   <Button asChild size="lg" variant="outline" className="border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white">
// // // //                     <Link to="/about">Our Story</Link>
// // // //                   </Button>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Search widget overlapping hero */}
// // // //         <div className="relative z-10 -mt-16 md:-mt-20">
// // // //           <SearchWidget />
// // // //         </div>
// // // //       </section>

// // // //       {/* TRUST STRIP */}
// // // //       <section className="container-wide mt-16">
// // // //         <div className="glass grid gap-6 rounded-3xl p-6 sm:grid-cols-2 md:grid-cols-4 md:p-8">
// // // //           {[
// // // //             { icon: Award, label: "Vetted Ranches", value: "240+" },
// // // //             { icon: Users, label: "Happy Riders", value: "68k" },
// // // //             { icon: Shield, label: "Insured Rides", value: "100%" },
// // // //             { icon: Sparkles, label: "Avg. Rating", value: "4.94" },
// // // //           ].map((s, i) => (
// // // //             <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-4">
// // // //               <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-gold text-gold-foreground shadow-glow">
// // // //                 <s.icon className="h-5 w-5" />
// // // //               </div>
// // // //               <div>
// // // //                 <div className="font-display text-2xl font-bold text-forest">{s.value}</div>
// // // //                 <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* CATEGORIES */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading
// // // //           eyebrow="Explore by style"
// // // //           title="A trail for every rider"
// // // //           subtitle="From gentle first canters to overnight camps, choose the pace and mood that fits your journey."
// // // //         />
// // // //         <CategoryGrid />
// // // //       </section>

// // // //       {/* POPULAR TRAILS */}
// // // //       <section className="container-wide mt-24">
// // // //         <div className="flex items-end justify-between gap-4">
// // // //           <SectionHeading
// // // //             align="left"
// // // //             eyebrow="Most booked"
// // // //             title="Popular horse trails"
// // // //             subtitle="Rider favourites from around the world, refreshed every week."
// // // //           />
// // // //           <Button asChild variant="ghost" className="hidden gap-2 text-forest md:inline-flex">
// // // //             <Link to="/trails">View all <ArrowRight className="h-4 w-4" /></Link>
// // // //           </Button>
// // // //         </div>
// // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // // //           {popular.map((t, i) => <TrailCard key={t.id} trail={t} index={i} />)}
// // // //         </div>
// // // //       </section>

// // // //       {/* FEATURED EXPERIENCES — editorial split */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading eyebrow="Editor's picks" title="Featured experiences" subtitle="Signature rides handpicked by our senior guides." />
// // // //         <div className="grid gap-6 lg:grid-cols-2">
// // // //           {featured.map((t, i) => (
// // // //             <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
// // // //               <Link to="/trails/$id" params={{ id: t.slug }} className="group relative flex overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant">
// // // //                 <div className="relative aspect-[4/3] w-2/5 overflow-hidden">
// // // //                   <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
// // // //                 </div>
// // // //                 <div className="flex flex-1 flex-col justify-between p-5">
// // // //                   <div>
// // // //                     <div className="text-xs uppercase tracking-wider text-saddle">{t.category}</div>
// // // //                     <h3 className="mt-1 font-display text-xl font-semibold text-forest">{t.name}</h3>
// // // //                     <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{t.short}</p>
// // // //                   </div>
// // // //                   <div className="mt-4 flex items-center justify-between">
// // // //                     <div className="font-display text-xl font-bold text-forest">${t.price}<span className="text-xs font-normal text-muted-foreground">/rider</span></div>
// // // //                     <div className="rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-forest-foreground">Book</div>
// // // //                   </div>
// // // //                 </div>
// // // //               </Link>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* TOP RATED HORSES */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading eyebrow="Top rated" title="Horses our riders adore" subtitle="Every horse on Horse Trails is individually reviewed after every ride." />
// // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // // //           {topRated.map((t, i) => <TrailCard key={t.id} trail={t} index={i} />)}
// // // //         </div>
// // // //       </section>

// // // //       {/* ADVENTURE PACKAGES — luxe banner */}
// // // //       <section className="container-wide mt-24">
// // // //         <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
// // // //           <img src={images.t7} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
// // // //           <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
// // // //           <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-16">
// // // //             <div>
// // // //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
// // // //                 Luxury Packages
// // // //               </div>
// // // //               <h3 className="mt-4 font-display text-4xl font-bold text-forest-foreground md:text-5xl">
// // // //                 Overnight adventures, <span className="text-gradient-gold">stitched together.</span>
// // // //               </h3>
// // // //               <p className="mt-4 max-w-lg text-forest-foreground/80">
// // // //                 Multi-day rides with canvas camps, private chefs, and the world's most photogenic ranches. Add flights, transfers, and photography with a single click.
// // // //               </p>
// // // //               <Button asChild size="lg" className="mt-6 bg-gold text-gold-foreground shadow-glow hover:bg-gold/90">
// // // //                 <Link to="/packages">Discover packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
// // // //               </Button>
// // // //             </div>
// // // //             <div className="grid grid-cols-2 gap-3">
// // // //               {[images.t4, images.t8, images.t7, images.t5].map((img, i) => (
// // // //                 <img key={i} src={img} alt="" loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-elegant" />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* TESTIMONIALS */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading eyebrow="Rider stories" title="Loved by riders worldwide" />
// // // //         <Testimonials />
// // // //       </section>

// // // //       {/* INSTAGRAM */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading eyebrow="@horsetrails" title="From the saddle to the feed" subtitle="Follow along and tag #HorseTrails for a chance to be featured." />
// // // //         <InstagramGallery />
// // // //       </section>

// // // //       {/* FAQ */}
// // // //       <section className="container-wide mt-24">
// // // //         <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
// // // //         <FAQAccordion />
// // // //       </section>

// // // //       {/* NEWSLETTER */}
// // // //       <section className="container-wide mt-24">
// // // //         <Newsletter />
// // // //       </section>
// // // //     </SiteLayout>
// // // //   );
// // // // }
// // // import { createFileRoute, Link } from "@tanstack/react-router";
// // // import { motion } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   Award,
// // //   Shield,
// // //   Sparkles,
// // //   Users,
// // //   Star,
// // // } from "lucide-react";
// // // import { SiteLayout } from "@/components/site/Layout";
// // // import { SearchWidget } from "@/components/site/SearchWidget";
// // // import { CategoryGrid } from "@/components/site/CategoryGrid";
// // // import { TrailCard } from "@/components/site/TrailCard";
// // // import { SectionHeading } from "@/components/site/SectionHeading";
// // // import { Testimonials } from "@/components/site/Testimonials";
// // // import { InstagramGallery } from "@/components/site/InstagramGallery";
// // // import { FAQAccordion } from "@/components/site/FAQAccordion";
// // // import { Newsletter } from "@/components/site/Newsletter";
// // // import { Button } from "@/components/ui/button";
// // // import { images, trails } from "@/lib/data";

// // // export const Route = createFileRoute("/")({
// // //   component: Home,
// // // });

// // // function Home() {
// // //   const popular = trails.slice(0, 6);
// // //   const featured = trails.slice(2, 6);

// // //   const topRated = [...trails]
// // //     .sort((a, b) => b.rating - a.rating)
// // //     .slice(0, 4);

// // //   return (
// // //     <SiteLayout>
// // //       {/* HERO */}
// // //       <section className="container-wide">
// // //         <div className="relative min-h-[650px] overflow-hidden rounded-[2rem] shadow-elegant sm:min-h-[700px] md:rounded-[2.5rem] lg:min-h-[760px]">
// // //           <img
// // //             src={images.hero}
// // //             alt="Horse riding at sunrise"
// // //             width={1920}
// // //             height={1200}
// // //             fetchPriority="high"
// // //             className="absolute inset-0 h-full w-full object-cover object-center"
// // //           />

// // //           <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/45 to-transparent" />
// // //           <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-black/10" />

// // //           <div className="relative flex min-h-[650px] items-center px-5 pb-32 pt-16 sm:min-h-[700px] sm:px-8 md:px-12 lg:min-h-[760px] lg:px-16">
// // //             <motion.div
// // //               initial={{
// // //                 opacity: 0,
// // //                 y: 24,
// // //               }}
// // //               animate={{
// // //                 opacity: 1,
// // //                 y: 0,
// // //               }}
// // //               transition={{
// // //                 duration: 0.7,
// // //               }}
// // //               className="max-w-[760px]"
// // //             >
// // //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-xl sm:text-xs">
// // //                 <Sparkles className="h-3.5 w-3.5" />
// // //                 Premium Equestrian Marketplace
// // //               </div>

// // //               <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.98] tracking-tight text-white drop-shadow-lg">
// // //                 Ride where the{" "}
// // //                 <span className="text-gradient-gold">
// // //                   wilderness
// // //                 </span>{" "}
// // //                 lives.
// // //               </h1>

// // //               <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 drop-shadow sm:text-lg md:text-xl">
// // //                 Curated horse riding experiences across six
// // //                 continents — sunrise ridges, private beaches,
// // //                 and safari plains, all in one place.
// // //               </p>

// // //               <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
// // //                 <Button
// // //                   asChild
// // //                   size="lg"
// // //                   className="h-12 rounded-full bg-gold px-7 text-gold-foreground shadow-glow hover:bg-gold/90"
// // //                 >
// // //                   <Link to="/trails">
// // //                     Explore Trails
// // //                     <ArrowRight className="ml-2 h-4 w-4" />
// // //                   </Link>
// // //                 </Button>

// // //                 <Button
// // //                   asChild
// // //                   size="lg"
// // //                   variant="outline"
// // //                   className="h-12 rounded-full border-white/60 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
// // //                 >
// // //                   <Link to="/about">Our Story</Link>
// // //                 </Button>
// // //               </div>

// // //               <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
// // //                 <div className="flex -space-x-2">
// // //                   {[images.t1, images.t2, images.t3].map(
// // //                     (image, index) => (
// // //                       <img
// // //                         key={index}
// // //                         src={image}
// // //                         alt=""
// // //                         className="h-9 w-9 rounded-full border-2 border-white object-cover"
// // //                       />
// // //                     ),
// // //                   )}
// // //                 </div>

// // //                 <div>
// // //                   <div className="flex items-center gap-1 text-gold">
// // //                     {Array.from({ length: 5 }).map(
// // //                       (_, index) => (
// // //                         <Star
// // //                           key={index}
// // //                           className="h-3.5 w-3.5 fill-current"
// // //                         />
// // //                       ),
// // //                     )}
// // //                   </div>

// // //                   <div className="mt-0.5 text-xs">
// // //                     Trusted by 68,000+ riders
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>

// // //         <div className="relative z-20 mx-auto -mt-24 max-w-[1180px] px-2 sm:-mt-20 sm:px-4">
// // //           <SearchWidget />
// // //         </div>
// // //       </section>

// // //       {/* TRUST STRIP */}
// // //       <section className="container-wide section-space">
// // //         <div className="grid gap-4 rounded-[1.75rem] border border-forest/10 bg-ivory/75 p-5 shadow-elegant backdrop-blur-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:p-8">
// // //           {[
// // //             {
// // //               icon: Award,
// // //               label: "Vetted Ranches",
// // //               value: "240+",
// // //             },
// // //             {
// // //               icon: Users,
// // //               label: "Happy Riders",
// // //               value: "68k",
// // //             },
// // //             {
// // //               icon: Shield,
// // //               label: "Insured Rides",
// // //               value: "100%",
// // //             },
// // //             {
// // //               icon: Sparkles,
// // //               label: "Average Rating",
// // //               value: "4.94",
// // //             },
// // //           ].map((item, index) => (
// // //             <motion.div
// // //               key={item.label}
// // //               initial={{
// // //                 opacity: 0,
// // //                 y: 14,
// // //               }}
// // //               whileInView={{
// // //                 opacity: 1,
// // //                 y: 0,
// // //               }}
// // //               viewport={{
// // //                 once: true,
// // //               }}
// // //               transition={{
// // //                 delay: index * 0.06,
// // //               }}
// // //               className="flex items-center gap-4 rounded-2xl p-2"
// // //             >
// // //               <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-gold text-gold-foreground shadow-glow">
// // //                 <item.icon className="h-5 w-5" />
// // //               </div>

// // //               <div>
// // //                 <div className="font-display text-2xl font-bold text-forest">
// // //                   {item.value}
// // //                 </div>

// // //                 <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
// // //                   {item.label}
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* CATEGORIES */}
// // //       <section className="container-wide section-space">
// // //         <SectionHeading
// // //           eyebrow="Explore by style"
// // //           title="A trail for every rider"
// // //           subtitle="From gentle first canters to overnight camps, choose the pace and mood that fits your journey."
// // //         />

// // //         <CategoryGrid />
// // //       </section>

// // //       {/* POPULAR TRAILS */}
// // //       <section className="container-wide section-space">
// // //         <div className="flex items-end justify-between gap-5">
// // //           <SectionHeading
// // //             align="left"
// // //             eyebrow="Most booked"
// // //             title="Popular horse trails"
// // //             subtitle="Rider favourites from around the world, refreshed every week."
// // //           />

// // //           <Button
// // //             asChild
// // //             variant="ghost"
// // //             className="hidden shrink-0 gap-2 rounded-full text-forest hover:bg-cream md:inline-flex"
// // //           >
// // //             <Link to="/trails">
// // //               View all
// // //               <ArrowRight className="h-4 w-4" />
// // //             </Link>
// // //           </Button>
// // //         </div>

// // //         <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // //           {popular.map((trail, index) => (
// // //             <TrailCard
// // //               key={trail.id}
// // //               trail={trail}
// // //               index={index}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="mt-6 md:hidden">
// // //           <Button
// // //             asChild
// // //             variant="outline"
// // //             className="w-full rounded-full"
// // //           >
// // //             <Link to="/trails">
// // //               View all trails
// // //               <ArrowRight className="ml-2 h-4 w-4" />
// // //             </Link>
// // //           </Button>
// // //         </div>
// // //       </section>

// // //       {/* FEATURED EXPERIENCES */}
// // //       <section className="section-space">
// // //         <div className="container-wide">
// // //           <div className="overflow-hidden rounded-[2rem] bg-forest px-5 py-10 shadow-elegant sm:px-8 md:px-10 md:py-14">
// // //             <SectionHeading
// // //               eyebrow="Editor's picks"
// // //               title="Featured experiences"
// // //               subtitle="Signature rides handpicked by our senior guides."
// // //               light
// // //             />

// // //             <div className="grid gap-5 lg:grid-cols-2">
// // //               {featured.map((trail, index) => (
// // //                 <motion.div
// // //                   key={trail.id}
// // //                   initial={{
// // //                     opacity: 0,
// // //                     y: 20,
// // //                   }}
// // //                   whileInView={{
// // //                     opacity: 1,
// // //                     y: 0,
// // //                   }}
// // //                   viewport={{
// // //                     once: true,
// // //                   }}
// // //                   transition={{
// // //                     delay: index * 0.06,
// // //                   }}
// // //                 >
// // //                   <Link
// // //                     to="/trails/$id"
// // //                     params={{ id: trail.slug }}
// // //                     className="group grid h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-[42%_1fr]"
// // //                   >
// // //                     <div className="relative min-h-[220px] overflow-hidden sm:min-h-[290px]">
// // //                       <img
// // //                         src={trail.image}
// // //                         alt={trail.name}
// // //                         loading="lazy"
// // //                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //                       />

// // //                       <div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
// // //                     </div>

// // //                     <div className="flex flex-col justify-between p-5 sm:p-6">
// // //                       <div>
// // //                         <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
// // //                           {trail.category}
// // //                         </div>

// // //                         <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
// // //                           {trail.name}
// // //                         </h3>

// // //                         <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
// // //                           {trail.short}
// // //                         </p>
// // //                       </div>

// // //                       <div className="mt-6 flex items-end justify-between gap-4">
// // //                         <div>
// // //                           <span className="font-display text-2xl font-bold text-white">
// // //                             ${trail.price}
// // //                           </span>

// // //                           <span className="ml-1 text-xs text-white/60">
// // //                             /rider
// // //                           </span>
// // //                         </div>

// // //                         <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-gold-foreground">
// // //                           View ride
// // //                           <ArrowRight className="h-3.5 w-3.5" />
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   </Link>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* TOP RATED */}
// // //       <section className="container-wide section-space">
// // //         <SectionHeading
// // //           eyebrow="Top rated"
// // //           title="Horses our riders adore"
// // //           subtitle="Every horse on Horse Trails is individually reviewed after every ride."
// // //         />

// // //         <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // //           {topRated.map((trail, index) => (
// // //             <TrailCard
// // //               key={trail.id}
// // //               trail={trail}
// // //               index={index}
// // //             />
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ADVENTURE PACKAGES */}
// // //       <section className="container-wide section-space">
// // //         <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
// // //           <img
// // //             src={images.t7}
// // //             alt="Luxury overnight horse riding package"
// // //             loading="lazy"
// // //             className="absolute inset-0 h-full w-full object-cover"
// // //           />

// // //           <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/50" />

// // //           <div className="relative grid gap-10 p-6 sm:p-8 md:grid-cols-2 md:p-12 lg:p-16">
// // //             <div className="self-center">
// // //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
// // //                 Luxury Packages
// // //               </div>

// // //               <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-forest-foreground sm:text-4xl lg:text-5xl">
// // //                 Overnight adventures,{" "}
// // //                 <span className="text-gradient-gold">
// // //                   stitched together.
// // //                 </span>
// // //               </h3>

// // //               <p className="mt-5 max-w-lg text-sm leading-relaxed text-forest-foreground/75 sm:text-base">
// // //                 Multi-day rides with canvas camps, private
// // //                 chefs, and the world's most photogenic
// // //                 ranches. Add flights, transfers, and
// // //                 photography with a single click.
// // //               </p>

// // //               <Button
// // //                 asChild
// // //                 size="lg"
// // //                 className="mt-7 rounded-full bg-gold px-7 text-gold-foreground shadow-glow hover:bg-gold/90"
// // //               >
// // //                 <Link to="/packages">
// // //                   Discover packages
// // //                   <ArrowRight className="ml-2 h-4 w-4" />
// // //                 </Link>
// // //               </Button>
// // //             </div>

// // //             <div className="grid grid-cols-2 gap-3">
// // //               {[images.t4, images.t8, images.t7, images.t5].map(
// // //                 (image, index) => (
// // //                   <img
// // //                     key={index}
// // //                     src={image}
// // //                     alt=""
// // //                     loading="lazy"
// // //                     className="aspect-square w-full rounded-2xl border border-white/15 object-cover shadow-elegant"
// // //                   />
// // //                 ),
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* TESTIMONIALS */}
// // //       <section className="container-wide section-space">
// // //         <SectionHeading
// // //           eyebrow="Rider stories"
// // //           title="Loved by riders worldwide"
// // //         />

// // //         <Testimonials />
// // //       </section>

// // //       {/* INSTAGRAM */}
// // //       <section className="container-wide section-space">
// // //         <SectionHeading
// // //           eyebrow="@horsetrails"
// // //           title="From the saddle to the feed"
// // //           subtitle="Follow along and tag #HorseTrails for a chance to be featured."
// // //         />

// // //         <InstagramGallery />
// // //       </section>

// // //       {/* FAQ */}
// // //       <section className="container-wide section-space">
// // //         <SectionHeading
// // //           eyebrow="Good to know"
// // //           title="Frequently asked questions"
// // //         />

// // //         <FAQAccordion />
// // //       </section>

// // //       {/* NEWSLETTER */}
// // //       <section className="container-wide section-space pb-8">
// // //         <Newsletter />
// // //       </section>
// // //     </SiteLayout>
// // //   );
// // // }
// // @import "tailwindcss" source(none);
// // @source "../src";
// // @import "tw-animate-css";

// // @custom-variant dark (&:is(.dark *));

// // @theme inline {
// //   --font-display: "Poppins", "Inter", ui-sans-serif, system-ui, sans-serif;
// //   --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

// //   --radius-sm: calc(var(--radius) - 4px);
// //   --radius-md: calc(var(--radius) - 2px);
// //   --radius-lg: var(--radius);
// //   --radius-xl: calc(var(--radius) + 6px);
// //   --radius-2xl: calc(var(--radius) + 12px);
// //   --radius-3xl: calc(var(--radius) + 20px);

// //   --color-background: var(--background);
// //   --color-foreground: var(--foreground);

// //   --color-card: var(--card);
// //   --color-card-foreground: var(--card-foreground);

// //   --color-popover: var(--popover);
// //   --color-popover-foreground: var(--popover-foreground);

// //   --color-primary: var(--primary);
// //   --color-primary-foreground: var(--primary-foreground);

// //   --color-secondary: var(--secondary);
// //   --color-secondary-foreground: var(--secondary-foreground);

// //   --color-muted: var(--muted);
// //   --color-muted-foreground: var(--muted-foreground);

// //   --color-accent: var(--accent);
// //   --color-accent-foreground: var(--accent-foreground);

// //   --color-destructive: var(--destructive);
// //   --color-destructive-foreground: var(--destructive-foreground);

// //   --color-border: var(--border);
// //   --color-input: var(--input);
// //   --color-ring: var(--ring);

// //   --color-forest: var(--forest);
// //   --color-forest-foreground: var(--forest-foreground);

// //   --color-saddle: var(--saddle);
// //   --color-saddle-foreground: var(--saddle-foreground);

// //   --color-cream: var(--cream);
// //   --color-ivory: var(--ivory);

// //   --color-gold: var(--gold);
// //   --color-gold-foreground: var(--gold-foreground);
// // }

// // :root {
// //   --radius: 1rem;

// //   --forest: oklch(0.32 0.06 155);
// //   --forest-foreground: oklch(0.98 0.01 90);

// //   --saddle: oklch(0.42 0.09 55);
// //   --saddle-foreground: oklch(0.98 0.01 90);

// //   --cream: oklch(0.965 0.02 85);
// //   --ivory: oklch(0.99 0.008 90);

// //   --gold: oklch(0.78 0.14 82);
// //   --gold-foreground: oklch(0.25 0.05 60);

// //   --background: oklch(0.975 0.015 85);
// //   --foreground: oklch(0.22 0.03 150);

// //   --card: oklch(1 0.005 90);
// //   --card-foreground: oklch(0.22 0.03 150);

// //   --popover: oklch(1 0.005 90);
// //   --popover-foreground: oklch(0.22 0.03 150);

// //   --primary: oklch(0.32 0.06 155);
// //   --primary-foreground: oklch(0.98 0.01 90);

// //   --secondary: oklch(0.42 0.09 55);
// //   --secondary-foreground: oklch(0.98 0.01 90);

// //   --muted: oklch(0.93 0.02 85);
// //   --muted-foreground: oklch(0.45 0.03 140);

// //   --accent: oklch(0.78 0.14 82);
// //   --accent-foreground: oklch(0.25 0.05 60);

// //   --destructive: oklch(0.55 0.22 27);
// //   --destructive-foreground: oklch(0.98 0.01 90);

// //   --border: oklch(0.88 0.02 85);
// //   --input: oklch(0.9 0.02 85);
// //   --ring: oklch(0.78 0.14 82);
// // }

// // .dark {
// //   --background: oklch(0.16 0.02 150);
// //   --foreground: oklch(0.96 0.02 85);

// //   --card: oklch(0.22 0.03 150);
// //   --card-foreground: oklch(0.96 0.02 85);

// //   --popover: oklch(0.22 0.03 150);
// //   --popover-foreground: oklch(0.96 0.02 85);

// //   --primary: oklch(0.78 0.14 82);
// //   --primary-foreground: oklch(0.22 0.03 150);

// //   --secondary: oklch(0.28 0.05 155);
// //   --secondary-foreground: oklch(0.96 0.02 85);

// //   --muted: oklch(0.24 0.03 150);
// //   --muted-foreground: oklch(0.72 0.02 90);

// //   --accent: oklch(0.78 0.14 82);
// //   --accent-foreground: oklch(0.22 0.03 150);

// //   --border: oklch(1 0 0 / 12%);
// //   --input: oklch(1 0 0 / 18%);
// //   --ring: oklch(0.78 0.14 82);

// //   --forest: oklch(0.42 0.08 155);
// //   --forest-foreground: oklch(0.98 0.01 90);

// //   --cream: oklch(0.28 0.04 90);
// //   --ivory: oklch(0.24 0.03 90);
// // }

// // @layer base {
// //   * {
// //     border-color: var(--border);
// //   }

// //   html {
// //     scroll-behavior: smooth;
// //     scroll-padding-top: 120px;
// //     overflow-x: hidden;
// //   }

// //   body {
// //     min-width: 320px;
// //     min-height: 100vh;
// //     overflow-x: hidden;
// //     background-color: var(--background);
// //     color: var(--foreground);
// //     font-family: var(--font-sans);
// //     -webkit-font-smoothing: antialiased;
// //     text-rendering: optimizeLegibility;

// //     background-image:
// //       radial-gradient(
// //         1200px 500px at 10% -10%,
// //         color-mix(in oklab, var(--gold) 12%, transparent),
// //         transparent 60%
// //       ),
// //       radial-gradient(
// //         900px 500px at 100% 10%,
// //         color-mix(in oklab, var(--forest) 10%, transparent),
// //         transparent 55%
// //       );

// //     background-attachment: fixed;
// //   }

// //   h1,
// //   h2,
// //   h3,
// //   h4,
// //   h5 {
// //     font-family: var(--font-display);
// //     letter-spacing: -0.02em;
// //   }

// //   img {
// //     display: block;
// //     max-width: 100%;
// //   }

// //   button,
// //   input,
// //   textarea,
// //   select,
// //   a {
// //     -webkit-tap-highlight-color: transparent;
// //   }

// //   ::selection {
// //     background-color: color-mix(in oklab, var(--gold) 55%, transparent);
// //     color: var(--foreground);
// //   }
// // }

// // @layer utilities {
// //   .container-wide {
// //     width: 100%;
// //     max-width: 1320px;
// //     margin-left: auto;
// //     margin-right: auto;
// //     padding-left: 1rem;
// //     padding-right: 1rem;
// //   }

// //   .section-space {
// //     margin-top: 5rem;
// //   }

// //   .glass {
// //     background-color: color-mix(in oklab, var(--ivory) 78%, transparent);
// //     backdrop-filter: blur(20px) saturate(140%);
// //     -webkit-backdrop-filter: blur(20px) saturate(140%);
// //     border: 1px solid color-mix(in oklab, var(--forest) 10%, transparent);
// //     box-shadow: 0 12px 42px -24px color-mix(in oklab, var(--forest) 35%, transparent);
// //   }

// //   .glass-dark {
// //     background-color: color-mix(in oklab, oklch(0.2 0.03 150) 58%, transparent);
// //     backdrop-filter: blur(24px) saturate(160%);
// //     -webkit-backdrop-filter: blur(24px) saturate(160%);
// //     border: 1px solid color-mix(in oklab, var(--gold) 25%, transparent);
// //   }

// //   .gradient-forest {
// //     background-image: linear-gradient(
// //       135deg,
// //       var(--forest) 0%,
// //       color-mix(in oklab, var(--forest) 60%, var(--saddle)) 100%
// //     );
// //   }

// //   .gradient-gold {
// //     background-image: linear-gradient(
// //       135deg,
// //       var(--gold) 0%,
// //       color-mix(in oklab, var(--gold) 60%, var(--saddle)) 100%
// //     );
// //   }

// //   .text-gradient-gold {
// //     background-image: linear-gradient(
// //       135deg,
// //       var(--gold),
// //       color-mix(in oklab, var(--gold) 40%, var(--saddle))
// //     );
// //     background-clip: text;
// //     -webkit-background-clip: text;
// //     color: transparent;
// //   }

// //   .shadow-elegant {
// //     box-shadow: 0 20px 60px -20px color-mix(in oklab, var(--forest) 35%, transparent);
// //   }

// //   .shadow-glow {
// //     box-shadow: 0 10px 40px -10px color-mix(in oklab, var(--gold) 45%, transparent);
// //   }

// //   .no-scrollbar {
// //     scrollbar-width: none;
// //   }

// //   .no-scrollbar::-webkit-scrollbar {
// //     display: none;
// //   }
// // }

// // input[type="date"]::-webkit-calendar-picker-indicator {
// //   cursor: pointer;
// //   opacity: 0.65;
// // }

// // .dark input[type="date"]::-webkit-calendar-picker-indicator {
// //   filter: invert(1);
// // }

// // @media (min-width: 640px) {
// //   .container-wide {
// //     padding-left: 1.25rem;
// //     padding-right: 1.25rem;
// //   }
// // }

// // @media (min-width: 768px) {
// //   .container-wide {
// //     padding-left: 2rem;
// //     padding-right: 2rem;
// //   }

// //   .section-space {
// //     margin-top: 6rem;
// //   }
// // }

// // @media (min-width: 1024px) {
// //   .section-space {
// //     margin-top: 7rem;
// //   }
// // }

// // @media (max-width: 767px) {
// //   body {
// //     background-attachment: scroll;
// //   }
// // }

// // @media (prefers-reduced-motion: reduce) {
// //   html {
// //     scroll-behavior: auto;
// //   }

// //   *,
// //   *::before,
// //   *::after {
// //     animation-duration: 0.01ms !important;
// //     animation-iteration-count: 1 !important;
// //     transition-duration: 0.01ms !important;
// //     scroll-behavior: auto !important;
// //   }
// // }
// @import "tailwindcss";
// @import "tw-animate-css";

// @custom-variant dark (&:is(.dark *));

// :root {
//   --background: #fbf8ef;
//   --foreground: #21382b;
//   --card: #ffffff;
//   --card-foreground: #21382b;
//   --popover: #ffffff;
//   --popover-foreground: #21382b;
//   --primary: #234b34;
//   --primary-foreground: #ffffff;
//   --secondary: #805933;
//   --secondary-foreground: #ffffff;
//   --muted: #f1ecdf;
//   --muted-foreground: #66756b;
//   --accent: #e3ad36;
//   --accent-foreground: #322611;
//   --destructive: #dc2626;
//   --destructive-foreground: #ffffff;
//   --border: #e1dacb;
//   --input: #e1dacb;
//   --ring: #d8a32c;

//   --forest: #234b34;
//   --forest-foreground: #ffffff;
//   --saddle: #805933;
//   --saddle-foreground: #ffffff;
//   --cream: #f6efdf;
//   --ivory: #fffdf7;
//   --gold: #e3ad36;
//   --gold-foreground: #322611;
// }

// .dark {
//   --background: #17221b;
//   --foreground: #f8f4e9;
//   --card: #223128;
//   --card-foreground: #f8f4e9;
//   --popover: #223128;
//   --popover-foreground: #f8f4e9;
//   --primary: #d9aa42;
//   --primary-foreground: #17221b;
//   --secondary: #344c3c;
//   --secondary-foreground: #f8f4e9;
//   --muted: #293a30;
//   --muted-foreground: #b8c2ba;
//   --accent: #d9aa42;
//   --accent-foreground: #17221b;
//   --border: rgba(255, 255, 255, 0.12);
//   --input: rgba(255, 255, 255, 0.16);
//   --ring: #d9aa42;

//   --forest: #416d50;
//   --forest-foreground: #ffffff;
//   --cream: #334237;
//   --ivory: #253229;
// }

// @theme inline {
//   --font-display: "Poppins", "Inter", sans-serif;
//   --font-sans: "Inter", sans-serif;

//   --color-background: var(--background);
//   --color-foreground: var(--foreground);
//   --color-card: var(--card);
//   --color-card-foreground: var(--card-foreground);
//   --color-popover: var(--popover);
//   --color-popover-foreground: var(--popover-foreground);
//   --color-primary: var(--primary);
//   --color-primary-foreground: var(--primary-foreground);
//   --color-secondary: var(--secondary);
//   --color-secondary-foreground: var(--secondary-foreground);
//   --color-muted: var(--muted);
//   --color-muted-foreground: var(--muted-foreground);
//   --color-accent: var(--accent);
//   --color-accent-foreground: var(--accent-foreground);
//   --color-destructive: var(--destructive);
//   --color-destructive-foreground: var(--destructive-foreground);
//   --color-border: var(--border);
//   --color-input: var(--input);
//   --color-ring: var(--ring);

//   --color-forest: var(--forest);
//   --color-forest-foreground: var(--forest-foreground);
//   --color-saddle: var(--saddle);
//   --color-saddle-foreground: var(--saddle-foreground);
//   --color-cream: var(--cream);
//   --color-ivory: var(--ivory);
//   --color-gold: var(--gold);
//   --color-gold-foreground: var(--gold-foreground);
// }

// @layer base {
//   * {
//     border-color: var(--border);
//   }

//   html {
//     scroll-behavior: smooth;
//     scroll-padding-top: 120px;
//     overflow-x: hidden;
//   }

//   body {
//     margin: 0;
//     min-width: 320px;
//     min-height: 100vh;
//     overflow-x: hidden;
//     background-color: var(--background);
//     color: var(--foreground);
//     font-family: var(--font-sans);
//     -webkit-font-smoothing: antialiased;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     font-family: var(--font-display);
//     letter-spacing: -0.02em;
//   }

//   img {
//     display: block;
//     max-width: 100%;
//   }
// }

// @layer utilities {
//   .container-wide {
//     width: 100%;
//     max-width: 1320px;
//     margin-inline: auto;
//     padding-inline: 1rem;
//   }

//   .section-space {
//     margin-top: 5rem;
//   }

//   .glass {
//     background: rgba(255, 253, 247, 0.88);
//     border: 1px solid rgba(35, 75, 52, 0.1);
//     backdrop-filter: blur(20px);
//     -webkit-backdrop-filter: blur(20px);
//     box-shadow: 0 14px 45px -24px rgba(35, 75, 52, 0.45);
//   }

//   .dark .glass {
//     background: rgba(37, 50, 41, 0.88);
//   }

//   .glass-dark {
//     background: rgba(20, 40, 28, 0.65);
//     border: 1px solid rgba(227, 173, 54, 0.25);
//     backdrop-filter: blur(20px);
//     -webkit-backdrop-filter: blur(20px);
//   }

//   .gradient-forest {
//     background-image: linear-gradient(135deg, #234b34, #52603e);
//   }

//   .gradient-gold {
//     background-image: linear-gradient(135deg, #e3ad36, #b87831);
//   }

//   .text-gradient-gold {
//     background-image: linear-gradient(135deg, #f0bd45, #bc7c32);
//     background-clip: text;
//     -webkit-background-clip: text;
//     color: transparent;
//   }

//   .shadow-elegant {
//     box-shadow: 0 20px 60px -20px rgba(35, 75, 52, 0.38);
//   }

//   .shadow-glow {
//     box-shadow: 0 10px 40px -10px rgba(227, 173, 54, 0.48);
//   }

//   .no-scrollbar {
//     scrollbar-width: none;
//   }

//   .no-scrollbar::-webkit-scrollbar {
//     display: none;
//   }
// }

// @media (min-width: 640px) {
//   .container-wide {
//     padding-inline: 1.25rem;
//   }
// }

// @media (min-width: 768px) {
//   .container-wide {
//     padding-inline: 2rem;
//   }

//   .section-space {
//     margin-top: 6rem;
//   }
// }

// @media (min-width: 1024px) {
//   .section-space {
//     margin-top: 7rem;
//   }
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Shield,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SearchWidget } from "@/components/site/SearchWidget";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { TrailCard } from "@/components/site/TrailCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Newsletter } from "@/components/site/Newsletter";
import { Button } from "@/components/ui/button";
import { images, trails } from "@/lib/data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const popular = trails.slice(0, 6);
  const featured = trails.slice(2, 6);

  const topRated = [...trails]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-wide">
        <div className="relative min-h-[650px] overflow-hidden rounded-[2rem] shadow-elegant sm:min-h-[700px] md:rounded-[2.5rem] lg:min-h-[760px]">
          <img
            src={images.hero}
            alt="Horse riding at sunrise"
            width={1920}
            height={1200}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-black/10" />

          <div className="relative flex min-h-[650px] items-center px-5 pb-32 pt-16 sm:min-h-[700px] sm:px-8 md:px-12 lg:min-h-[760px] lg:px-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="max-w-[760px]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-forest/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-xl sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Premium Equestrian Marketplace
              </div>

              <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.98] tracking-tight text-white drop-shadow-lg">
                Ride where the{" "}
                <span className="text-gradient-gold">
                  wilderness
                </span>{" "}
                lives.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 drop-shadow sm:text-lg md:text-xl">
                Curated horse riding experiences across six
                continents — sunrise ridges, private beaches,
                and safari plains, all in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-gold px-7 text-gold-foreground shadow-glow hover:bg-gold/90"
                >
                  <Link to="/trails">
                    Explore Trails
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/60 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
                >
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex -space-x-2">
                  {[images.t1, images.t2, images.t3].map(
                    (image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-white object-cover"
                      />
                    ),
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="h-3.5 w-3.5 fill-current"
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-0.5 text-xs">
                    Trusted by 68,000+ riders
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-24 max-w-[1180px] px-2 sm:-mt-20 sm:px-4">
          <SearchWidget />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="container-wide section-space">
        <div className="grid gap-4 rounded-[1.75rem] border border-forest/10 bg-ivory/75 p-5 shadow-elegant backdrop-blur-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:p-8">
          {[
            {
              icon: Award,
              label: "Vetted Ranches",
              value: "240+",
            },
            {
              icon: Users,
              label: "Happy Riders",
              value: "68k",
            },
            {
              icon: Shield,
              label: "Insured Rides",
              value: "100%",
            },
            {
              icon: Sparkles,
              label: "Average Rating",
              value: "4.94",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.06,
              }}
              className="flex items-center gap-4 rounded-2xl p-2"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-gold text-gold-foreground shadow-glow">
                <item.icon className="h-5 w-5" />
              </div>

              <div>
                <div className="font-display text-2xl font-bold text-forest">
                  {item.value}
                </div>

                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-wide section-space">
        <SectionHeading
          eyebrow="Explore by style"
          title="A trail for every rider"
          subtitle="From gentle first canters to overnight camps, choose the pace and mood that fits your journey."
        />

        <CategoryGrid />
      </section>

      {/* POPULAR TRAILS */}
      <section className="container-wide section-space">
        <div className="flex items-end justify-between gap-5">
          <SectionHeading
            align="left"
            eyebrow="Most booked"
            title="Popular horse trails"
            subtitle="Rider favourites from around the world, refreshed every week."
          />

          <Button
            asChild
            variant="ghost"
            className="hidden shrink-0 gap-2 rounded-full text-forest hover:bg-cream md:inline-flex"
          >
            <Link to="/trails">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((trail, index) => (
            <TrailCard
              key={trail.id}
              trail={trail}
              index={index}
            />
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full"
          >
            <Link to="/trails">
              View all trails
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="section-space">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[2rem] bg-forest px-5 py-10 shadow-elegant sm:px-8 md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Editor's picks"
              title="Featured experiences"
              subtitle="Signature rides handpicked by our senior guides."
              light
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {featured.map((trail, index) => (
                <motion.div
                  key={trail.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                >
                  <Link
                    to="/trails/$id"
                    params={{ id: trail.slug }}
                    className="group grid h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-[42%_1fr]"
                  >
                    <div className="relative min-h-[220px] overflow-hidden sm:min-h-[290px]">
                      <img
                        src={trail.image}
                        alt={trail.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                          {trail.category}
                        </div>

                        <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                          {trail.name}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
                          {trail.short}
                        </p>
                      </div>

                      <div className="mt-6 flex items-end justify-between gap-4">
                        <div>
                          <span className="font-display text-2xl font-bold text-white">
                            ${trail.price}
                          </span>

                          <span className="ml-1 text-xs text-white/60">
                            /rider
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-gold-foreground">
                          View ride
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP RATED */}
      <section className="container-wide section-space">
        <SectionHeading
          eyebrow="Top rated"
          title="Horses our riders adore"
          subtitle="Every horse on Horse Trails is individually reviewed after every ride."
        />

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topRated.map((trail, index) => (
            <TrailCard
              key={trail.id}
              trail={trail}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ADVENTURE PACKAGES */}
      <section className="container-wide section-space">
        <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
          <img
            src={images.t7}
            alt="Luxury overnight horse riding package"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/50" />

          <div className="relative grid gap-10 p-6 sm:p-8 md:grid-cols-2 md:p-12 lg:p-16">
            <div className="self-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                Luxury Packages
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-forest-foreground sm:text-4xl lg:text-5xl">
                Overnight adventures,{" "}
                <span className="text-gradient-gold">
                  stitched together.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-forest-foreground/75 sm:text-base">
                Multi-day rides with canvas camps, private
                chefs, and the world's most photogenic
                ranches. Add flights, transfers, and
                photography with a single click.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-7 rounded-full bg-gold px-7 text-gold-foreground shadow-glow hover:bg-gold/90"
              >
                <Link to="/packages">
                  Discover packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[images.t4, images.t8, images.t7, images.t5].map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl border border-white/15 object-cover shadow-elegant"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-wide section-space">
        <SectionHeading
          eyebrow="Rider stories"
          title="Loved by riders worldwide"
        />

        <Testimonials />
      </section>

      {/* INSTAGRAM */}
      <section className="container-wide section-space">
        <SectionHeading
          eyebrow="@horsetrails"
          title="From the saddle to the feed"
          subtitle="Follow along and tag #HorseTrails for a chance to be featured."
        />

        <InstagramGallery />
      </section>

      {/* FAQ */}
      <section className="container-wide section-space">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions"
        />

        <FAQAccordion />
      </section>

      {/* NEWSLETTER */}
      <section className="container-wide section-space pb-8">
        <Newsletter />
      </section>
    </SiteLayout>
  );
}