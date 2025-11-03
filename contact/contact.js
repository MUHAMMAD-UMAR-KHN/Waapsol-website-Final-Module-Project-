const firebaseConfig = {
  apiKey: "AIzaSyD5rrmGsSswaLdGA2x86qA4valH4e022so",
  authDomain: "waapsol-form-b0d73.firebaseapp.com",
  projectId: "waapsol-form-b0d73",
  storageBucket: "waapsol-form-b0d73.firebasestorage.app",
  messagingSenderId: "207057410969",
  appId: "1:207057410969:web:91dcde38265cf001a0d108",
  measurementId: "G-DZFC07QYCF"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

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
