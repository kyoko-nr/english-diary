// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHQGJml1JR94QpFFGzFNRbB_d356rjvhc',
  authDomain: 'english-diary-1c6dd.firebaseapp.com',
  projectId: 'english-diary-1c6dd',
  storageBucket: 'english-diary-1c6dd.appspot.com',
  messagingSenderId: '464324154533',
  appId: '1:464324154533:web:dfe57c7468a1ed3d4fe94c',
  measurementId: 'G-S9FMQ1H3WG',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
