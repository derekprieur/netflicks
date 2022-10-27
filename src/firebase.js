import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBdDd2BAGuQYv8rWewPrGsnv5X_wSo4t1E",
    authDomain: "netflicks-c9b17.firebaseapp.com",
    projectId: "netflicks-c9b17",
    storageBucket: "netflicks-c9b17.appspot.com",
    messagingSenderId: "119468208877",
    appId: "1:119468208877:web:180b29f175c28b6ec152e4"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }