import React, { useEffect } from "react";
import {useState} from "react";
import "./Home2.scss";
import CheckMark from "../icons/checkMark.js";

const Home2 = () => {
    const [currentSlide, setSlide] = useState("seeker");
    let currentArr = [];

    const seekerEmployerArray = {
            seeker : [
                "Completely free for job seekers.",
                "Dedicated to getting you a great role.",
                "Close relationships to important decision makers."
            ],

            employer: [
                "Employer sample phrase 1",
                "Employer sample phrase 2",
                "Employer sample phrase 3"
            ]
    }

    useEffect(() => {
        let seekerSlide = document.getElementById("seekerBtn");
        seekerSlide.classList.add("active");
    }, [])


    const handleSeekerClick = () => {
        let seekerSlide = document.getElementById("seekerBtn");
        let employerSlide = document.getElementById("employerBtn");

        setSlide("seeker");
        employerSlide.classList.remove("active")
        seekerSlide.classList.add("active");
    }

    const handleEmployerClick = () => {
        let seekerSlide = document.getElementById("seekerBtn")
        let employerSlide = document.getElementById("employerBtn");

        setSlide("employer")
        seekerSlide.classList.remove("active")
        employerSlide.classList.add("active");
    }


    if(currentSlide === "seeker") {
        currentArr = seekerEmployerArray.seeker;
    } else if(currentSlide === "employer") {
        currentArr = seekerEmployerArray.employer
    }

    return (
        <div className="home2Mother">
            <div className="home2Main">
                    <div className="discoverHeadDiv">
                        <h1 className="discoverHead">Discover The</h1>
                    </div>

                    <div className="seekerEmployeeDiv">
                        <div className="seekerEmployerSlider">
                            <button onClick={handleSeekerClick} id="seekerBtn" className="slideBtn seekerSlide">Job Seeker</button>
                            <button onClick={handleEmployerClick} id="employerBtn" className="slideBtn employerSlide">Employer</button>
                        </div>
                    </div>

                    <div className="checkListDiv">
                        <div className="checkListParent">
                            <div className="checkList">

                                {
                                    currentArr.map(item => 
                                        <div className="checkListItemParent" key={item}>
                                            <div className="checkListItem">
                                                <div className="iconDiv">
                                                    <CheckMark className="checkListIcon" />
                                                </div>
                                                <p className="checkListPara">{item}</p>
                                            </div>
                                        </div>
                                    )
                                }
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
                                    relationships with everyone we meet, to listen deeply, and to <strong>honestly care</strong>.
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