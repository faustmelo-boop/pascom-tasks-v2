export default function EventCard({ event }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-semibold text-slate-700">{event.title}</h3>

      <p className="text-sm text-slate-500 mt-1">
        {event.date} — {event.time}
      </p>

      <p className="text-slate-700 mt-2">{event.description}</p>
    </div>
  );
}
