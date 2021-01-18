import { firebase } from '@firebase/app'
import 'firebase/auth'
import Router from '../router'

const firebaseConfig = {
    apiKey: 'XXXXXX',
    authDomain: 'XXXXXX.firebaseapp.com',
    projectId: 'XXXXXX',
    storageBucket: 'XXXXXX',
    messagingSenderId: 'XXXXXX',
    appId: 'XXXXXX'
}

firebase.initializeApp(firebaseConfig)

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe()
            resolve(user)
        }, reject)
    })
}

function firebaseLogin (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        Router.push('/')
    })
    .catch((error) => {
        alert(error.message)
    })
}

function firebaseRegister (email, password, username) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: username
          })
          .then(() => {
            Router.push('login')
          })
      })
      .catch((error) => {
         alert(error.message)
      })
}

export { firebaseLogin, firebaseRegister }
export default firebase
