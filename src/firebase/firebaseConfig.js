import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN4YiUq8VkwFTx6OTlj3DAxET4jRTrWVM",
  authDomain: "kitchenapp-b330a.firebaseapp.com",
  projectId: "kitchenapp-b330a",
  storageBucket: "kitchenapp-b330a.appspot.com",
  messagingSenderId: "497222520538",
  appId: "1:497222520538:web:de20e0677ec32eaf819fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app);