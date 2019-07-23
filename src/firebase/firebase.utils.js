import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCWjCAELSbY9aGiKwWDf1kZkkmsKuWTiWg",
    authDomain: "e-commerce-e2a26.firebaseapp.com",
    databaseURL: "https://e-commerce-e2a26.firebaseio.com",
    projectId: "e-commerce-e2a26",
    storageBucket: "",
    messagingSenderId: "911347116618",
    appId: "1:911347116618:web:cbebecfa71037a2b"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
