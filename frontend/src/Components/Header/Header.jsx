import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";
import { Logo } from "./logo.png"

let Header = (props) => {
    const [searchText, setSearchText] = useState("");

    return (
        <header className="header d-flex flex-row justify-content-between row m-0">
            <div className="d-flex justify-content-between col-sm-3">
                <NavLink exact className="item mx-3 p-3 logo" activeClassName="" to="/">
                    WildFire
                </NavLink>
            </div>
            <div className="d-flex justify-content-end col-sm-9">
                <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/about">Live Stats</NavLink>
                <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/register">Register</NavLink>
                <NavLink exact className="item mx-3 p-3" activeClassName="active" to="/login">Login</NavLink>
            </div>
        </header>
    )

}
export default Header;