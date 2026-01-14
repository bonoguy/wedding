import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqJBKHl1m1ErbGADNJyq2Zs-eCElDR0_s",
  authDomain: "wedding-taskmaster.firebaseapp.com",
  projectId: "wedding-taskmaster",
  storageBucket: "wedding-taskmaster.firebasestorage.app",
  messagingSenderId: "679764242227",
  appId: "1:679764242227:web:66ca8978ffee86ee9f9846",
  measurementId: "G-T2N7RPW38M"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
