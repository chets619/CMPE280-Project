import React, { useState, useEffect, Fragment, useMemo } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import "./Header.scss";
import { Logo } from "./logo.png"

let Header = (props) => {
    const [searchText, setSearchText] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

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
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/about">About</NavLink>
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/register">Register</NavLink>
                            <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/login">Login</NavLink>
                        </Fragment>
                        : <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/" onClick={e => onLogout()}>Logout</NavLink>
                }

            </div>
        </header>
    )

}
export default withRouter(Header);