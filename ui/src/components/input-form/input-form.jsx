import React, { useState } from "react";
import axios from "axios";

import "./input-form.css"

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

import {useAppStore} from "../../store/AppStoreProvider";


function InputForm() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const appStore = useAppStore();

    const [data, setData] = useState({
        neck: 0,
        wrist: 0,
        forearm: 0,
        biceps: 0,
        belly: 0,
        hip: 0,
        ankle: 0,
        shin: 0,
        shoulder: 0,
        breast: 0,
        pelvis: 0
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bodyData = {
            neck: data.neck,
            wrist: data.wrist,
            forearm: data.forearm,
            biceps: data.biceps,
            belly: data.belly,
            hip: data.hip,
            ankle: data.ankle,
            shin: data.shin,
            shoulder: data.shoulder,
            breast: data.breast,
            pelvis: data.pelvis
        };
        appStore.addParams(bodyData);
        console.log(JSON.stringify(bodyData));
        axios.post("http://localhost:8080/api/v1/params", JSON.stringify(bodyData), {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.status, response.data.token);
        });
    };
    return (
        <Form className="w-1/3 form" onSubmit={handleSubmit}>
            <label className="w-100 text-center p-3 fw-bold">Введите ваши параметры:</label>
            <FloatingLabel className="inputForm" controlId="neck" label="шея">
                <Form.Control type="number" defaultValue="0" name="neck"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="wrist" label="запястье" >
                <Form.Control type="number" defaultValue="0" name="wrist"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="forearm" label="предплечье" >
                <Form.Control type="number" defaultValue="0" name="forearm"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="biceps" label="бицепс" >
                <Form.Control type="number" defaultValue="0" name="biceps"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="belly" label="талия" >
                <Form.Control type="number" defaultValue="0" name="belly"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="hip" label="бедро">
                <Form.Control type="number" defaultValue="0" name="hip" onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="ankle" label="лодыжка" >
                <Form.Control type="number" defaultValue="0" name="ankle"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="shin" label="голень" >
                <Form.Control type="number" defaultValue="0" name="shin"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="shoulder" label="плечо" >
                <Form.Control type="number" defaultValue="0" name="shoulder"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="breast" label="грудь" >
                <Form.Control type="number" defaultValue="0" name="breast"
                              onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel className="inputForm" controlId="pelvis" label="таз" >
                <Form.Control type="number" defaultValue="0" name="pelvis"
                              onChange={handleChange}/>
            </FloatingLabel>
            <div className="flex gap-2 p-2">
                <Button className="w-1/2 " variant="dark" type="submit" >
                    Сохранить
                </Button>
                <Button className="w-1/2" variant="dark" type="reset">
                    Отмена
                </Button>
            </div>

        </Form>
    );
}

export default InputForm;