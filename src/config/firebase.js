import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxe9mVIB5TmH6NFmhGZWyxK6xxGEUINRk",
  authDomain: "dts-project-f8799.firebaseapp.com",
  projectId: "dts-project-f8799",
  storageBucket: "dts-project-f8799.appspot.com",
  messagingSenderId: "1057596507078",
  appId: "1:1057596507078:web:e5831d54ccf8ef9fafe8c7",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
