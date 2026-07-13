import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { images } from "@/lib/data";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [{ title: "Create account — Horse Trails" }],
  }),
  component: Register,
});

function Register() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 md:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Link to="/" className="mb-6 inline-flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-forest text-forest-foreground"><span className="font-display font-bold">H</span></div>
            <span className="font-display text-lg font-bold text-forest">Horse Trails</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-forest md:text-4xl">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Book faster, save favourites, and earn rider rewards.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>First name</Label><Input placeholder="Elena" className="mt-1 bg-card" /></div>
              <div><Label>Last name</Label><Input placeholder="Marchetti" className="mt-1 bg-card" /></div>
            </div>
            <div><Label>Email</Label><Input placeholder="you@email.com" className="mt-1 bg-card" /></div>
            <div><Label>Password</Label><Input type="password" placeholder="At least 8 characters" className="mt-1 bg-card" /></div>
            <label className="flex items-start gap-2 text-sm text-muted-foreground"><input type="checkbox" className="mt-1 rounded" /><span>I agree to the <a href="#" className="text-forest">Terms</a> and <a href="#" className="text-forest">Privacy Policy</a>.</span></label>
            <Button size="lg" className="w-full bg-forest text-forest-foreground shadow-glow hover:bg-forest/90">Create account</Button>
            <div className="pt-4 text-center text-sm text-muted-foreground">Already a rider? <Link to="/login" className="font-semibold text-forest hover:underline">Sign in</Link></div>
          </form>
        </motion.div>
      </div>
      <div className="relative hidden lg:block">
        <img src={images.t5} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tl from-forest/90 to-forest/30" />
        <div className="relative flex h-full items-end p-12 text-forest-foreground">
          <div>
            <div className="font-display text-4xl font-bold">Join 68,000 riders.</div>
            <div className="mt-3 text-forest-foreground/70">Members save on average $184 per booking with rider rewards.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
