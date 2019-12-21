import React from "react";
import "./Home2.scss";

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
                        <div className="checkList">
                            <div className="checkListItem">
                                <div className="checkListIcon">Icon</div>
                                <p className="checkListPara">Completely free for job seekers.</p>
                            </div>
                            <div className="checkListItem">
                                <div className="checkListIcon">Icon</div>
                                <p className="checkListPara">Dedicated to getting you a great role.</p>
                            </div>
                            <div className="checkListItem">
                                <div className="checkListIcon">Icon</div>
                                <p className="checkListPara">Close relationships to important decision makers.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Home2;