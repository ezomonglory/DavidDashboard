import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var app = firebase.initializeApp({
    apiKey: "AIzaSyD5FG0IGFgqnkkeEXDhqib0kU46yYHTvoo",
    authDomain: "nfcauth-c5bc2.firebaseapp.com",
    projectId: "nfcauth-c5bc2",
    storageBucket: "nfcauth-c5bc2.appspot.com",
    messagingSenderId: "51637724126",
    appId: "1:51637724126:web:1e066ae11f30eec737f34f"
});

export const auth =  app.auth();
export const firestore= app.firestore()
export const storage = app.storage();

export default app