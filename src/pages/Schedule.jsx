import { useState } from "react";
import { useFirestore } from "../context/FirestoreContext";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

export default function Schedule() {
  const { events } = useFirestore();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-slate-700">Schedule</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          New Event
        </button>
      </div>

      <div className="grid gap-4">
        {events.length === 0 && (
          <div className="text-slate-500">No events scheduled.</div>
        )}

        {events.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>

      <EventModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
