function setColorTheme(theme) {
	switch(theme) {
	case "light":
		localStorage.setItem("theme", "light");
		document.body.style.setProperty("--background", "white");
		document.body.style.setProperty("--darker-background", "whitesmoke");
		document.body.style.setProperty("--darker-background-hover", "lightgray");
		document.body.style.setProperty("--font-color", "black");
		break;
	case "dark":
		localStorage.setItem("theme", "dark");
		document.body.style.setProperty("--background", "#23272a");
		document.body.style.setProperty("--darker-background", "#2c2f33");
		document.body.style.setProperty("--darker-background-hover", "gray");
		document.body.style.setProperty("--font-color", "white");
		break;
	case "solarized":
		localStorage.setItem("theme", "solarized");
		document.body.style.setProperty("--background", "#002b36");
		document.body.style.setProperty("--darker-background", "#073642");
		document.body.style.setProperty("--darker-background-hover", "#586e75");
		document.body.style.setProperty("--font-color", "#fdf6e3");
		break;
	default:
		console.error("Invalid theme value!");
		break;
	}
}

export default function Footer() {
	const colorTheme = localStorage.getItem("theme");
    const defaultThemeSelection = colorTheme ?? "light";
    if(colorTheme) {
        setColorTheme(colorTheme);
    }

	function handleChange(event) {
		setColorTheme(event.target.value);
	}

	return (
		<footer className="footer">
			<div id="themeChanger">
				Theme: <select defaultValue={defaultThemeSelection} onChange={handleChange} id="themeChooser" title="The theme of the site">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="solarized">Solarized</option>
				</select>
			</div>
			Made with love from lines-of-codes
		</footer>
	);
}
