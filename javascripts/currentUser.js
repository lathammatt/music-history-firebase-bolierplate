"use strict";

let firebase = require("./firebaseConfig"),
	currentUser = null;


function getUser(){
	return currentUser;
}

function setUser(user){
	currentUser = user;
}


module.exports = {getUser, setUser};

