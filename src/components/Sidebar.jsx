import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, Workflow, User } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { to: "/", label: "Feed", icon: Home },
    { to: "/workflow", label: "Workflow", icon: Workflow },
    { to: "/schedule", label: "Schedule", icon: Calendar },
    { to: "/team", label: "Team", icon: Users },
    { to: "/profile", label: "Profile", icon: User }
  ];

  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-4 font-semibold text-xl text-slate-700">
        Pascom Tasks V2
      </div>

      <nav className="flex-1">
        {menu.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition 
              ${isActive ? "bg-slate-100 text-blue-600 font-medium" : "text-slate-600 hover:bg-slate-50"}`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
