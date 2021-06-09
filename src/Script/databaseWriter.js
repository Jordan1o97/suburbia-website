import firebase from 'firebase/app'
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBR_7t7MF9sLOMb3ArJd9rMjcKiL3W4dJA",
    authDomain: "suburbia-clothing.firebaseapp.com",
    databaseURL: "https://suburbia-clothing-default-rtdb.firebaseio.com",
    projectId: "suburbia-clothing",
    storageBucket: "suburbia-clothing.appspot.com",
    messagingSenderId: "1086967634860",
    appId: "1:1086967634860:web:13f692f30e8a661c62b809",
    measurementId: "G-0QQX554G77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
const docRef = db.collection("Hats");


// //Hoodies
// const colors = ["black", "white", "pink", "brown", "blue"];
// const description = "SUBURBIA VOL 1";
// const logo_numbers = [1, 4, 5];
// const materials = ["Cotton", "Cotton-Polyester Blend"]
// const price = 45.99;
// const sizes = ["Small", "Medium", "Large", "XL", "XXL"]

// //T-Shirts
// const colors = ["black", "white", "pink", "brown", "blue"];
// const description = "SUBURBIA VOL 1";
// const logo_numbers = [1, 2, 3];
// const materials = ["Cotton", "Cotton-Polyester Blend"]
// const price = 22.99;
// const sizes = ["Small", "Medium", "Large", "XL", "XXL"]

//Hat
const colors = ["black", "white", "pink", "brown", "blue"];
const description = "SUBURBIA VOL 1";
const logo_numbers = [1, 2, 6];
const price = 15.99;
const sizes = ["Medium", "Large"]

function writeData(color, description, logo_number, material, price, size, isHat) {
    if (isHat) {
        docRef.add({
            Color: color,
            Description: description,
            Logo_Number: logo_number,
            Price: price,
            Size: size
        }).then(function() {
            console.log("Success")
        }).catch(function(error) {
            console.log(error)
        })
    }else {
        docRef.add({
            Color: color,
            Description: description,
            Logo_Number: logo_number,
            Material: material,
            Price: price,
            Size: size
        }).then(function() {
            console.log("Success")
        }).catch(function(error) {
            console.log(error)
        })
    }
    
};

function bigWriteData(ishat) {
    if (ishat) {
        for (var logo_number in logo_numbers){
            writeData(colors, description, logo_numbers[logo_number],[] ,price, sizes, true)
        }
    }else{
        for (var logo_number in logo_numbers){
            writeData(colors, description, logo_numbers[logo_number],[], price, sizes, false)
        }
    }
    

};

export default bigWriteData;
