import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  User,
  Heart,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BookingPopup } from "@/components/site/BookingPopup";
import { cn } from "@/lib/utils";

const nav = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/trails",
    label: "Horse Trails",
  },
  {
    to: "/experiences",
    label: "Experiences",
  },
  {
    to: "/packages",
    label: "Packages",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/gallery",
    label: "Gallery",
  },
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/contact",
    label: "Contact",
  },
] as const;

export function Header() {
  const [scrolled, setScrolled] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  const [dark, setDark] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark,
    );
  }, [dark]);

  return (
    <motion.header
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
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
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="gradient-forest grid h-10 w-10 shrink-0 place-items-center rounded-xl text-forest-foreground shadow-glow">
              <span className="font-display text-lg font-bold">
                H
              </span>
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

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{
                  exact: item.to === "/",
                }}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-cream hover:text-forest data-[status=active]:bg-forest data-[status=active]:text-forest-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
              onClick={() =>
                setDark(
                  (current) => !current,
                )
              }
              aria-label={
                dark
                  ? "Use light mode"
                  : "Use dark mode"
              }
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
              asChild
            >
              <Link
                to="/dashboard"
                aria-label="Open wishlist"
              >
                <Heart className="h-4 w-4" />
              </Link>
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden gap-2 md:inline-flex"
              asChild
            >
              <Link to="/login">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>

            {/* Desktop booking popup */}
            <div className="hidden md:block">
              <BookingPopup
                trailName="Horse Trails Experience"
              />
            </div>

            {/* Mobile menu */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() =>
                setOpen(
                  (current) => !current,
                )
              }
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="glass mt-2 rounded-2xl p-3 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() =>
                      setOpen(false)
                    }
                    activeOptions={{
                      exact:
                        item.to === "/",
                    }}
                    className="rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-cream data-[status=active]:bg-forest data-[status=active]:text-forest-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 grid gap-2 border-t border-border pt-3 sm:grid-cols-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <Link
                      to="/login"
                      onClick={() =>
                        setOpen(false)
                      }
                    >
                      Login
                    </Link>
                  </Button>

                  <Button
                    className="w-full bg-forest text-forest-foreground hover:bg-forest/90"
                    asChild
                  >
                    <Link
                      to="/register"
                      onClick={() =>
                        setOpen(false)
                      }
                    >
                      Register
                    </Link>
                  </Button>
                </div>

                {/* Mobile booking popup */}
                <div
                  className="mt-2 [&>button]:w-full"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <BookingPopup
                    trailName="Horse Trails Experience"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}