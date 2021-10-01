export default function NavBar() {
    return (
        <nav className="nav">
			<div id="logo">CodeVotes</div>
			<div className="elements" id="navbarelements">
				<a href="/">Home</a>
				<a href="login">Login</a>
				<a href="register">Register</a>
			</div>
		</nav>
    );
}