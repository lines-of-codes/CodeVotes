function submitCode() {
	let name: string = (document.getElementById("postName") as HTMLInputElement).value;
	let pasteContent: string = "";
	let databaseRef: DatabaseReference = firebase.database().ref();
	databaseRef.push({
		"name": name,
		"pasteContent": pasteContent
	});
}