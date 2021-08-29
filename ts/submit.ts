interface InputBox extends HTMLElement {
	value: string
}

type InputBoxElement = InputBox;

function submitCode() {
	let name: string = (document.getElementById("postName") as InputBoxElement).value;
	let pasteContent: string = "";
	let databaseRef: DatabaseReference = firebase.database().ref();
	databaseRef.push({
		"name": name,
		"pasteContent": pasteContent
	});
}