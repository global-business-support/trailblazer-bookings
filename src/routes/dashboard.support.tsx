import { createFileRoute } from "@tanstack/react-router";
import {
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  HelpCircle,
  ChevronDown,
  Send,
  Clock3,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/support")({
  component: SupportPage,
});

function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I modify my booking?",
      answer:
        "You can modify your booking from the My Bookings section. Select your booking and choose the modification option.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation policies vary depending on the experience. Please check your booking details for the specific cancellation terms.",
    },
    {
      question: "How can I get a refund?",
      answer:
        "If your booking is eligible for a refund, our support team will process it according to the applicable cancellation policy.",
    },
    {
      question: "Can I contact the trail guide directly?",
      answer:
        "Yes. Once your booking is confirmed, the relevant contact details will be available in your booking information.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-forest">
          Help & Support
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          We're here to help you with your bookings, payments, and experiences.
        </p>
      </div>

      {/* Support Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-forest p-7 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-white/5" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Headphones size={30} />
            </div>

            <h2 className="text-2xl font-bold">
              How can we help you?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Our support team is ready to assist you with any questions or
              concerns about your Horse Trails experience.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm">
            <Clock3 size={17} />
            Support available 24/7
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <MessageCircle size={21} />
          </div>

          <h3 className="font-bold text-forest">
            Live Chat
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Chat with our support team instantly.
          </p>

          <button className="mt-4 rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Start Chat
          </button>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Mail size={21} />
          </div>

          <h3 className="font-bold text-forest">
            Email Support
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Get help from our support team.
          </p>

          <p className="mt-4 text-sm font-semibold text-forest">
            support@horsetrails.com
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <Phone size={21} />
          </div>

          <h3 className="font-bold text-forest">
            Call Us
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Speak directly with our team.
          </p>

          <p className="mt-4 text-sm font-semibold text-forest">
            +1 (800) 555-0198
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Frequently Asked Questions
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Find quick answers to common questions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-[#faf8f1]"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle
                    size={19}
                    className="shrink-0 text-forest"
                  />

                  <span className="font-semibold text-forest">
                    {faq.question}
                  </span>
                </div>

                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="border-t border-border px-4 pb-4 pt-3 text-sm leading-6 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-forest">
            Send Us a Message
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Can't find what you're looking for? Send us a message.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-border bg-[#faf8f1] px-4 py-3 text-sm outline-none focus:border-forest"
          />

          <input
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-border bg-[#faf8f1] px-4 py-3 text-sm outline-none focus:border-forest"
          />

          <textarea
            placeholder="How can we help you?"
            rows={4}
            className="md:col-span-2 rounded-xl border border-border bg-[#faf8f1] px-4 py-3 text-sm outline-none focus:border-forest"
          />

          <button className="flex w-fit items-center gap-2 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            <Send size={16} />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}