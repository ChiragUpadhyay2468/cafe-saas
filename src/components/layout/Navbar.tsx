export default function Navbar () {
    return(

        <nav className="navbar">
            <h2 className="logo">CafeOS</h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button className="primary-btn">
                Order Now
            </button>
        </nav>
    );
}