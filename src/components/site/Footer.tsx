import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-transparent to-cream">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-forest text-forest-foreground">
                <span className="font-display text-lg font-bold">H</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-forest">Horse Trails</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Premium Equestrian</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The world's most curated marketplace for horse riding experiences. Every ranch, guide, and horse personally vetted by our team of expert equestrians.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-forest" /> 42 Bridle Lane, Aspen CO 81611</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-forest" /> +1 (415) 555-0140</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-forest" /> hello@horsetrails.co</div>
            </div>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-forest hover:text-forest-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>


          <FooterCol
            title="Explore"
            links={[
              ["/", "Home"],
              ["/trails", "All Trails"],
              ["/experiences", "Experiences"],
              ["/packages", "Packages"],
              ["/gallery", "Gallery"],
              ["/blog", "Blog"],
            ]}
          />

          <FooterCol title="Company" links={[
            ["/about", "About Us"],
            ["/contact", "Contact"],
            ["/faq", "FAQ"],
            ["/dashboard", "My Account"],
          ]} />

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wider text-forest">Newsletter</div>
            <p className="mt-3 text-sm text-muted-foreground">Trail drops, seasonal offers, and quiet luxury inspiration — one email a month.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="you@email.com" className="bg-card" />
              <Button className="bg-forest text-forest-foreground hover:bg-forest/90">Join</Button>
            </form>
          </div>
        </div>

        {/* <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Horse Trails. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-forest">Privacy Policy</a>
            <a href="#" className="hover:text-forest">Terms</a>
            <a href="#" className="hover:text-forest">Refund Policy</a>
            <a href="#" className="hover:text-forest">Cookies</a>
          </div>
        </div> */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
  <div>© {new Date().getFullYear()} Horse Trails. All rights reserved.</div>

  <div className="flex flex-wrap gap-4">
    <Link to="/privacy-policy" className="hover:text-forest">
      Privacy Policy
    </Link>

    <Link to="/terms" className="hover:text-forest">
      Terms
    </Link>

    <Link to="/refund-policy" className="hover:text-forest">
      Refund Policy
    </Link>

    <Link to="/cookies" className="hover:text-forest">
      Cookies
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
}
{/* <Link
  to="/about"
  className="text-red-500"
>
  About Test
</Link> */}
<Link
  to="/"
  onClick={() => console.log("Home clicked")}
  className="text-muted-foreground transition-colors hover:text-forest"
>
  Home
</Link>



function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div className="font-display text-sm  uppercase tracking-wider text-forest">
        {title}
      </div>

      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link
              to={to as any}
              className="text-muted-foreground transition-colors hover:text-forest"
              activeProps={{
                className: "text-muted-foreground font-normal",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
