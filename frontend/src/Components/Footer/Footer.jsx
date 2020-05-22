import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';
import '../../i18n';

let Footer = (props) => {
    const [t, i18n] = useTranslation();

    return (
        <footer className="footer p-3 d-flex flex-row justify-content-between row">
            <div className="col-sm-3 footer-col">
                <div className="logo-img mb-2">WildFire</div>
                <div className="col-sm-12">
                    {t("FooterDesc")}
                </div>
                <div className="icon-app col-sm-12">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGoogle} />
                </div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">{t("Navigation")}:</h4>
                <br />
                <div>{t("Home")}</div>
                <div>{t("How it works")}</div>
                <div>{t("Pricing")}</div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">{t("Useful Links")}:</h4>
                <br />
                <div>{t("My Account")}</div>
                <div>{t("About Us")}</div>
                <div>{t("FAQ")}</div>
            </div>
            <div className="col-sm-3 footer-col">
                <h4 className="lightblue">{t("Contact Details")}:</h4>
                <br />
                <div>SJSU Campus, San Jose, California - 95126</div>
                <div>Phone: +1-123-456-7890</div>
                <div>Email: help@wildfire.com</div>
            </div>
        </footer >
    )

}
export default Footer;