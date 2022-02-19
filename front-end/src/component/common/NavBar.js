import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav className="Nav">
            <Link to="/">
                Home
            </Link>
            <Link to="/products">
                Products
            </Link>
        </nav>
    )
}

export default NavBar;