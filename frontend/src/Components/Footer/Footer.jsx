import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";

let Footer = (props) => {

    return (
        <footer className="footer p-3 d-flex flex-row justify-content-between row">
            <div className="col-sm-3 footer-col">
                <div className="logo-img mb-2">WildFire</div>
                <div className="col-sm-12">
                    App to keep track of wildfires at locations and register to stay updated
              </div>
                <div className="icon-app col-sm-12">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGoogle} />
                </div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">Navigation:</h4>
                <br />
                <div>Home</div>
                <div>How it works</div>
                <div>Pricing</div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">Useful Links:</h4>
                <br />
                <div>My Account</div>
                <div>About Us</div>
                <div>FAQ</div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">Contact Details:</h4>
                <br />
                <div>SJSU Campus, San Jose, California - 95126</div>
                <div>Phone: +1-123-456-7890</div>
                <div>Email: help@wildfire.com</div>
            </div>
        </footer >
    )

}
export default Footer;