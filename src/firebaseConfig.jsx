import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK1LDJewoe2Qd7_yJVrDAQL72O2JDhb8U",
  authDomain: "demoauth-e496e.firebaseapp.com",
  projectId: "demoauth-e496e",
  storageBucket: "demoauth-e496e.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
