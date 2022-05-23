import React, { useState } from "react";
import {Form, Card, Button, Container, Row, Col} from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwoResume = ({ nextStep, handleFormData, user }) => {
    //creating error state for validation
    const [errors, setErrors] = useState({
        login: "",
        email: "",
        role:"",
        password:"",
        password2: "",
    });

    const [password2, setPassword2] = useState("")

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        const newErrors = findFormErrors()
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
        }
        else {
            nextStep();
        }
    };

    const findFormErrors = () => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const { login, email, password } = user
        const newErrors = {}
        if ( !login || login === '' ) newErrors.login = 'Введите логин'
        if (!reg.test(email)) newErrors.email = 'Введите корректную почту'
        if ( !password || password === '' ) newErrors.password = 'Введите пароль'
        else if (password !== password2) newErrors.password2 = 'Пароли не совпадают'
        return newErrors
    }

    return (
        <Card className="" style={{marginTop: "15%"}}>
            <Form className="px-2 shadow-lg rounded-3"
                  onSubmit={submitFormData}>
                <h2>Регистрация</h2>
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control name="login" onChange={handleFormData("login")}
                                  placeholder="Введите логин"
                                  isValid={errors.login !== ""}
                                  isInvalid={!!errors.login}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.login}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control name="email" onChange={handleFormData("email")}
                                  placeholder="Введите электронную почту"
                                  isValid={errors.email !== ""}
                                  isInvalid={!!errors.email}/>
                    <Form.Control.Feedback type="invalid">
                        Введите корректный адрес электронной почты
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control name="password" onChange={handleFormData("password")}
                                  type="password" placeholder="Введите пароль"
                                  isValid={errors.password !== ""}
                                  isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password2" onChange={(e) => setPassword2(e.target.value)}
                                  type="password" className="" placeholder="Повторите пароль"
                                  isValid={errors.password2 !== "" && errors.password2 === errors.password}
                                  isInvalid={!!errors.password2}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.password2}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="">
                    <Form.Select className="mb-3 is-valid" name="role" defaultValue="Соискатель" onChange={handleFormData("role")}>
                        <option value="Соискатель">Соискатель</option>
                        <option value="Компания">Компания</option>
                        isInvalid={!!errors.role}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.role}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className="mb-4 float-end" variant="primary" type="submit">
                    Далее
                </Button>
            </Form>
        </Card>
    );
};

export default StepTwoResume;