import { useEffect, useState, useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://trailblazer-backend-1.onrender.com";

export type AppRole =
  | "super_admin"
  | "admin"
  | "vendor"
  | "stable_owner"
  | "guide"
  | "accountant"
  | "booking_manager"
  | "customer";

export type User = {
  id: string;
  email: string;
  name?: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  roles: AppRole[];
  loading: boolean;
  isAdmin: boolean;
  isVendor: boolean;
  isGuide: boolean;
  isCustomer: boolean;
};

export function useAuth(): AuthState & {
  signOut: () => Promise<void>;
  refreshRoles: () => Promise<void>;
} {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUserProfile = useCallback(async (authToken: string) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setRoles(data.roles ?? []);
      } else {
        // Token invalid ya expire ho gaya ho toh logout karein
        localStorage.removeItem("access_token");
        setToken(null);
        setUser(null);
        setRoles([]);
      }
    } catch (error) {
      console.error("Failed to load user profile:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("access_token");
    if (savedToken) {
      setToken(savedToken);
      void loadUserProfile(savedToken);
    } else {
      setLoading(false);
    }
  }, [loadUserProfile]);

  const signOut = useCallback(async () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
    setRoles([]);
  }, []);

  const refreshRoles = useCallback(async () => {
    if (token) await loadUserProfile(token);
  }, [token, loadUserProfile]);

  return {
    user,
    token,
    roles,
    loading,
    isAdmin: roles.includes("super_admin") || roles.includes("admin"),
    isVendor: roles.includes("vendor") || roles.includes("stable_owner"),
    isGuide: roles.includes("guide"),
    isCustomer: roles.includes("customer"),
    signOut,
    refreshRoles,
  };
}