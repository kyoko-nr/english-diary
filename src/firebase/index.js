// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDq-qA6s5M4WWj4aO706Dvhw_vxkhltv0g',
  authDomain: 'english-diary-9447b.firebaseapp.com',
  projectId: 'english-diary-9447b',
  storageBucket: 'english-diary-9447b.appspot.com',
  messagingSenderId: '547695270221',
  appId: '1:547695270221:web:86ede08b8691bc4c3abf04',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
