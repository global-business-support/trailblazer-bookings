import { api } from "./api";

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post("/api/auth/login", credentials);
  const { access_token } = response.data;
  localStorage.setItem("token", access_token);
  return response.data;
};

export const register = async (userData: any) => {
  const response = await api.post("/api/auth/register", userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};