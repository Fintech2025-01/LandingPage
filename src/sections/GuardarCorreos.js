import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {getAuth, signInAnonymously} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBp_Yn6BlVk8mMxkUVIq5JHSvg9Jm35CS8",
    authDomain: "saccu-betatesters.firebaseapp.com",
    projectId: "saccu-betatesters",
    storageBucket: "saccu-betatesters.firebasestorage.app",
    messagingSenderId: "471229279707",
    appId: "1:471229279707:web:de33d6f469cbbec6820bfe",
    measurementId: "G-47NQPZ9G4N"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('Usuario autenticado anónimamente');
    console.log(auth);
  })
  .catch((error) => {
    console.error('Error en autenticación anónima:', error);
  });

export {db, collection, addDoc, auth};