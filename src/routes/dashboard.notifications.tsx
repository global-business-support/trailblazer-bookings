import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  CheckCircle2,
  CalendarCheck,
  CreditCard,
  Gift,
  Info,
  Check,
  Trash2,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/notifications")({
  component: NotificationsPage,
});

function NotificationsPage() {
  const notifications = [
    {
      title: "Booking Confirmed",
      message:
        "Your Premium Mountain Trail booking has been successfully confirmed.",
      time: "2 hours ago",
      icon: CalendarCheck,
      type: "success",
      unread: true,
    },
    {
      title: "Payment Successful",
      message:
        "Your payment of $450.00 for the Premium Mountain Trail was successful.",
      time: "Yesterday",
      icon: CreditCard,
      type: "payment",
      unread: true,
    },
    {
      title: "Special Offer Just for You",
      message:
        "Enjoy 15% off your next horse riding experience. Offer ends soon!",
      time: "2 days ago",
      icon: Gift,
      type: "offer",
      unread: false,
    },
    {
      title: "Profile Updated",
      message:
        "Your profile information has been successfully updated.",
      time: "4 days ago",
      icon: CheckCircle2,
      type: "success",
      unread: false,
    },
    {
      title: "New Experience Available",
      message:
        "Explore our new Sunset Valley Horse Trail experience.",
      time: "1 week ago",
      icon: Info,
      type: "info",
      unread: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-forest">
            Notifications
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Stay updated with your bookings, payments, and latest activities.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white">
          <Check size={16} />
          Mark All as Read
        </button>
      </div>

      {/* Notification Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <Bell size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Total Notifications
          </p>

          <h3 className="mt-1 text-2xl font-bold text-forest">
            12
          </h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Info size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Unread Notifications
          </p>

          <h3 className="mt-1 text-2xl font-bold text-forest">
            2
          </h3>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <CheckCircle2 size={20} />
          </div>

          <p className="text-sm text-muted-foreground">
            Account Status
          </p>

          <h3 className="mt-1 text-2xl font-bold text-green-600">
            Active
          </h3>
        </div>
      </div>

      {/* Notifications List */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Recent Notifications
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your latest updates and important alerts.
          </p>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;

            return (
              <div
                key={notification.title}
                className={`flex items-start gap-4 rounded-2xl border p-4 transition hover:shadow-md ${
                  notification.unread
                    ? "border-green-200 bg-[#f4faf5]"
                    : "border-border bg-[#faf8f1]"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    notification.type === "success"
                      ? "bg-green-100 text-green-700"
                      : notification.type === "payment"
                      ? "bg-blue-100 text-blue-700"
                      : notification.type === "offer"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-forest">
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="h-2 w-2 rounded-full bg-green-600" />
                      )}
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {notification.message}
                  </p>
                </div>

                <button
                  title="Delete notification"
                  className="rounded-lg p-2 text-muted-foreground transition hover:bg-red-100 hover:text-red-600"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}