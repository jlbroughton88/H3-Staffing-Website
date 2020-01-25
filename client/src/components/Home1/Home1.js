import React from "react";
import DownArrow from "../icons/downArrow.js";
import "./Home1.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth-context.js"

const Home1 = () => {

    const { user } = useAuth0();

  return (
    <div className="home1Mother">

    {/* { user && (
      <div className="noticeDiv">
        <h1 className="noticeH1">
          &nbsp; Safari users will be logged out on refresh due to Safari's
          recent crackdown on cross-site cookie tracking. Auth0 is working on a
          solution for this, but until then, being logged out only occurs on
          Safari.
        </h1>
      </div>
    )} */}


      <div className="home1Main">
        <div className="home1HeadDiv">
          <h2 className="home1Head">or</h2>
        </div>
        <div className="home1CTADiv">
          <Link to="/jobs/#!/search?page=1">
            <button className="home1CTA">Find A Job</button>
          </Link>
        </div>
        <div className="arrowDiv">
          <DownArrow className="downArrow" />
        </div>
      </div>
    </div>
  );
};

export default Home1;
