// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDz5q5i0iG8D0or8_nZ1IH58pBPH8wVpZg',
  authDomain: 'english-diary-348704.firebaseapp.com',
  projectId: 'english-diary-348704',
  storageBucket: 'english-diary-348704.appspot.com',
  messagingSenderId: '646869455311',
  appId: '1:646869455311:web:5cb15945b0d920bc98c2ba',
  measurementId: 'G-GZMN4C7X8V',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
