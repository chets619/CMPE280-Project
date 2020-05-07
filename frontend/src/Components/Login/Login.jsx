import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Login.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import configs from '../../config';
import axios from "axios";
const jwt_decode = require('jwt-decode');

let Login = (props) => {

    const [data, setData] = useState({});

    const loginUser = async (e) => {
        e.preventDefault();

        let reqData = { ...data };

        try {
            let a = await axios.post(configs.connect + '/login', reqData);

            if (a.data.success) {

                sessionStorage.setItem("token", a.data.token);

                var decoded = jwt_decode(a.data.token);
                sessionStorage.setItem("user_id", decoded._id);
                sessionStorage.setItem("useremail", decoded.email);

                if (decoded.email == "admin")
                    props.history.push("/reportwildfire");
                else
                    props.history.push("/profile/" + decoded._id);
            }
            else
                alert(a.data.error);

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="container">
            <div className="login-container border border-info p-3 col-lg-5 col-sm-12 m-auto">
                <center><h2 className="">Login</h2></center>

                <Form className="p-5" onSubmit={e => loginUser(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name="email" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="pw" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

}
export default Login;