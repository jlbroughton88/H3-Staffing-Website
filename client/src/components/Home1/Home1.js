import React from "react";
import DownArrow from "../icons/downArrow.js";
import "./Home1.scss";

const Home1 = () => {
    return (
        <div className="home1Mother">

            <div className="home1Main">
                <div className="home1HeadDiv">
                    <h2>or</h2>
                </div>
                <div className="home1CTADiv">
                    <button className="home1CTA">Find A Job</button>
                </div>
                <div className="arrowDiv">
                    <DownArrow className="downArrow"/>
                </div>
            </div>
            {/* <div id="jb--job-board" api-key="a933e68070daf890"></div> */}
        </div>
    )
}

export default Home1;