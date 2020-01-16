import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footerMother">
            <div className="footerMain">
                <div className="footerBar">
                    <div className="footerLinks">
                        <div className="companyArea">
                            <h3 className="companyHead">Company</h3>
                            <p className="companyPara">About Us</p>
                            <p className="companyPara">Blog</p>
                        </div>
                        <div className="careersArea">
                            <h3 className="careersHead"> Careers</h3>
                            <p className="careersPara">Search Jobs</p>
                            <p className="careersPara">Join Our Talent Network</p>
                        </div>
                        <div className="connectArea">
                            <h3 className="connectHead">Connect With Us</h3>
                            <p className="connectPara">704-999-9999</p>
                            <p className="connectPara">h3staffing@gmail.com</p>
                            <div className="socialsArea">
                                <p>O</p>
                                <p>O</p>
                                <p>O</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="legalDiv">
                        <p className="legalPara">All Rights Reserved © 2020 | H3 Staffing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;