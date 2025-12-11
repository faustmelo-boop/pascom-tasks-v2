import { useState } from "react";
import { db, appId } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function EventModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  async function handleCreate() {
    const col = collection(db, "artifacts", appId, "public", "data", "pascom_events_v2");
    await addDoc(col, {
      title,
      date,
      time,
      description,
      createdAt: new Date().toISOString(),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-semibold mb-3">New Event</h2>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setTime(e.target.value)}
        />

        <textarea
          className="w-full mb-3 p-2 border rounded"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-3 py-1">Cancel</button>

          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
