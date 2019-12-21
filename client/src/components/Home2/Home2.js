import React from "react";
import "./Home2.scss";
import CheckMark from "../icons/checkMark.js";

const Home2 = () => {
    return (
        <div className="home2Mother">
            <div className="home2Main">
                    <div className="discoverHeadDiv">
                        <h1 className="discoverHead">Discover The</h1>
                    </div>



                    <div className="seekerEmployeeDiv">
                        <div className="seekerEmployerSlider">
                            <button className="seekerSlide">Job Seeker</button>
                            <button className="employerSlide">Employer</button>
                        </div>
                    </div>



                    <div className="checkListDiv">
                        <div className="checkListParent">
                            <div className="checkList">
                                <div className="checkListItemParent">
                                    <div className="checkListItem">
                                    <div className="iconDiv">
                                        <CheckMark className="checkListIcon" />
                                        </div>
                                        <p className="checkListPara">Completely free for job seekers.</p>
                                    </div>
                                </div>

                                <div className="checkListItemParent">
                                    <div className="checkListItem">
                                    <div className="iconDiv">
                                        <CheckMark className="checkListIcon" />
                                        </div>
                                        <p className="checkListPara">Dedicated to getting you a great role.</p>
                                    </div>
                                </div>

                                <div className="checkListItemParent">
                                    <div className="checkListItem">
                                        <div className="iconDiv">
                                            <CheckMark className="checkListIcon" />
                                        </div>
                                        <p className="checkListPara">Close relationships to important decision makers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="coreValuesParent">
                        <div className="valuesHeadDiv">
                            <h1 className="valuesHead">Our Core Values</h1>
                        </div>
                        
                        <div className="valuesContent">
                            <div className="valuesParaDiv">
                                <div className="valuesPara">
                                    Our clients and candidates are our only concern. They are why we exist. 
                                    Everything we do is to help our clients find superior talent and our candidates
                                    realize their career ambitions.   <br/><br/>Our job at H3 is very simple: to build lasting
                                    relationships with everyone we meet, to listen deeply, and to honestly care.
                                </div>
                            </div>

                            <div className="valuesListDiv">
                                <div className="valuesList">
                                    <div className="valueItem">Diligence</div>
                                    <div className="valueItem">Integrity</div>
                                    <div className="valueItem">Genuine</div>
                                    <div className="valueItem">Responsiveness</div>
                                    <div className="valueItem">Synergistic</div>
                                    <div className="valueItem">Professionalism</div>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
            </div>
    )
}

export default Home2;