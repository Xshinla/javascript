
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBGyC_sbhzZN8sRVu7AIEcIV9UA2IFG_dw",
//     authDomain: "tt-iot-tqs.firebaseapp.com",
//     databaseURL: "https://tt-iot-tqs-default-rtdb.firebaseio.com",
//     projectId: "tt-iot-tqs",
//     storageBucket: "tt-iot-tqs.appspot.com",
//     messagingSenderId: "1017048752746",
//     appId: "1:1017048752746:web:862f0c9da0ff9d96d4e013"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGyC_sbhzZN8sRVu7AIEcIV9UA2IFG_dw",
    authDomain: "tt-iot-tqs.firebaseapp.com",
    databaseURL: "https://tt-iotute-default-rtdb.firebaseio.com",
    projectId: "tt-iot-tqs",
    storageBucket: "tt-iot-tqs.appspot.com",
    messagingSenderId: "1017048752746",
    appId: "1:1017048752746:web:862f0c9da0ff9d96d4e013"
  };
  
firebase.initializeApp(firebaseConfig);
  
// Get a reference to the database service
var database = firebase.database();

// ======================thư viện=======================


//========================Phòng khách =======================
// đèn 1 
var pk_led1_btnOn = document.querySelector('.pk__led-1-on');
var pk_led1_btnOff = document.querySelector('.pk__led-1-off');
pk_led1_btnOn.onclick = function(){
   
    database.ref("/ROOM01").update({
        "led01" : "1"
    })
}
pk_led1_btnOff.onclick = function(){
    database.ref("/ROOM01").update({
        "led01" : "0"
    })
}
//đèn 2
var pk_led2_btnOn = document.querySelector('.pk__led-2-on');
var pk_led2_btnOff = document.querySelector('.pk__led-2-off');
pk_led2_btnOn.onclick = function(){
    database.ref("/ROOM01").update({
        "led02" : "1"
    })
}
pk_led2_btnOff.onclick = function(){
    database.ref("/ROOM01").update({
        "led02" : "0"
    })
}
//đèn 3
var pk_led3_btnOn = document.querySelector('.pk__led-3-on');
var pk_led3_btnOff = document.querySelector('.pk__led-3-off');
pk_led3_btnOn.onclick = function(){
    database.ref("/ROOM01").update({
        "led03" : "1"
    })
}
pk_led3_btnOff.onclick = function(){
    database.ref("/ROOM01").update({
        "led03" : "0"
    })
}
// Get nhiệt độ từ firebase
database.ref("/ROOM01/temp").on("value", function(snapshot){
    var pk_temp = snapshot.val();
    document.querySelector('.pk_temp').innerHTML = pk_temp;
})
// Get độ ẩm từ firebase
database.ref("/ROOM01/humi").on("value", function(snapshot){
    var pk_humi = snapshot.val();
    document.querySelector('.pk_hum').innerHTML = pk_humi;
})


//========================Phòng Ngủ =======================

// đèn 1 
var pn_led1_btnOn = document.querySelector('.pn__led-1-on');
var pn_led1_btnOff = document.querySelector('.pn__led-1-off');
pn_led1_btnOn.onclick = function(){
    database.ref("/ROOM02").update({
        "led01" : "1"
    })
}
pn_led1_btnOff.onclick = function(){
    database.ref("/ROOM02").update({
        "led01" : "0"
    })
}
//đèn 2
var pn_led2_btnOn = document.querySelector('.pn__led-2-on');
var pn_led2_btnOff = document.querySelector('.pn__led-2-off');
pn_led2_btnOn.onclick = function(){
    database.ref("/ROOM02").update({
        "led02" : "1"
    })
}
pn_led2_btnOff.onclick = function(){
    database.ref("/ROOM02").update({
        "led02" : "0"
    })
}
//đèn 3
var pn_led3_btnOn = document.querySelector('.pn__led-3-on');
var pn_led3_btnOff = document.querySelector('.pn__led-3-off');
pn_led3_btnOn.onclick = function(){
    database.ref("/ROOM02").update({
        "led03" : "1"
    })
}
pn_led3_btnOff.onclick = function(){
    database.ref("/ROOM02").update({
        "led03" : "0"
    })
}
// Get nhiệt độ từ firebase
database.ref("/ROOM02/temp").on("value", function(snapshot){
    var pn_temp = snapshot.val();
    document.querySelector('.pn_temp').innerHTML = pn_temp;
})
// Get độ ẩm từ firebase
database.ref("/ROOM02/humi").on("value", function(snapshot){
    var pn_humi = snapshot.val();
    document.querySelector('.pn_hum').innerHTML = pn_humi;
})