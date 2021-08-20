function submitCode() {
	let name = document.getElementById("postName").value;
	let pasteContent = document.getElementById("")
	let databaseRef = firebase.database().ref();
	databaseRef.push({
		"name": name,
		"pasteContent": pasteContent
	});
}