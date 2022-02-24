import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container className="Nav">
            <Nav.Link className="Logo" as={Link} to="/">
                VVEN
            </Nav.Link>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                    <Nav.Link as={Link} to="/products">
                         Products
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                         Cart
                    </Nav.Link>
                    <Nav.Link as={Link} to="/vendor/products">
                         My Products
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default NavBar;