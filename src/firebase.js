import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPSV-926xxvXrfLhcVJkqeLIavGKftzc",
  authDomain: "react-echat.firebaseapp.com",
  projectId: "react-echat",
  storageBucket: "react-echat.appspot.com",
  messagingSenderId: "476398746124",
  appId: "1:476398746124:web:e8bfad3f2e0737f82c8c29",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
