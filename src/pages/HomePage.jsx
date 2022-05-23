import React from 'react';
import {Button, Container, Nav, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="text-white p-0 mx-0 " style={{minHeight: "inherit", height:1}}>
            <div className="d-flex align-items-stretch" style={{minHeight: "70%"}}>

                <div  className="d-flex container-fluid bg-danger">
                    <div className="m-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <h2 >Ищите подходящую работу</h2>
                    </div>
                </div>
                <div  className="d-flex container-fluid bg-warning">
                    <div className="m-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor"
                             className="bi bi-people" viewBox="0 0 16 16">
                            <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                        <h2 >Находите новых сотрудников</h2>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center bg-info" style={{minHeight: "30%"}}>
                <NavLink className="m-auto text-decoration-none" to="/vacancies">
                    <Button className="shadow-lg" style={{backgroundColor:"#a00306b"}}>
                        <h4>Перейти</h4>
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export {HomePage};