import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { auth } from './components/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Login() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <NavBar /><br/><br/>
            <main className="centered-column-flexbox">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="centered-column-flexbox">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" /><br/>
                    <input type="submit" className="btn1" value="Login" />
                    <span style={{lineHeight: "40px"}}>- Or -</span>
                    <button className="loginservicebtn" id="btngoogle"></button>
                    <button className="loginservicebtn" id="btngithub">Sign in with GitHub</button>
                </form>
            </main><br/>
            <Footer />
        </>
    );
}