// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyBpsaaF1QxmcXgSrzN0m5tZ7m3Lt5vFEDM",
	authDomain: "codevotes.firebaseapp.com",
	databaseURL: "https://codevotes-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "codevotes",
	storageBucket: "codevotes.appspot.com",
	messagingSenderId: "843641053169",
	appId: "1:843641053169:web:c4a822fb20e55c68d12e50",
	measurementId: "G-FC4567M3EP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let userActionMenu = document.getElementById("userActionMenu");
function toggleUserActionMenu() {
	if(userActionMenu.getAttribute("class") === "") {
		userActionMenu.setAttribute("class", "active");
	} else {
		userActionMenu.setAttribute("class", "");
	}
}
firebase.auth().onAuthStateChanged((user) => {
	let currentHTML = document.getElementById("navbarelements")?.innerHTML;
	if (currentHTML && user) {
		document.getElementById("navbarelements").innerHTML = `<a href=\"#\">Home</a><a href=\"codes.html\">Codes</a><button onclick="toggleUserActionMenu()">${user.displayName} <i class="fas fa-chevron-down"></i></a>`;
	}
})