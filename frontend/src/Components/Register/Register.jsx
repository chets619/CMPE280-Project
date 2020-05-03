import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Register.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let Register = (props) => {

    return (
        <div className="login-container border border-info col-sm-12 m-auto p-4">
            <center><h2 className="">Register</h2></center>

            <div className="row mt-4">
                <div className="col-md-6 border-right">
                    <Form className="p-5">

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" />
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