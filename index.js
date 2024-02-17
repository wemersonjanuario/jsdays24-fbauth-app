//this file exists so the webpack build process will succeed
Ext._find = require('lodash.find');

Ext.firebase = require('@firebase/app');
Ext.firebaseAuth = require('@firebase/auth');



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your data from google firebase console here",
  authDomain: "your data from google firebase console here",
  projectId: "your data from google firebase console here",
  storageBucket: "your data from google firebase console here",
  messagingSenderId: "your data from google firebase console here",
  appId: "your data from google firebase console here"
};


Ext.firebaseApp = Ext.firebase.initializeApp(firebaseConfig);

Ext.auth = Ext.firebaseAuth.initializeAuth(Ext.firebaseApp, {
  persistence: Ext.firebaseAuth.browserLocalPersistence,
  popupRedirectResolver: Ext.firebaseAuth.browserPopupRedirectResolver,
});





