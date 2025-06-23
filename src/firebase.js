import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuCdKr73W5EvxH9aEakcHMQW9rtTHMUVs",
  authDomain: "realestate-dcfb0.firebaseapp.com",
  projectId: "realestate-dcfb0",
  storageBucket: "realestate-dcfb0.firebasestorage.app",
  messagingSenderId: "916638050947",
  appId: "1:916638050947:web:139e66c9a2c4ea385ac9b6",
  measurementId: "G-W7G7JXRXHT"
};

const app = initializeApp(firebaseConfig);

// ✅ THIS IS REQUIRED
export const auth = getAuth(app);
