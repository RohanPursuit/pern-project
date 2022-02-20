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
            <Link to="/cart">
                Cart
            </Link>
            <Link to="/vender/products">
                My Products
            </Link>
            <Link to="/user/signin">
                Sign In
            </Link>
        </nav>
    )
}

export default NavBar;