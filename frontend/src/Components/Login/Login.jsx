import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Login.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let Login = (props) => {

    return (
        <div className="container">
            <div className="login-container border border-info p-3 col-lg-5 col-sm-12 m-auto">
                <center><h2 className="">Login</h2></center>

                <Form className="p-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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