import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminController } from "../controllers/adminController";
import { useAuth } from "../contexts/AuthContext";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, token, admin, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
  const data = await adminController.register(name, email, password);
  setAuth(data.token, data.admin);
  navigate("/");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "320px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Register Admin</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "8px" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "8px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", marginBottom: "1rem", padding: "8px" }} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ width: "100%", padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>Register</button>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>Login</a>
        </p>
      </form>
    </div>
  );
}
