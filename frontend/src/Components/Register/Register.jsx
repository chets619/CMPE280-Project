import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Register.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import configs from '../../config';
import axios from "axios";

let Register = (props) => {
    const [data, setData] = useState({});

    const registerUser = async (e) => {
        e.preventDefault();

        if (data.pw != data.pw2) {
            alert("Passwords do not match!");
            return;
        }

        let reqData = { ...data };
        delete reqData.pw2;

        try {
            let a = await axios.post(configs.connect + '/register', reqData);

            if (a.data.success)
                alert("Successfully Registered!");
            else
                alert(a.data.error);

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="login-container border border-info col-sm-12 m-auto p-4">
            <center><h2 className="">Register</h2></center>

            <div className="row mt-4">
                <div className="col-md-6 border-right">
                    <Form className="p-5" onSubmit={e => registerUser(e)}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="pw" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="pw2" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" name="phone" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>


                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6"></div>
            </div>

        </div>
    )

}
export default Register;