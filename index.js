var firebaseConfig = {
    apiKey: "AIzaSyDApOWStGX-7OhwdmcF1yomHATAx7c2dfQ",
    authDomain: "everydone-493b4.firebaseapp.com",
    databaseURL: "https://everydone-493b4.firebaseio.com",
    projectId: "everydone-493b4",
    storageBucket: "everydone-493b4.appspot.com",
    messagingSenderId: "118319581249",
    appId: "1:118319581249:web:f5014d9611e6e0d6971ec0",
    measurementId: "G-YY77SZV5BX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "dashboard.html";
        var user = firebase.auth().currentUser;
        if (user != null) {
            // User is signed in.
            var email_id = user.email;
            document.getElementById("user_param").innerHTML =
                "Welcome User : " + email_id;
        }
    } else {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
        window.location.href = "index.html";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => (window.location.href = "dashboard.html"))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);

            // ...
        });
}

function logout() {
    firebase
        .auth()
        .signOut()
        .then((user) => window.location.href = "index.html")
        .catch(function(error) {
            // An error happened.
        });
}