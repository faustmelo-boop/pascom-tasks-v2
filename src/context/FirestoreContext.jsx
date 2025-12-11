import { createContext, useContext, useEffect, useState } from "react";
import { db, appId } from "../firebase/config";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const FirestoreContext = createContext();

export function useFirestore() {
  return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {
  const [agents, setAgents] = useState([]);
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const path = (col) =>
      collection(db, "artifacts", appId, "public", "data", col);

    const unsubAgents = onSnapshot(path("pascom_agents"), (snap) => {
      setAgents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const unsubEvents = onSnapshot(path("pascom_events_v2"), (snap) => {
      setEvents(
        snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      );
    });

    const unsubTasks = onSnapshot(path("pascom_tasks"), (snap) => {
      setTasks(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const unsubPosts = onSnapshot(path("pascom_posts"), (snap) => {
      setPosts(
        snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      );
    });

    return () => {
      unsubAgents();
      unsubEvents();
      unsubTasks();
      unsubPosts();
    };
  }, []);

  const value = {
    agents,
    events,
    tasks,
    posts,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
