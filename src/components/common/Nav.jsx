import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

const Nav = props => {
    console.log(props);
    return (
        <div className="m-3">
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        // className={
                        //     props.location.pathname === "/"
                        //         ? "nav-link active"
                        //         : "nav-link"
                        // }
                        className="nav-link"
                        exact
                        activeClassName="active"
                        activeStyle={{ color: "aqua" }}
                    >
                        کارهای روزمره
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        // className={
                        //     props.location.pathname === "/about"
                        //         ? "nav-link active"
                        //         : "nav-link"
                        // }
                        className="nav-link"
                        activeStyle={{ color: "aqua" }}
                    >
                        درباره سازنده
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Nav);
