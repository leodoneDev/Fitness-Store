import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2JI42uPdRFfEfAtiW_61tLHpm2Ky5OYg",
  authDomain: "fiteness-6a92a.firebaseapp.com",
  projectId: "fiteness-6a92a",
  storageBucket: "fiteness-6a92a.firebasestorage.app",
  messagingSenderId: "85415996268",
  appId: "1:85415996268:web:a3767bda566a38c868e149"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
