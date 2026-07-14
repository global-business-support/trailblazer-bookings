// import { Link } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Search, User, Heart, Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const nav = [
//   { to: "/", label: "Home" },
//   { to: "/trails", label: "Horse Trails" },
//   { to: "/experiences", label: "Experiences" },
//   { to: "/packages", label: "Packages" },
//   { to: "/about", label: "About" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/blog", label: "Blog" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// export function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);

//   return (
//     <motion.header
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className={cn(
//         "fixed inset-x-0 top-0 z-50 transition-all duration-300",
//         scrolled ? "py-2" : "py-4",
//       )}
//     >
//       <div className="container-wide">
//         <div
//           className={cn(
//             "glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6",
//             scrolled && "shadow-elegant",
//           )}
//         >
//           <Link to="/" className="flex items-center gap-2">
//             <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-forest text-forest-foreground shadow-glow">
//               <span className="font-display text-lg font-bold">H</span>
//             </div>
//             <div className="hidden sm:block">
//               <div className="font-display text-lg font-bold leading-none text-forest">
//                 Horse Trails
//               </div>
//               <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
//                 Premium Equestrian
//               </div>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-1 lg:flex">
//             {nav.map((n) => (
//               <Link
//                 key={n.to}
//                 to={n.to}
//                 activeOptions={{ exact: n.to === "/" }}
//                 className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-cream hover:text-forest data-[status=active]:bg-forest data-[status=active]:text-forest-foreground"
//               >
//                 {n.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" className="hidden md:inline-flex" onClick={() => setDark((d) => !d)}>
//               {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
//             </Button>
//             <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
//               <Link to="/dashboard"><Heart className="h-4 w-4" /></Link>
//             </Button>
//             <Button variant="ghost" size="sm" className="hidden md:inline-flex gap-2" asChild>
//               <Link to="/login"><User className="h-4 w-4" />Login</Link>
//             </Button>
//             <Button size="sm" className="hidden md:inline-flex bg-forest text-forest-foreground hover:bg-forest/90" asChild>
//               <Link to="/trails">Book Now</Link>
//             </Button>
//             <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((o) => !o)}>
//               {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="glass mt-2 rounded-2xl p-3 lg:hidden"
//             >
//               <div className="flex flex-col gap-1">
//                 {nav.map((n) => (
//                   <Link
//                     key={n.to}
//                     to={n.to}
//                     onClick={() => setOpen(false)}
//                     className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-cream"
//                   >
//                     {n.label}
//                   </Link>
//                 ))}
//                 <div className="mt-2 flex gap-2 border-t border-border pt-3">
//                   <Button variant="outline" className="flex-1" asChild><Link to="/login">Login</Link></Button>
//                   <Button className="flex-1 bg-forest text-forest-foreground" asChild><Link to="/register">Register</Link></Button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Heart,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/trails", label: "Horse Trails" },
  { to: "/experiences", label: "Experiences" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("horse-trails-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem(
      "horse-trails-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          scrolled ? "py-2" : "py-3 sm:py-4",
        )}
      >
        <div className="container-wide">
          <div
            className={cn(
              "flex min-h-[72px] items-center justify-between gap-3 rounded-[1.4rem] border px-3 py-2.5 transition-all duration-300 sm:px-4 md:px-5",
              "border-forest/10 bg-ivory/85 backdrop-blur-2xl",
              scrolled
                ? "shadow-[0_14px_45px_-20px_rgba(24,63,40,0.45)]"
                : "shadow-[0_10px_35px_-24px_rgba(24,63,40,0.3)]",
            )}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex shrink-0 items-center gap-2.5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-forest text-forest-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
                <span className="font-display text-lg font-bold">
                  H
                </span>
              </div>

              <div className="hidden sm:block">
                <div className="font-display text-base font-bold leading-none text-forest md:text-lg">
                  Horse Trails
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Premium Equestrian
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-0.5 xl:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{
                    exact: item.to === "/",
                  }}
                  className={cn(
                    "rounded-full px-3 py-2 text-[13px] font-medium",
                    "text-foreground/75 transition-all duration-200",
                    "hover:bg-cream hover:text-forest",
                    "data-[status=active]:bg-forest data-[status=active]:text-forest-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setDark((value) => !value)}
                className="hidden h-9 w-9 rounded-full text-forest hover:bg-cream md:inline-flex"
              >
                {dark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden h-9 w-9 rounded-full text-forest hover:bg-cream lg:inline-flex"
                asChild
              >
                <Link to="/dashboard" aria-label="Saved trails">
                  <Heart className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden gap-2 rounded-full text-forest hover:bg-cream lg:inline-flex"
                asChild
              >
                <Link to="/login">
                  <User className="h-4 w-4" />
                  Login
                </Link>
              </Button>

              <Button
                size="sm"
                className="hidden rounded-full bg-forest px-5 text-forest-foreground shadow-sm hover:bg-forest/90 md:inline-flex"
                asChild
              >
                <Link to="/trails">
                  Book Now
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                className="h-10 w-10 rounded-full text-forest hover:bg-cream xl:hidden"
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-2 overflow-hidden rounded-[1.4rem] border border-forest/10 bg-ivory/95 p-3 shadow-elegant backdrop-blur-2xl xl:hidden"
              >
                <nav className="grid gap-1 sm:grid-cols-2">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{
                        exact: item.to === "/",
                      }}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium",
                        "text-foreground/80 transition-colors",
                        "hover:bg-cream hover:text-forest",
                        "data-[status=active]:bg-forest data-[status=active]:text-forest-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/70 pt-3 sm:grid-cols-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => setDark((value) => !value)}
                  >
                    {dark ? (
                      <Sun className="mr-2 h-4 w-4" />
                    ) : (
                      <Moon className="mr-2 h-4 w-4" />
                    )}
                    Theme
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl"
                    asChild
                  >
                    <Link
                      to="/dashboard"
                      onClick={() => setOpen(false)}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Saved
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl"
                    asChild
                  >
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Link>
                  </Button>

                  <Button
                    className="rounded-xl bg-forest text-forest-foreground hover:bg-forest/90"
                    asChild
                  >
                    <Link
                      to="/trails"
                      onClick={() => setOpen(false)}
                    >
                      Book Now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-forest/25 backdrop-blur-sm xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}