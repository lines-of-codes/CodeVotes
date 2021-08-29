function submitCode() {
    var name = document.getElementById("postName").value;
    var pasteContent = "";
    var databaseRef = firebase.database().ref();
    databaseRef.push({
        "name": name,
        "pasteContent": pasteContent
    });
}
