import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function NavBar() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container className="Nav">
            <Nav.Link className="Logo" href="/">
                VVEN
            </Nav.Link>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                    <Nav.Link href="/products">
                         Products
                    </Nav.Link>
                    <Nav.Link href="/cart">
                         Cart
                    </Nav.Link>
                    <Nav.Link href="/vendor/products">
                         My Products
                    </Nav.Link>
                    <Nav.Link href="/user/signin">
                         Sign In
                     </Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        // <nav className="Nav">
        //     <Link className="Logo" to="/">
        //         VVEN
        //     </Link>
        //     <DropDown>
        //     <DropDown.Toggle><List/></DropDown.Toggle>
        //     <DropDown.Menu>
        //     <Link className="Products" to="/products">
        //         Products
        //     </Link>
        //     <Link className="Cart" to="/cart">
        //         Cart
        //     </Link>
        //     <Link className="Vender-products" to="/vendor/products">
        //         My Products
        //     </Link>
        //     <Link className="Sign In" to="/user/signin">
        //         Sign In
        //     </Link>
        //     </DropDown.Menu>
        //     </DropDown>
        // </nav>
    )
}

export default NavBar;