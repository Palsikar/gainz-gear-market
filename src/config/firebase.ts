
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxe_0HnUbgET2zf3w0uvjxyisWU5rIi_E",
  authDomain: "gainzgear-app.firebaseapp.com",
  projectId: "gainzgear-app",
  storageBucket: "gainzgear-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
