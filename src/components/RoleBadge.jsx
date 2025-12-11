export default function RoleBadge({ role }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-700">
      {role}
    </span>
  );
}
