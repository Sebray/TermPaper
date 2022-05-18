import {Link, NavLink} from 'react-router-dom';
import {Container, Nav, NavItem, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
    return (
        <div
            className="container-fluid p-2 mx-0 bg-dark text-white" >
                  {/*<div className="mt-md-0 mt-3 text-sm-center">  fixed-bottom
                        <h6>Possibility finder</h6>
                        <p>Веб-приложение по поиску работы и сотрудников.</p>
                  </div>
            <hr/>*/}
            <Nav className="m-0 opacity-50">
                <div className="py-2 px-1">© 2022 Copyright:</div>
                <Nav.Link className="nav-link text-decoration-none text-reset" href="https://vk.com/sebray"> Свиридов Андрей</Nav.Link>
            </Nav>
        </div>
    );
};

export {Footer};