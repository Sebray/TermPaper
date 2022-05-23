import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {DataProviderUsers} from "../services/DataProviderUsers";
import {useAuth} from "../hooks/useAuth"
import {useNavigate} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import StepOne from "../components/forms/StepOne";
const LoginPage = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        login: "",
        password: "",
        email: "",
        role: "",
    })
    const [error, setError] = useState(false)
    const [validated, setValidated] = useState(false);

    const changeError = () =>{
        if(error)
            setError(!error);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            DataProviderUsers.getUserByrEmailAndPassword(user.email, user.password).then((val) => {
                setUser(val);
                signIn(user, ()=>{defineNavigate(val.role)})
            }).catch(() => setError(true))
        }
    };

    const defineNavigate = (role) => {
        if (role === "Соискатель")
            return (navigate('/vacancies', {replace: true}))
        else if (role === "Компания")
            return (navigate('/resumes', {replace: true}))
    }

    return (
        <Container>
            <Row>
                <Col  md={{ span: 4, offset: 4 }} className="custom-margin">
                    <Card className="" style={{marginTop:"15%"}} >
                        <Form noValidate validated={validated}  className="was-validated px-2 shadow-lg rounded-3"
                              onSubmit={handleSubmit} onClick={changeError}>
                            <h2>Вход</h2>
                            {error && <span className="mb-3" style={{color:"red"}}>Введён неправильный логин или пароль</span>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Электронная почта</Form.Label>
                                <Form.Control name="email" onChange={handleChange}
                                              type="email" placeholder="Введите электронную почту"
                                              required/>
                                <Form.Control.Feedback type="invalid">
                                    Введите корректный адрес электронной почты
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control name="password" onChange={handleChange}
                                              type="password" placeholder="Пароль"
                                              required/>
                                <Form.Control.Feedback type="invalid">
                                    Введите пароль
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button className="mb-3 float-end"  variant="primary" type="submit">
                                Войти
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export {LoginPage};