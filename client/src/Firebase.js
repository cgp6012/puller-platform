import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZDn-CgJqPppY6syu0shYkBDYG3-yERzk",
    authDomain: "pull-platform.firebaseapp.com",
    databaseURL: "https://pull-platform.firebaseio.com",
    projectId: "pull-platform",
    storageBucket: "pull-platform.appspot.com",
    messagingSenderId: "449137343992",
    appId: "1:449137343992:web:7ad5d50a9a40abf113ea0d",
    measurementId: "G-NB968VMGYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //export const database = firebase.database().ref('/posts');
firebase.firestore().settings(settings);

export default firebase;