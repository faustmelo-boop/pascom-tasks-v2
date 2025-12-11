import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const { login, register } = useAuth();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [adminCode, setAdminCode] = useState("");

  async function handleLogin() {
    await login(email, pass);
  }

  async function handleRegister() {
    await register(name, email, pass, birth, adminCode);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 border">

        <h1 className="text-xl font-semibold text-slate-700 mb-4">
          {mode === "login" ? "Sign in" : "Create account"}
        </h1>

        {mode === "register" && (
          <>
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="date"
              className="w-full mb-3 p-2 border rounded"
              onChange={(e) => setBirth(e.target.value)}
            />

            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Admin code (optional)"
              onChange={(e) => setAdminCode(e.target.value)}
            />
          </>
        )}

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        {mode === "login" ? (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Sign in
          </button>
        ) : (
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Create account
          </button>
        )}

        <button
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          className="text-sm text-blue-600 mt-4 w-full"
        >
          {mode === "login"
            ? "Create a new account"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
