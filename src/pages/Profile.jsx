import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, agent } = useAuth();

  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-700 mb-4">Profile</h1>

      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <p><strong>Name:</strong> {user?.displayName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        {agent && (
          <>
            <p><strong>Birth date:</strong> {agent.birthDate}</p>
            <p><strong>Admin:</strong> {agent.isAdmin ? "Yes" : "No"}</p>
          </>
        )}
      </div>
    </div>
  );
}
