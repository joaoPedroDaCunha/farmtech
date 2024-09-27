
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAcLr3PXfLkKToicMCeYHnKlM1U6ciTNM",
    authDomain: "farmtech-92910.firebaseapp.com",
    projectId: "farmtech-92910",
    storageBucket: "farmtech-92910.appspot.com",
    messagingSenderId: "700721266475",
    appId: "1:700721266475:web:66c0caa056ac7721164f6e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);