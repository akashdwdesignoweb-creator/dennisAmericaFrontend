import apiClient from "../services/apiClient";

export const adminModel = {
  async register(name, email, password) {
    const res = await apiClient.post("/admin/register", { name, email, password });
    return res.data;
  },

  async login(email, password) {
    const res = await apiClient.post("/admin/login", { email, password });
    return res.data;
  },
  async fetchProfile(token) {
    const res = await apiClient.get("/admin/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
};
