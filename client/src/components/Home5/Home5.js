import React from "react";
import "./Home5.scss";
import Quotes from "../icons/quotes.js";

const Home5 = () => {

    const testiArray = [
        {
            testi: "nsectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "um dolor sit amenstur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            role: "Software Engineer"
        },
        {
            testi: "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "Lre et dolore magna aliqua. Ut enim ad minim ve quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qunostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. r. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "Lorem ipsum dolor sit amet, consectetuscing elit, se do eiusmod tempor incididunt ut labot dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ie velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Software Engineer"
        },
        {
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se iusmod tempor indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            role: "Software Engineer"
        },
        {
            testi: "Lorem ipsum dlor sit amet, consectetur adipiscing elit, se do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            role: "Software Engineer"
        },
    ]

    return (
        <div className="home5Mother">
            <div className="home5Main">
                <div className="home5HeadDiv">
                    <h1 className="home5Head">Testimonials</h1>
                </div>
                <div className="scrollingDiv">
                    {
                        testiArray.map(item =>
                            <div key={item.testi} className="testimonialBoxParent">
                                <Quotes className="quotes" />
                                <div className="testimonialBox">    
                                    <p className="testimonialPara"> {item.testi} </p>
                                </div>
                                <div className="testimonialRoleDiv">
                                    <p className="testimonialRole">{item.role}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home5;