let themeChooser = document.getElementById("themeChooser");
themeChooser.addEventListener("change", function() {
	setColorTheme(themeChooser.value);
})

// Load saved theme (if exist)
let savedTheme = localStorage.getItem("theme");
if(savedTheme) {
	setColorTheme(savedTheme);
	themeChooser.value = savedTheme;
}


function setColorTheme(theme) {
	if(theme === "light") {
		localStorage.setItem("theme", "light");
		document.body.style.setProperty("--background", "white");
		document.body.style.setProperty("--darker-background", "whitesmoke");
		document.body.style.setProperty("--darker-background-hover", "lightgray");
		document.body.style.setProperty("--font-color", "black");
	} else if(theme === "dark") {
		localStorage.setItem("theme", "dark");
		document.body.style.setProperty("--background", "white");
		document.body.style.setProperty("--darker-background", "whitesmoke");
		document.body.style.setProperty("--darker-background-hover", "lightgray");
	} else if(theme === "solarized") {
		localStorage.setItem("theme", "solarized");
		document.body.style.setProperty("--background", "#002b36");
		document.body.style.setProperty("--darker-background", "#073642");
		document.body.style.setProperty("--darker-background-hover", "#586e75");
		document.body.style.setProperty("--font-color", "#fdf6e3");
	} else {
		console.error("Invalid theme value!");
	}
}
