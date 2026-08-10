import { api } from "@/lib/api";

export const fetchBookings = async () => {
  const res = await api.get("/api/bookings");
  return res.data;
};

export const createBooking = async (bookingData: any) => {
  const res = await api.post("/api/bookings", bookingData);
  return res.data;
};