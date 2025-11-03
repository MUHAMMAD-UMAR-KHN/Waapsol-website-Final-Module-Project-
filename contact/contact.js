const firebaseConfig = {
  apiKey: "AIzaSyBRVwC8nKf2GmG72mjqEhJBbLJItCBSf5Y",
  authDomain: "waapsol-form.firebaseapp.com",
  projectId: "waapsol-form",
  storageBucket: "waapsol-form.firebasestorage.app",
  messagingSenderId: "662163754055",
  appId: "1:662163754055:web:89b40fb59d7dcb351df562",
  measurementId: "G-NG73P9B1J2"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function submitData(){
var namee = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var company = document.getElementById("company").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;

var clientObj = {
    clientname : namee,
    clientemail : email,
    clientphone : phone,
    clientcompany : company,
    clientsubject : subject,
    clientmessage : message,
};
console.log(client_obj)
  firebase.database().ref("client").push(clientObj);
}
