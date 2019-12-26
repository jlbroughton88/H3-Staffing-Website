import React from "react";
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
    
    const clickedStyle = (btn) => {
        btn.style.boxShadow = ("inset 2px 2px 2px rgba(51, 51, 51, 0.4)");
        btn.style.outline = "none";
        btn.style.border = "2px solid #4897fb";
        btn.style.color = "#2E5E9B";
        btn.style.fontSize = ".95rem";
    }

    const resetStyle = (btn) => {
        btn.style.boxShadow = "none";
        btn.style.outline = "none";
        btn.style.border = "2px lightgrey solid";
        btn.style.color = "#333";
        btn.style.fontSize = "1rem";
    }

    const handleSlideClick = (e) => {
       let slide = e.target.className;
       let clickedBtn = document.getElementsByClassName(slide);
        let buttons = document.getElementsByClassName("slideBtn");    
        
        for(let i = 0; i < buttons.length; i++) {
            console.log(clickedBtn[0])
            if(clickedBtn[0].className.includes("seekerSlide")) {
                clickedStyle(buttons[0]);
                resetStyle(buttons[1])
            } else if (clickedBtn[0].className.includes("employerSlide")) {
                clickedStyle(buttons[1]);
                resetStyle(buttons[0])
            }
        };

        if(slide.includes("seekerSlide") ){
            setSlide("seeker")
            return currentSlide
        } else if( slide.includes("employerSlide")) {
            setSlide("employer")
            return currentSlide;
        }           
        

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
                            <button onClick={handleSlideClick} id="seekerBtn" className="slideBtn seekerSlide">Job Seeker</button>
                            <button onClick={handleSlideClick} className="slideBtn employerSlide">Employer</button>
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