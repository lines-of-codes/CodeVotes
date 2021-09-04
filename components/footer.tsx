import styles from '../styles/index.module.css'
import { useRef } from 'react'

function setColorTheme(theme: string) {
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

	function createOption(value, text) {
		if (value == defaultThemeSelection) {
			return <option value={value} selected>{text}</option>;
		}
		return <option value={value}>{text}</option>;
	}

	return (
		<footer className={styles.footer}>
			<div id={styles.themeChanger}>
				Theme: <select onChange={handleChange} id={styles.themeChooser} title="The theme of the site">
					{createOption("light", "Light")}
					{createOption("dark", "Dark")}
					{createOption("solarized", "Solarized")}
				</select>
			</div>
			Made with love from CodeInBytes
		</footer>
	);
}
