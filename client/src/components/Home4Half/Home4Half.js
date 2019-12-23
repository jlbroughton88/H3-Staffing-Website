import React from "react";
import "./Home4.scss";

const Home4 = () => {
    return (
        <div className="home4Mother">
            <div className="home4Main">
                <div className="home4HeadDiv">
                    <h2 className="home4Head">How can we help?</h2>
                </div>
                <div className="servicesGridDiv">
                    <div className="servicesGrid">
                        <div className="serviceDiv">
                            <h3 className="serviceHead">Permanent Placements</h3>
                            <p className="servicePara">Looking for that long term answer  to be an integral part of your  business?</p>
                        </div>
                        <div className="serviceDiv">
                            <h3 className="serviceHead">Contract Services</h3>
                            <p className="servicePara">Have a short term need?  Want to ensure that you have  the right cultural fit to go along  with the skills required?</p>
                        </div>
                        <div className="serviceDiv">
                            <h3 className="serviceHead">Consultants</h3>
                            <p className="servicePara">Whether you prefer the flexibility  of contract work, or the stability  of full-time placement, we're here  to help you find it.</p>
                        </div>
                    </div>
                </div>
                <div className="letsTalkDiv1">
                    <div className="letsTalkHeadDiv">
                        <h2 className="letsTalkHead">Lets make it happen.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4;