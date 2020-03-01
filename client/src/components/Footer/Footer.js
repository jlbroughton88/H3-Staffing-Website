import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth-context";
// import LinkedinFooter from "../icons/linkedinFooter";
import InstagramFooter from "../icons/instagramFooter";
import FacebookFooter from "../icons/facebookFooter"
import "./Footer.scss";

const Footer = () => {
    
    const { user, loginWithRedirect } = useAuth0();

  return (
    <div className="footerMother">
      <div className="footerMain">
        <div className="footerBar">
          <div className="footerLinks">
            <div className="companyArea">
              <h3 className="companyHead">Company</h3>
              {/* <p className="companyPara">About Us</p> */}
              <Link to="/blog/all">
                  <p className="companyPara">Blog</p>
                  </Link>
            </div>
            <div className="careersArea">
              <h3 className="careersHead"> Careers</h3>
              <Link to="/jobs" ><p className="careersPara">Search Jobs</p></Link>
              { !user && (
                    <button className="talentNetworkBtn" onClick={loginWithRedirect}><p className="careersPara">Join Our Talent Network</p></button>
              )}
            </div>
            <div className="connectArea">
              <h3 className="connectHead">Connect With Us</h3>
              <p className="connectPara">704-999-9999</p>
              <a href="mailto:h3staffing@gmail.com?Subject=Website%20Inquiry">
                <p className="connectPara">h3staffing@gmail.com</p>
              </a>
              <section className="socialsDivFooter">
                   {/* <a href="https://www.linkedin.com/in/jacob-broughton-637189164/" className="linkedInDivFooter">
                        <LinkedinFooter/>
                    </a> */}
                    <a href="#" className="facebookDivFooter">
                        <FacebookFooter/>
                    </a>
                    <a href="#" className="instagramDivFooter">
                        <InstagramFooter/>
                    </a>
                </section>
            </div>
          </div>

          <hr />
          <div className="legalDiv">
            <p className="legalPara">
              All Rights Reserved © 2020 | H3 Staffing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
