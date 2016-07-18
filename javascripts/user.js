"use strict";
let firebase = require("./firebaseConfig"),
	currentUser = require("./currentUser"),
	provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
	console.log("check", provider);
	return firebase.auth().signInWithPopup(provider);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	console.log("user logged in", user.uid);
	currentUser.setUser(user.uid);
  } else {
  	console.log("user not logged in");
	currentUser.setUser(null);
	}
});

module.exports = logInGoogle;