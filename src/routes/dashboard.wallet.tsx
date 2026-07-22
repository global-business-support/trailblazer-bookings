import { createFileRoute } from "@tanstack/react-router";
import {
  WalletCards,
  CreditCard,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  ShieldCheck,
  MoreHorizontal,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/wallet")({
  component: WalletPage,
});

function WalletPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-forest">
          My Wallet
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your balance, payment methods, and recent transactions.
        </p>
      </div>

      {/* Balance Card */}
      <div className="relative overflow-hidden rounded-3xl bg-forest p-7 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-20 h-40 w-40 rounded-full bg-white/5" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/70">Available Balance</p>
              <h2 className="mt-2 text-4xl font-bold">$2,450.00</h2>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <WalletCards size={30} />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:bg-white/90">
              <Plus size={17} />
              Add Money
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
              <ArrowUpRight size={17} />
              Send Money
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <ArrowDownLeft size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Total Added</p>
          <h3 className="mt-1 text-2xl font-bold text-forest">$5,850.00</h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <ArrowUpRight size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Total Spent</p>
          <h3 className="mt-1 text-2xl font-bold text-forest">$3,400.00</h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <ShieldCheck size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Wallet Status</p>
          <h3 className="mt-1 text-2xl font-bold text-green-600">Active</h3>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-forest">
              Payment Methods
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your saved payment methods
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            <Plus size={16} />
            Add Card
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
              <CreditCard size={23} />
            </div>

            <div>
              <p className="font-semibold text-forest">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">
                Expires 12/28
              </p>
            </div>
          </div>

          <button className="rounded-lg p-2 text-muted-foreground hover:bg-white">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Recent Transactions
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your latest wallet activity
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <ArrowUpRight size={18} />
              </div>
              <div>
                <p className="font-medium text-forest">Trail Booking</p>
                <p className="text-xs text-muted-foreground">
                  Premium Mountain Trail
                </p>
              </div>
            </div>
            <p className="font-semibold text-red-600">-$450.00</p>
          </div>

          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <ArrowDownLeft size={18} />
              </div>
              <div>
                <p className="font-medium text-forest">Wallet Top Up</p>
                <p className="text-xs text-muted-foreground">
                  Visa ending in 4242
                </p>
              </div>
            </div>
            <p className="font-semibold text-green-600">+$1,000.00</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <ArrowUpRight size={18} />
              </div>
              <div>
                <p className="font-medium text-forest">Horse Riding Experience</p>
                <p className="text-xs text-muted-foreground">
                  Sunset Riding Experience
                </p>
              </div>
            </div>
            <p className="font-semibold text-red-600">-$280.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}