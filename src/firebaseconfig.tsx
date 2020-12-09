
import firebase from 'firebase';
import firestore from 'firebase/firestore'

const config={
    apiKey: "AIzaSyDwVDcnL8kvu6QPRdW0oD4F8ao16DsfJL8",
    authDomain: "check-ec274.firebaseapp.com",
    projectId: "check-ec274",
    storageBucket: "check-ec274.appspot.com",
    messagingSenderId: "248020424955",
    appId: "1:248020424955:web:3e29a3aa5fa4b0ad75785e",
    measurementId: "G-FSDD3FR1WK"
}

firebase.initializeApp(config);

var db = firebase.firestore()
export async function loginUser(email: string, password: string){    
    try{
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)    
    console.log(res)
    return true
}catch(error){
        console.log(error)
        return false

    }
} 

export async function SignUp(email:string, password:string){

    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        db.collection('User').add({
            email,
            password,
            status : true
        })
        console.log(res)
    }catch(error){
        console.log("Error @ SignUp" + error)
    }
}

