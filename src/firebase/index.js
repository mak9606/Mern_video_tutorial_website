import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAPZpemSOk56o15NIlRp9YT0WbPohIBrNg",
    authDomain: "upload-video-and-image.firebaseapp.com",
    projectId: "upload-video-and-image",
    storageBucket: "upload-video-and-image.appspot.com",
    messagingSenderId: "232277192317",
    appId: "1:232277192317:web:228a7d54b0fc7c4c794b14",
    measurementId: "G-CKHH382Y34"
  };

  firebase.initializeApp(firebaseConfig);

  const storage= firebase.storage();

  export {storage,firebase as default};