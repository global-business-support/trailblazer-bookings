import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, Heart, Moon, Sun } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-wide">
        <div
          className={cn(
            "glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6",
            scrolled && "shadow-elegant",
          )}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-forest text-forest-foreground shadow-glow">
              <span className="font-display text-lg font-bold">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold leading-none text-forest">
                Horse Trails
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Premium Equestrian
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-cream hover:text-forest data-[status=active]:bg-forest data-[status=active]:text-forest-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex" onClick={() => setDark((d) => !d)}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
              <Link to="/dashboard"><Heart className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex gap-2" asChild>
              <Link to="/login"><User className="h-4 w-4" />Login</Link>
            </Button>
            <Button size="sm" className="hidden md:inline-flex bg-forest text-forest-foreground hover:bg-forest/90" asChild>
              <Link to="/trails">Book Now</Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((o) => !o)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 rounded-2xl p-3 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-cream"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2 border-t border-border pt-3">
                  <Button variant="outline" className="flex-1" asChild><Link to="/login">Login</Link></Button>
                  <Button className="flex-1 bg-forest text-forest-foreground" asChild><Link to="/register">Register</Link></Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
