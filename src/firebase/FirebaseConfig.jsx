import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVJf-PydNBpUSHzCKnXAvFqicTcRpZ6Fw",
  authDomain: "shopbharatonline.firebaseapp.com",
  projectId: "shopbharatonline",
  storageBucket: "shopbharatonline.appspot.com",
  messagingSenderId: "706950338301",
  appId: "1:706950338301:web:300122b6448a5a6e32d094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
