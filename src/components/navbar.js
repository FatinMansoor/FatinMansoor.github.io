//import "./Navbar.css";
import "../styles/global.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <ul className="nav-links">
                <li><a href = "#about">About</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#Contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;