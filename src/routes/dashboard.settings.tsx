import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Lock,
  CreditCard,
  Globe,
  Moon,
  Mail,
  ShieldCheck,
  ChevronRight,
  Save,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-forest">
          Settings
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account preferences, privacy, and notification settings.
        </p>
      </div>

      {/* Settings Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-forest p-7 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/5" />

        <div className="relative flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <SettingsIcon size={32} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Account Settings
            </h2>

            <p className="mt-1 text-sm text-white/70">
              Personalize your Horse Trails experience.
            </p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Account Settings
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your personal account information.
          </p>
        </div>

        <div className="space-y-3">
          <button className="flex w-full items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4 text-left transition hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <User size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Personal Information
                </p>

                <p className="text-sm text-muted-foreground">
                  Update your name, email, and profile details.
                </p>
              </div>
            </div>

            <ChevronRight size={20} className="text-muted-foreground" />
          </button>

          <button className="flex w-full items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4 text-left transition hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Lock size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Password & Security
                </p>

                <p className="text-sm text-muted-foreground">
                  Manage your password and account security.
                </p>
              </div>
            </div>

            <ChevronRight size={20} className="text-muted-foreground" />
          </button>

          <button className="flex w-full items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4 text-left transition hover:bg-white hover:shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <CreditCard size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Payment Preferences
                </p>

                <p className="text-sm text-muted-foreground">
                  Manage your saved payment methods.
                </p>
              </div>
            </div>

            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Preferences
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Customize how you want to use Horse Trails.
          </p>
        </div>

        <div className="space-y-4">
          {/* Notifications */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <Bell size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Push Notifications
                </p>

                <p className="text-sm text-muted-foreground">
                  Receive updates about your bookings.
                </p>
              </div>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative h-7 w-12 rounded-full transition ${
                notifications ? "bg-forest" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  notifications ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Email Updates */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Mail size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Email Updates
                </p>

                <p className="text-sm text-muted-foreground">
                  Receive offers and important updates by email.
                </p>
              </div>
            </div>

            <button
              onClick={() => setEmailUpdates(!emailUpdates)}
              className={`relative h-7 w-12 rounded-full transition ${
                emailUpdates ? "bg-forest" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  emailUpdates ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-[#faf8f1] p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-200 text-gray-700">
                <Moon size={21} />
              </div>

              <div>
                <p className="font-semibold text-forest">
                  Dark Mode
                </p>

                <p className="text-sm text-muted-foreground">
                  Change the appearance of your dashboard.
                </p>
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative h-7 w-12 rounded-full transition ${
                darkMode ? "bg-forest" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  darkMode ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-forest">
              Privacy & Security
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Your account is protected with secure privacy settings.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-[#faf8f1] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-forest">
                Account Security Status
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Your account security is up to date.
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Protected
            </span>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
          <Save size={17} />
          Save Changes
        </button>
      </div>
    </div>
  );
}