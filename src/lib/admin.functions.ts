const API_URL = import.meta.env.VITE_API_URL || "https://trailblazer-backend-1.onrender.com";

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

export const getAdminDashboardStats = async () => {
  try {
    const headers = getAuthHeaders();

    // Available backend endpoints ko fetch kar rahe hain
    const [bookingsRes, paymentsRes, usersRes] = await Promise.all([
      fetch(`${API_URL}/api/bookings/admin/all`, { headers }),
      fetch(`${API_URL}/api/payments/admin/all`, { headers }),
      fetch(`${API_URL}/api/users`, { headers }),
    ]);

    const bookings = bookingsRes.ok ? await bookingsRes.json() : [];
    const payments = paymentsRes.ok ? await paymentsRes.json() : [];
    const users = usersRes.ok ? await usersRes.json() : [];

    const totalRevenue = Array.isArray(payments)
      ? payments.reduce((acc: number, item: any) => acc + (item.amount || 0), 0)
      : 0;

    return {
      revenue: {
        total: totalRevenue,
        month: totalRevenue,
        week: totalRevenue,
        today: 0,
      },
      avgBookingValue: Array.isArray(bookings) && bookings.length > 0 ? totalRevenue / bookings.length : 0,
      counts: {
        totalBookings: Array.isArray(bookings) ? bookings.length : 0,
        completedBookings: Array.isArray(bookings) ? bookings.filter((b: any) => b.status === "completed").length : 0,
        customers: Array.isArray(users) ? users.length : 0,
        vendors: 0,
        horses: 0,
        activeTrails: 0,
        pendingBookings: Array.isArray(bookings) ? bookings.filter((b: any) => b.status === "pending").length : 0,
        pendingRefunds: 0,
        pendingWithdrawals: 0,
      },
    };
  } catch (error: any) {
    console.error("Error fetching admin stats:", error);
    throw new Error(error.message || "Unable to load admin stats.");
  }
};