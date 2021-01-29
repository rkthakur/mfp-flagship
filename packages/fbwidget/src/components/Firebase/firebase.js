import app from 'firebase/app';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCT5VnJSXP58IqO5GB-WOqCu6VDUMgMDec",
    authDomain: "qa-thedivinesenses.firebaseapp.com",
    databaseURL: "https://qa-thedivinesenses.firebaseio.com",
    projectId: "qa-thedivinesenses",
    storageBucket: "qa-thedivinesenses.appspot.com",
    messagingSenderId: "659257946662",
    //appId: "1:659257946662:web:202578eb974273d952ace7",
    //measurementId: "G-SY6WXGDL9Y"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  // *** product API ***

  product = uid => this.db.ref(`Products/${uid}`);

  products = () => this.db.ref('Products');
}

export default Firebase;
