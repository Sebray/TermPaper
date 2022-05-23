import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "../components/forms/StepOne"
import StepTwoResume from "../components/forms/StepTwoResume";

const SignUpPage = () => {

    //state for steps
    const [step, setStep] = useState(1);

    //state for form data
    const [user, setUser] = useState({
        login: "",
        password: "",
        role: "Соискатель",
        email: ""
    })

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setStep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const {value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setUser(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


// javascript switch case to show different form in each step
    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (
                <div>
                    <Container>
                        <Row>
                            <Col  md={{ span: 4, offset: 4 }} className="custom-margin">
                                <StepOne nextStep={nextStep} handleFormData={handleInputData} user={user} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
            return (
                <div>
                    <Container>
                        <Row>
                            <Col  md={{ span: 8, offset: 2 }} className="custom-margin">
                                {(user.role === "Соискатель") &&
                                    <StepTwoResume nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData}
                                             values={user}/>
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        default:
            return (
                <div className="App">
                </div>
            );
    }
};

export {SignUpPage};