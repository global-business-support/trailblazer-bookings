import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  Download,
  Eye,
  Search,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/invoices")({
  component: InvoicesPage,
});

function InvoicesPage() {
  const invoices = [
    {
      id: "INV-2026-001",
      title: "Premium Mountain Trail",
      date: "Jul 18, 2026",
      amount: "$450.00",
      status: "Paid",
    },
    {
      id: "INV-2026-002",
      title: "Sunset Horse Riding Experience",
      date: "Jul 12, 2026",
      amount: "$280.00",
      status: "Paid",
    },
    {
      id: "INV-2026-003",
      title: "Countryside Adventure Package",
      date: "Jul 05, 2026",
      amount: "$620.00",
      status: "Pending",
    },
    {
      id: "INV-2026-004",
      title: "Private Horse Trail",
      date: "Jun 28, 2026",
      amount: "$350.00",
      status: "Cancelled",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-forest">
            Invoices
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View and manage all your booking invoices in one place.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-muted-foreground">
          <CalendarDays size={17} />
          All Time
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <CheckCircle2 size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Paid Invoices</p>
          <h3 className="mt-1 text-2xl font-bold text-forest">12</h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <Clock3 size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Pending</p>
          <h3 className="mt-1 text-2xl font-bold text-forest">2</h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <FileText size={20} />
          </div>
          <p className="text-sm text-muted-foreground">Total Invoices</p>
          <h3 className="mt-1 text-2xl font-bold text-forest">14</h3>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
        <Search size={19} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search invoices..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Invoice List */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Recent Invoices
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Your latest booking invoices and payment records.
          </p>
        </div>

        <div className="space-y-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-[#faf8f1] p-4 transition hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
                  <FileText size={22} />
                </div>

                <div>
                  <p className="font-semibold text-forest">
                    {invoice.title}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{invoice.id}</span>
                    <span>•</span>
                    <span>{invoice.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 md:justify-end">
                <div className="text-left md:text-right">
                  <p className="font-bold text-forest">
                    {invoice.amount}
                  </p>

                  <span
                    className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {invoice.status === "Paid" && (
                      <CheckCircle2 size={12} />
                    )}

                    {invoice.status === "Pending" && (
                      <Clock3 size={12} />
                    )}

                    {invoice.status === "Cancelled" && (
                      <XCircle size={12} />
                    )}

                    {invoice.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    title="View Invoice"
                    className="rounded-xl border border-border bg-white p-2.5 text-forest transition hover:bg-forest hover:text-white"
                  >
                    <Eye size={17} />
                  </button>

                  <button
                    title="Download Invoice"
                    className="rounded-xl border border-border bg-white p-2.5 text-forest transition hover:bg-forest hover:text-white"
                  >
                    <Download size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}