import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL || "https://trailblazer-backend-1.onrender.com";

// Helper function: LocalStorage / Cookies se Authorization Header access karne ke liye
function getAuthHeaders() {
  let token = "";
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("access_token") || "";
  }
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// ============ Booking Validation Schema ============

const createBookingSchema = z.object({
  trail_id: z.string().uuid(),
  booking_date: z.string(),
  start_time: z.string().optional(),
  guests: z.number().int().min(1).max(50),
  is_private: z.boolean().default(false),
  addons: z
    .array(
      z.object({
        name: z.string().max(80),
        quantity: z.number().int().min(1).max(20),
        unit_price: z.number().min(0),
      }),
    )
    .max(20)
    .default([]),
  coupon_code: z.string().max(64).optional(),
  customer_notes: z.string().max(2000).optional(),
});

// ============ Booking Server Functions ============

export const createBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => createBookingSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/bookings`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || result.message || "Booking creation failed.");
      }

      return {
        booking_id: result.booking_id || result.id,
        booking_number: result.booking_number,
      };
    } catch (error: any) {
      console.error("Create booking error:", error);
      throw new Error(error.message || "Unable to process booking.");
    }
  });

export const cancelBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        booking_id: z.string().uuid(),
        reason: z.string().max(500).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    try {
      const response = await fetch(
        `${API_URL}/api/v1/bookings/${data.booking_id}/cancel`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ reason: data.reason }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || result.message || "Cancellation failed.");
      }

      return { ok: true };
    } catch (error: any) {
      console.error("Cancel booking error:", error);
      throw new Error(error.message || "Unable to cancel booking.");
    }
  });

export const listMyBookings = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/bookings/my-bookings`, {
        method: "GET",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.detail || result.message || "Failed to fetch bookings.");
      }

      const data = await response.json();
      return data ?? [];
    } catch (error: any) {
      console.error("List my bookings error:", error);
      throw new Error(error.message || "Unable to load bookings.");
    }
  });