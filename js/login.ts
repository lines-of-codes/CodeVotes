let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", {
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID
	],
	signInSuccessUrl: "index.html"
})
firebase.auth().onAuthStateChanged((user) => {
	if (user !== null) {
		window.location.href = "index.html";
	}
})