import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div></div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">{user?.email}</span>

        <button
          onClick={logout}
          className="p-2 hover:bg-slate-100 rounded-full transition"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
