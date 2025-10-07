import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { admin, logout } = useAuth();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {admin?.name || "Admin"}!</h1>
      <button onClick={logout} style={{ marginTop: "1rem" }}>Logout</button>
    </div>
  );
}
