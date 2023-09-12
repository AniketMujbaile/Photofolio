import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCz1Zg6qsX9mMDzlDo-O2IH2-KwUr6aMIE",
    authDomain: "photofolio-18fab.firebaseapp.com",
    projectId: "photofolio-18fab",
    storageBucket: "photofolio-18fab.appspot.com",
    messagingSenderId: "1057741537442",
    appId: "1:1057741537442:web:7344f134a69eb9f69a17fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
