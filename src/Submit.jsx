import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

export default function Submit() {
    const [title, setTitle] = useState("");

    function handleChange(event) {
        switch(event.target.name) {
            case "title":
                setTitle(event.target.title);
                break;
            default:
                console.error("Oops! Something gone wrong with Form handling.")
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <NavBar />
            <br/><br/>
            <main className="container">
                <h1>Create new Post</h1>
                <form className="container" onSubmit={handleSubmit}>
                    <label for="title"><strong>Title</strong></label><br />
                    <input type="text" name="title" onChange={handleChange} /><br />
                    <input type="submit" value="Create" />
                </form>
            </main>
            <Footer />
        </>
    )
}