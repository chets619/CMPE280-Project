import React, { useState, useEffect, Fragment, useMemo } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import "./Header.scss";
import { Logo } from "./logo.png"
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import '../../i18n';

let Header = (props) => {
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [t, i18n] = useTranslation();

    const onLogout = (e) => {
        console.log('props', props)
        sessionStorage.clear();
        setLoggedIn(false);
    }

    return (
        <header className="header d-flex flex-row justify-content-between row m-0">
            <div className="d-flex justify-content-between col-sm-3">
                <NavLink exact className="item mx-3 p-3 logo" activeClassName="" to="/">
                    WildFire
                </NavLink>
            </div>
            <div className="d-flex justify-content-end col-sm-9">
                {
                    sessionStorage.getItem("useremail") == null ?
                        <Fragment>
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/about">{t("About")}</NavLink>
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/register">{t("Register")}</NavLink>
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/login">{t("Login")}</NavLink>
                        </Fragment>
                        : <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/" onClick={e => onLogout()}>{t("Logout")}</NavLink>
                }

                <Form.Group controlId="exampleForm.ControlSelect1" className="m-0 d-flex align-items-center">
                    <Form.Control as="select" onChange={e => {
                        i18n.changeLanguage(e.target.value);

                    }}>
                        <option selected value="en">English</option>
                        <option value="hin">Hindi</option>
                        <option value="ger">German</option>
                    </Form.Control>

                </Form.Group>

            </div>
        </header>
    )

}
export default withRouter(Header);