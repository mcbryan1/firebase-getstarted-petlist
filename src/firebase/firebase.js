import * as firebase from 'firebase'

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLElcPsZqK6QqpmKRli_maxa5GZ-2B0go",
    authDomain: "petlist-7b2a9.firebaseapp.com",
    databaseURL: "https://petlist-7b2a9.firebaseio.com",
    projectId: "petlist-7b2a9",
    storageBucket: "petlist-7b2a9.appspot.com",
    messagingSenderId: "903850141977",
    appId: "1:903850141977:web:ebad49dd871495216e7d88"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;