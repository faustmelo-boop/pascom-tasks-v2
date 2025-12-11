import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAA2fmE1xvMNyCy21CLuO-aQ8e6l30d_Y",
  authDomain: "tasks2ponto0.firebaseapp.com",
  projectId: "tasks2ponto0",
  storageBucket: "tasks2ponto0.firebasestorage.app",
  messagingSenderId: "881562484472",
  appId: "1:881562484472:web:4eb99f767269aad0ff050d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const appId = firebaseConfig.projectId;
