import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyB6552oZVo2vQIvdP-N4daKxEWUexUePfE",
    authDomain: "quizz-learn-vue.firebaseapp.com",
    projectId: "quizz-learn-vue",
    storageBucket: "quizz-learn-vue.appspot.com",
    messagingSenderId: "907787151380",
    appId: "1:907787151380:web:4adff18546c12549661f01",
    measurementId: "G-1RCH7308W1"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection references
const results = db.collection('results')
const quizzesCollection = db.collection('quizzes')

// export utils/refs
export {
    db,
    auth,
    results,
    quizzesCollection,
    storage
}