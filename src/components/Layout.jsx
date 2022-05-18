import {Link, NavLink, Outlet} from 'react-router-dom';
import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Footer} from "./Footer";
const Layout = () => {
    return (
        <div>
            <Navbar className="top-0"  bg="dark" variant="dark" expand="sm" collapseOnSelect>
                <Navbar.Brand style={{marginLeft:"3%"}}>
                    <NavLink className="nav-link text-decoration-none text-reset" to="/">Possibility finder</NavLink>
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse style={{marginRight:"2%"}}>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/login">Войти</NavLink>
                        <NavLink className="nav-link" to="/signup">Регистрация</NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <main style={{minHeight:"83.1vh"}}>
                <Outlet />
            </main>

            <Footer/>
        </div>
    )
}

export {Layout}