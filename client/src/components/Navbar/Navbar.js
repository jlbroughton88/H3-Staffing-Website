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
            <Link to="/" className="logo">
              H3 Staffing
            </Link>
          </div>
        </section>
        <section className="rightNav">
          <div className="loginLogoutSect">
            {!isLoading && !user && (
              <div className="loggedOutSect">
                <div className="navLogIn" onClick={loginWithRedirect}>
                  Log In
                </div>
              </div>
            )}
            {!isLoading && user && (
              <div className="loggedInSect">
                <Link className="navPicLink" to="/profile">
                  <img
                    className="navPicture"
                    src={user.picture}
                    alt={
                      user.given_name
                        ? user.given_name
                        : user.nickname + "'s picture"
                    }
                  ></img>
                </Link>
                <div className="navLogOut" onClick={logout}>
                  {" "}
                  Log Out
                </div>
                {(user.email === "jlbroughton88@gmail.com" || user.email === "ablue@h3staffing.com" || user.email === "deberry@deberrycompany.com") && (
                  <Link className="blogPostLink" to="/blogpost">
                    <div className="blogPostBtn">Post Blog</div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
