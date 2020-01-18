import React from "react";
import "./Home3.scss";
import Img1 from "../images/img1.jpg";

const Home3 = () => {
    return (
        <div className="home3Mother">
            <div className="home3Main">
                <div className="overviewHeadDiv">
                    <h2 className="overviewHead">A Brief Overview of H3 Staffing</h2>
                </div>
                
                <div className="overviewSectParent">
                    <div className="overviewSect">
                        <div className="overviewImgSect2">
                       <div className="overviewParaDiv2">
                                <p className="overviewPara2">At H3 Staffing we work hard to understand your complex staffing needs and work
                                    efficiently to find the perfect marriage between employer and employee. <br/><br/>  Having
                                    a combined total of <strong>10 years</strong> of Staffing experience, our mission is to build
                                    meaningful relationships. It’s what we’re about. <br/><br/> We’ve got connections that
                                    count, experience that makes all the difference, deep working relationships
                                    that matter and the right recruiting team who’s got your back.
                                </p>
                            </div>
                            <img className="overviewImg2" src={Img1} alt="Women sitting with computers"></img>
                        </div>


                        <div className="overviewParaDiv">
                            <p className="overviewPara">At H3 Staffing we work hard to understand your complex staffing needs and work
                                efficiently to find the perfect marriage between employer and employee. <br/><br/>  Having
                                a combined total of <strong>10 years</strong> of Staffing experience, our mission is to build
                                meaningful relationships. It’s what we’re about. <br/><br/> We’ve got connections that
                                count, experience that makes all the difference, deep working relationships
                                that matter and the right recruiting team who’s got your back.
                            </p>
                        </div>
                        <div className="briefSect">
                            <div className="briefDiv">
                                <h3 className="briefHead">We Provide Consistent, Professional, Quality Service</h3>
                                <p className="briefPara">We do whatever it takes to build client and consultant loyalty.</p>
                            </div>

                            <div className="briefDiv">
                                <h3 className="briefHead">We Take Care Of Our People</h3>
                                <p className="briefPara">We understand that our success is because of our people.</p>
                            </div>

                            <div className="briefDiv">
                                <h3 className="briefHead">We Work Together</h3>
                                <p className="briefPara">By working as a synchronized, organized team; we are able to provide a better, more professional service than anyone else.</p>
                            </div>
                        </div>           
                    </div>                        
                    <div className="overviewImgSect">
                        <img className="overviewImg" src={Img1} alt="Women sitting with computers"></img>
                    </div>
                </div>
                <div className="briefSect2">
                    <div className="briefDiv2">
                        <h3 className="briefHead2">We Provide Consistent, Professional, Quality Service</h3>
                        <p className="briefPara2">We do whatever it takes to build client and consultant loyalty.</p>
                    </div>

                    <div className="briefDiv2">
                        <h3 className="briefHead2">We Take Care Of Our People</h3>
                        <p className="briefPara2">We understand that our success is because of our people.</p>
                    </div>

                    <div className="briefDiv2">
                        <h3 className="briefHead2">We Work Together</h3>
                        <p className="briefPara2">By working as a synchronized, organized team; we are able to provide a better, more  professional service than anyone else.</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Home3;