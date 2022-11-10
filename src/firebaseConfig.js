import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS3G_GT5X892hIb2tN2B17ZkBribod548",
  authDomain: "solset-io.firebaseapp.com",
  databaseURL: "https://solset-io-default-rtdb.firebaseio.com",
  projectId: "solset-io",
  storageBucket: "solset-io.appspot.com",
  messagingSenderId: "262891331325",
  appId: "1:262891331325:web:00d0243d08e4f267b96894",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
