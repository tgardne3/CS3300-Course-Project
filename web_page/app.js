/*
names: Azam, Brandon, David, Trey
class: CS3300
*/
// for firebase and firebase auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPD10z05bZ2jJFEKtsfkjp9euqYV1PWdk",
  authDomain: "fir-sandbox-2026.firebaseapp.com",
  projectId: "fir-sandbox-2026",
  storageBucket: "fir-sandbox-2026.firebasestorage.app",
  messagingSenderId: "909983508788",
  appId: "1:909983508788:web:5208aefd9edba56a895d61",
  measurementId: "G-ZXW457681J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);






//collect and store data when submit button is clicked
function sign_up() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_check = document.getElementById('confirm_password').value;

    // send password to db
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);
        })
    

    //AZAM: STORE DATA IF PASSWORDS MATCH
    //store + process data here

    if (password == password_check) {
        //redirecting to success page
        console.log("User data collected: ", {username, password});//print debugging
        window.location.href = "successful-sign-up.html";

        //send to firebase

    }
    else {
        console.log("passwords don't match");
        alert("Passwords DON'T match!")
    }
}//sign_in

//signing in verification
function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //AZAM: VERIFY USERNAME + PASSWORD WITH DB
    console.log("Verify Info: ", {username, password});//print debugging
}

