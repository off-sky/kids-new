import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYkBKbh1NjnzFjHnfmQ3TmxtyhYM_QbIQ",
    authDomain: "kids-b0757.firebaseapp.com",
    databaseURL: "https://kids-b0757.firebaseio.com",
    projectId: "kids-b0757",
    storageBucket: "kids-b0757.appspot.com",
    messagingSenderId: "684776658807"
};


export function init() {
    try {
        firebase.app()
    } catch (err) {
        firebase.initializeApp(config);
    }
}
