import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/index.module.css'

export default function Login() {
    return <>
        <NavBar />
        <br /><br /><br />
        <main className={styles.container}>
            <h1>Login or Register</h1>
        </main>
        <Footer />
    </>;
}