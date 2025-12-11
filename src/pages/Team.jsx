import { useFirestore } from "../context/FirestoreContext";
import RoleBadge from "../components/RoleBadge";

export default function Team() {
  const { agents } = useFirestore();

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-700 mb-4">Team</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((a) => (
          <div
            key={a.id}
            className="p-4 bg-white border rounded-xl shadow-sm"
          >
            <h2 className="font-semibold text-slate-700">{a.name}</h2>

            <p className="text-sm text-slate-500 mt-1">{a.email}</p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {(a.skills || []).map((s) => (
                <RoleBadge key={s} role={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
