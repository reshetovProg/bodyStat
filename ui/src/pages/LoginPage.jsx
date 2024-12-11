import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

// import {useAppStore} from "../../store/AppStoreProvider";

function LoginPage(){

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const appStore = useAppStore();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bodyUser = {
            email: user.email,
            password: user.password
        };
        // console.log(JSON.stringify(bodyData));
        axios.post("http://localhost:8081/api/v1/auth/login", JSON.stringify(bodyUser), {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.status, response);
        });
    };

    return (
        <div>
            <Form className="w-1/3 form" onSubmit={handleSubmit}>
                <label className="w-100 text-center p-3 fw-bold">Введите ваши параметры:</label>
                <FloatingLabel className="inputForm" controlId="email" label="email">
                    <Form.Control type="email" name="email"
                                  onChange={handleChange}/>
                </FloatingLabel>
                <FloatingLabel className="inputForm" controlId="password" label="password">
                    <Form.Control type="password" name="password"
                                  onChange={handleChange}/>
                </FloatingLabel>
                <div className="flex gap-2 p-2">
                    <Button className="w-1/2 " variant="dark" type="submit" >
                        Войти
                    </Button>
                    <Button className="w-1/2" variant="dark" type="reset">
                        Отмена
                    </Button>
                </div>
            </Form>
        </div>

    )
}

export default LoginPage;
