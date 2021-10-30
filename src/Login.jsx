import { useRef } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { auth } from './components/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredentials) => {
                window.location.href = "/";
            }).catch((error) => {
                console.error(error);
                alert(`An error occured during signing you in!\n${error.message}`);
            });
    }

    return (
        <>
            <NavBar /><br/><br/>
            <main className="centered-column-flexbox">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="centered-column-flexbox">
                    <input ref={email} type="email" placeholder="Email" />
                    <input ref={password} type="password" placeholder="Password" /><br/>
                    <input type="submit" className="btn1" value="Login" />
                    <span style={{lineHeight: "40px"}}>- Or -</span>
                    <button className="loginservicebtn" id="btngoogle"></button>
                    <button className="loginservicebtn" id="btngithub">
                        Sign in with GitHub
                    </button>
                </form>
            </main><br/>
            <Footer />
        </>
    );
}