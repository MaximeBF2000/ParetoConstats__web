import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDQ9fEJale5JgE_VedUaaelMvROqjg9o4o",
  authDomain: "paretoconstats.firebaseapp.com",
  databaseURL: "https://paretoconstats.firebaseio.com",
  projectId: "paretoconstats",
  storageBucket: "paretoconstats.appspot.com",
  messagingSenderId: "365661921758",
  appId: "1:365661921758:web:be0c92e5b639b1b488bd4f"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp