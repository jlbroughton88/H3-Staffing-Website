import React from "react";
import DownArrow from "../icons/downArrow.js";
import "./Home1.scss";
import { Link } from "react-router-dom";

const Home1 = () => {
    return (
        <div className="home1Mother">

            <div className="home1Main">
                <div className="home1HeadDiv">
                    <h2>or</h2>
                </div>
                <div className="home1CTADiv">
                    <Link to="/jobs/#!/search?page=1">
                        <button className="home1CTA">Find A Job</button>
                    </Link>
                    
                </div>
                <div className="arrowDiv">
                    <DownArrow className="downArrow"/>
                </div>
            </div>
        </div>
    )
}

export default Home1;