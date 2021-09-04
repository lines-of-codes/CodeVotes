import Head from 'next/head'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
	return (
		<>
			<Head>
				{ /* Primary Meta Tags */ }
				<title>CodeVotes - Home</title>
				<meta name="title" content="CodeVotes - Home" />
				<meta name="description" content="CodeVotes, a Platform that you can vote codes!" />
				{ /*  Open Graph / Facebook */ }
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://codeinbyteschallenges.github.io/" />
				<meta property="og:title" content="CodeVotes - Home" />
				<meta property="og:description" content="CodeVotes, a Platform that you can vote codes!" />
				<meta property="og:image" content="" />
				{ /* Twitter */ }
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://codeinbyteschallenges.github.io/" />
				<meta property="twitter:title" content="CodeVotes - Home" />
				<meta property="twitter:description" content="CodeVotes, a Platform that you can vote codes!" />
				<meta property="twitter:image" content="" />
			</Head>
			<NavBar />
			<br /><br /><br />
			<main>
				<div id={styles.about}>
					<div className={styles.container}>
						<h1>CodeVotes</h1>
						<p>A place where you can vote for code!</p>
					</div>
				</div>
				<section id={styles.codes}>
					<h1 style={{textAlign: "center"}}>Hello, world!</h1>
				</section>
			</main>
			<Footer />
		</>
	);
}
