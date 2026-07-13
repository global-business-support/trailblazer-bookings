import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { images } from "@/lib/data";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Sign in — Horse Trails" }, { name: "description", content: "Sign in to your Horse Trails account." }],
  }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 to-forest/40" />
        <div className="relative flex h-full flex-col justify-between p-12 text-forest-foreground">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-gold-foreground"><span className="font-display font-bold">H</span></div>
            <span className="font-display text-lg font-bold">Horse Trails</span>
          </Link>
          <div>
            <div className="font-display text-4xl font-bold">The world's finest saddles are one login away.</div>
            <div className="mt-3 text-forest-foreground/70">Sign in to manage bookings, wishlists, and members-only pricing.</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="lg:hidden mb-6">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-forest text-forest-foreground"><span className="font-display font-bold">H</span></div>
              <span className="font-display text-lg font-bold text-forest">Horse Trails</span>
            </Link>
          </div>
          <h1 className="font-display text-3xl font-bold text-forest md:text-4xl">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to continue.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
            <div>
              <Label>Email</Label>
              <div className="relative mt-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="you@email.com" className="pl-9 bg-card" />
              </div>
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative mt-1">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type={show ? "text" : "password"} placeholder="••••••••" className="px-9 bg-card" />
                <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Remember me</label>
              <a href="#" className="text-forest hover:underline">Forgot password?</a>
            </div>
            <Button size="lg" className="w-full bg-forest text-forest-foreground shadow-glow hover:bg-forest/90">Sign in</Button>

            <div className="relative my-6 text-center text-xs text-muted-foreground">
              <span className="relative z-10 bg-background px-3">or continue with</span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button type="button" variant="outline">Google</Button>
              <Button type="button" variant="outline">Apple</Button>
            </div>

            <div className="pt-4 text-center text-sm text-muted-foreground">
              Don't have an account? <Link to="/register" className="font-semibold text-forest hover:underline">Register</Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
