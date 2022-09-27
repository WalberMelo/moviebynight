// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add the Firebase products and methods that you want to use
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCJlE0JZ39rGDbhaun7In3f9OHoA64VykQ",
  authDomain: "moviebynight-b384e.firebaseapp.com",
  projectId: "moviebynight-b384e",
  storageBucket: "moviebynight-b384e.appspot.com",
  messagingSenderId: "435201700420",
  appId: "1:435201700420:web:07b8c67ae078425d454211",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
