import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navMother">
            <div className="navMain">
                <div className="navLeftSide">
                    <div className="logoDiv">
                        <Link to="/" >Logo</Link>
                    </div>
                </div>
                <div className="navRightSide">
                    <div className="linksDiv">
                        <Link to="#">Jobs</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;