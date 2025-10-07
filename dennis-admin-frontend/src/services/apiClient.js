import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
if (!import.meta.env.VITE_API_URL) {
  console.warn("VITE_API_URL not set — falling back to:", baseURL);
}

const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
