import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  FileText,
  Image,
  FileArchive,
  Search,
  CalendarDays,
  MoreVertical,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/downloads")({
  component: DownloadsPage,
});

function DownloadsPage() {
  const downloads = [
    {
      name: "Premium Mountain Trail Invoice",
      type: "PDF Document",
      date: "Jul 18, 2026",
      size: "245 KB",
      icon: FileText,
    },
    {
      name: "Horse Riding Experience Guide",
      type: "PDF Document",
      date: "Jul 12, 2026",
      size: "1.2 MB",
      icon: FileText,
    },
    {
      name: "Your Booking Confirmation",
      type: "PDF Document",
      date: "Jul 05, 2026",
      size: "180 KB",
      icon: FileText,
    },
    {
      name: "Horse Trails Gallery Pack",
      type: "ZIP Archive",
      date: "Jun 28, 2026",
      size: "8.4 MB",
      icon: FileArchive,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-forest">
            Downloads
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Access and manage all your downloaded files and documents.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-muted-foreground">
          <CalendarDays size={17} />
          All Downloads
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <Download size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Total Downloads
          </p>

          <h3 className="mt-1 text-2xl font-bold text-forest">
            24
          </h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <FileText size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Documents
          </p>

          <h3 className="mt-1 text-2xl font-bold text-forest">
            18
          </h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <FileArchive size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Total Storage
          </p>

          <h3 className="mt-1 text-2xl font-bold text-forest">
            12.8 MB
          </h3>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
        <Search size={19} className="text-muted-foreground" />

        <input
          type="text"
          placeholder="Search downloaded files..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Downloads List */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Recent Downloads
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your recently downloaded files and documents.
          </p>
        </div>

        <div className="space-y-3">
          {downloads.map((file) => {
            const Icon = file.icon;

            return (
              <div
                key={file.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-[#faf8f1] p-4 transition hover:shadow-md md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-forest">
                      {file.name}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>{file.type}</span>
                      <span>•</span>
                      <span>{file.date}</span>
                      <span>•</span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-2 rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <Download size={16} />
                    Download
                  </button>

                  <button className="rounded-xl border border-border bg-white p-2.5 text-forest transition hover:bg-forest hover:text-white">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Storage Info */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-forest">
              Storage Usage
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              12.8 MB of 100 MB used
            </p>
          </div>

          <span className="text-sm font-semibold text-forest">
            13%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[13%] rounded-full bg-forest" />
        </div>
      </div>
    </div>
  );
}