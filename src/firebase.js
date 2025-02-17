// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZCyLt606aXy-vQo92_IKcQdFzJBc547c',
  authDomain: 'tdlist-c3787.firebaseapp.com',
  projectId: 'tdlist-c3787',
  storageBucket: 'tdlist-c3787.firebasestorage.app',
  messagingSenderId: '69097771735',
  appId: '1:69097771735:web:c1043ee76a87370a3e5692',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app } // evite erreur ligne 18
