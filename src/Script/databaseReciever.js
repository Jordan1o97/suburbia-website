import firebase from 'firebase/app'
import "firebase/firestore";

var db = firebase.firestore();
var hatRef = db.collection("Hats");
var shirtsRef = db.collection("T-Shirts");
var hoodiesRef = db.collection("Hoodies");

function getHats() {
    hatRef.get().then((snapshot) => {

        snapshot.docs.forEach(doc => {
            let items = doc.data();
  
            /* Make data suitable for rendering */
            items = JSON.stringify(items);
            console.log(items);
  
        });
  
      });
};

function getHoodies() {
    hoodiesRef.get().then((snapshot) => {

        snapshot.docs.forEach(doc => {
            let items = doc.data();
  
            /* Make data suitable for rendering */
            items = JSON.stringify(items);
            console.log(items);
  
        });
  
      });
};

function getTShirts() {
    shirtsRef.get().then((snapshot) => {

        snapshot.docs.forEach(doc => {
            let items = doc.data();
  
            /* Make data suitable for rendering */
            items = JSON.stringify(items);
            console.log(items);
  
        });
  
      });
};

export {getHats, getHoodies, getTShirts};

