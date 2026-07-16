import { useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type BookingPopupProps = {
  trailName: string;
  price?: number | string;
};

export function BookingPopup({
  trailName,
  price,
}: BookingPopupProps) {
  const [open, setOpen] = useState(false);
  const [riders, setRiders] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const increaseRiders = () => {
    setRiders((current) => Math.min(current + 1, 10));
  };

  const decreaseRiders = () => {
    setRiders((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);

    if (!value) {
      setTimeout(() => {
        setSubmitted(false);
        setRiders(1);
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="rounded-full bg-[#0d462d] px-6 text-white shadow-md hover:bg-[#083821]"
        >
          Book Now
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl border border-emerald-950/10 bg-[#fffdf8] p-0 sm:max-w-[560px]">
        {!submitted ? (
          <>
            <div className="rounded-t-3xl bg-gradient-to-br from-[#0d462d] to-[#17633f] px-6 py-7 text-white">
              <DialogHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <CalendarDays className="h-6 w-6" />
                </div>

                <DialogTitle className="text-2xl font-bold text-white">
                  Book your experience
                </DialogTitle>

                <DialogDescription className="text-sm text-white/80">
                  Complete the form below to reserve your horse riding
                  experience.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
              <div className="rounded-2xl border border-emerald-950/10 bg-[#f5f1e7] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a56a20]">
                  Selected experience
                </p>

                <div className="mt-1 flex items-center justify-between gap-4">
                  <h3 className="font-bold text-[#123f2a]">{trailName}</h3>

                  {price !== undefined && (
                    <p className="whitespace-nowrap text-lg font-bold text-[#123f2a]">
                      ${price}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`name-${trailName}`}>Full name</Label>
                  <Input
                    id={`name-${trailName}`}
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="h-11 rounded-xl bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`phone-${trailName}`}>Phone number</Label>
                  <Input
                    id={`phone-${trailName}`}
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    required
                    className="h-11 rounded-xl bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`email-${trailName}`}>Email address</Label>
                <Input
                  id={`email-${trailName}`}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-11 rounded-xl bg-white"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`date-${trailName}`}>Booking date</Label>
                  <Input
                    id={`date-${trailName}`}
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="h-11 rounded-xl bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Number of riders</Label>

                  <div className="flex h-11 items-center justify-between rounded-xl border bg-white px-2">
                    <button
                      type="button"
                      onClick={decreaseRiders}
                      disabled={riders === 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f1e7] text-[#123f2a] transition hover:bg-[#ebe3d2] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="font-bold text-[#123f2a]">{riders}</span>

                    <button
                      type="button"
                      onClick={increaseRiders}
                      disabled={riders === 10}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f1e7] text-[#123f2a] transition hover:bg-[#ebe3d2] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <input type="hidden" name="riders" value={riders} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`message-${trailName}`}>
                  Special request
                  <span className="ml-1 font-normal text-muted-foreground">
                    (optional)
                  </span>
                </Label>

                <textarea
                  id={`message-${trailName}`}
                  name="message"
                  rows={3}
                  placeholder="Share any special requirements..."
                  className="w-full resize-none rounded-xl border border-input bg-white px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[#0d462d]/30"
                />
              </div>

              <DialogFooter className="gap-2 pt-2 sm:gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-full px-6"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="h-11 rounded-full bg-[#0d462d] px-7 text-white hover:bg-[#083821]"
                >
                  Confirm Booking
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="flex min-h-[430px] flex-col items-center justify-center px-7 py-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-11 w-11 text-emerald-700" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#123f2a]">
              Booking request received!
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Your request for{" "}
              <strong className="text-[#123f2a]">{trailName}</strong> has been
              submitted. Our team will contact you to confirm availability.
            </p>

            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-7 rounded-full bg-[#0d462d] px-8 text-white hover:bg-[#083821]"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}