import React from 'react';
import {Container, Nav, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"

const HomePage = () => {
    return (
        <div className="flex-wrap position-relative text-white p-0 mx-0"  style={{minHeight:"inherit"}} >
        <div className="d-flex align-items-stretch">
            <div className="container bg-danger">
                <h6>Possibility finder</h6>
                <p>Веб-приложение по поиску работы и сотрудников.</p>
            </div>
            <div className="container bg-warning">
                <h6>Possibility finder</h6>
                <p>Веб-приложение по поиску работы и сотрудников.</p>
            </div>

        </div>
            <div className="container-fluid bg-info">
                fdfd
            </div>
        </div>
    );
};

export {HomePage};