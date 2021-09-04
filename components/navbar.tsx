import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<div id={styles.logo}>CodeVotes</div>
			<div className={styles.elements} id={styles.navbarelements}>
				<Link href="/">Home</Link>
				<Link href="login">Login/Register</Link>
			</div>
		</nav>
	);
}
