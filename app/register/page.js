"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../lib/auth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const success = registerUser(username, password);
    if (success) {
      alert("Registered successfully!");
      router.push("/");
    } else {
      alert("Username already exists.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button><br /><br />
      <button onClick={() => router.push("/")}>Back to Login</button>
    </div>
  );
}
