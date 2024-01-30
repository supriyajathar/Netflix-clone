
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// import {getfirestore} from 'firebase/firestore';

// const{
//     VITE_API_KEY,
// VITE_AuthDomain,  
// VITE_ProjectId,
// VITE_StorageBucket,
// VITE_MessagingSenderId,
// VITE_AppId,
// }=import.meta.env

// const firebaseConfig = {
//   apiKey: VITE_API_KEY,
//   authDomain: VITE_AuthDomain,
//   projectId: VITE_ProjectId,
//   storageBucket: VITE_StorageBucket,
//   messagingSenderId: VITE_MessagingSenderId,
//   appId:VITE_AppId,
// };


// const app = initializeApp(firebaseConfig);
// // export const auth=getAuth(app);
// export const auth = getAuth(app);

// export const db=getfirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Correct import statement for getAuth
import { getFirestore } from 'firebase/firestore'; // Correct import statement for getFirestore

const {
    VITE_API_KEY,
    VITE_AuthDomain,
    VITE_ProjectId,
    VITE_StorageBucket,
    VITE_MessagingSenderId,
    VITE_AppId,
} = import.meta.env;

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AuthDomain,
    projectId: VITE_ProjectId,
    storageBucket: VITE_StorageBucket,
    messagingSenderId: VITE_MessagingSenderId,
    appId: VITE_AppId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export getAuth
export const db = getFirestore(app); // Corrected function name to getFirestore
