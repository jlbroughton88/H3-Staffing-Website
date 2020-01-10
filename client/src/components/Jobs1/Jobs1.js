import React, { Component, useEffect, useState } from "react";
import "./Jobs1.scss";
import axios from "axios"
import { Helmet } from "react-helmet";
import loadjs from "loadjs";

const Jobs1 = () => {

    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadjs(['https://bb3jobboard.topechelon.com/job_board.js'])
         setLoading(true)
        console.log(mounted)
         localStorage.setItem("mounted-state", JSON.stringify(mounted))

    }, []);

    console.log(loading)



    const handleClick = () => {
        window.location.reload(true);
    }

    return (
        <div className="jobs1Mother">
            <div className="jobs1Main">
                <button className="loadJobBoardBtn" onClick={handleClick}>Load Job Board</button>
                <div id="jb--job-board" api-key="a933e68070daf890"></div>
            </div>
        </div>

    )
}

export default Jobs1;