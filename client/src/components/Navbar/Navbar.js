import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth-context";
import "./Navbar.scss";

const Navbar = () => {

    const { isLoading, loginWithRedirect, logout, user } = useAuth0();

    return (
        <nav className="navMother">
            <div className="navMain">
                <section className="leftNav">
                    <div className="logoDiv">
                        <Link to="/" className="logo">H3 Staffing</Link>
                    </div>
                </section>
                <section className="rightNav">
                    <div className="loginLogoutSect">
                        {!isLoading && !user && (
                            <div className="loggedOutSect">
                                <button className="navLogIn" onClick={loginWithRedirect}>Log In</button>
                            </div>
                        )}
                        {!isLoading && user && (
                            <div className="loggedInSect">
                                {/* <h2 className="navGreeting">Hello, {user.given_name ? user.given_name : user.nickname}!</h2> */}
                                <button className="navLogOut" onClick={logout}> Log Out</button>
                                <Link to="/profile">
                                    <img className="navPicture" src={user.picture} alt={user.given_name ? user.given_name : user.nickname + "'s picture"}></img>
                                </Link>

                            </div>
                        )}
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Navbar;