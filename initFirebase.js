const firebaseConfig = {
    apiKey: "AIzaSyDzB0yBCUGpNhahLm2Ar_y4VSte2n60fqo",
    authDomain: "k-market-exp.firebaseapp.com",
    projectId: "k-market-exp",
    storageBucket: "k-market-exp.appspot.com",
    messagingSenderId: "892090922110",
    appId: "1:892090922110:web:045f05ac8649a55f40142f",
    measurementId: "G-04LPBTT4CQ",
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = app.storage();

const FbStorageBucket = "places-gallery";
