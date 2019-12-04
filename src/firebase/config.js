import firebase from "firebase/firebase-app"
import "firebase/firebase-auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyAWeT-KCqz4ED7E6UOLMxiEZHNrWxCF3rQ",
    authDomain: "blog-firebase-96211.firebaseapp.com",
    databaseURL: "https://blog-firebase-96211.firebaseio.com",
    projectId: "blog-firebase-96211",
    storageBucket: "blog-firebase-96211.appspot.com",
    messagingSenderId: "108887732942",
    appId: "1:108887732942:web:1d38f2f46f3e5119db569f"
}


class Firebase {
    constructor(){
        firebase.initializeApp(config)
        this.auth = firebase.auth;
        this.firestore = firebase.firestore;
        this.storage = firebase.storage;
    }

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch( err => {
            console.log(err)
        })
        return user
    }

    async signin(email, password) {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch ( err => {
            console.log(err)
        })
        return user;
    }

    async logout(){
        await firebase.auth().signOut.catch ( err => {
            console.log(err)
        })
    }

}

export default new Firebase();