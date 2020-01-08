import React, { Component, useEffect, useState } from "react";
import "./Jobs1.scss";
import axios from "axios"

const Jobs1 = () => {

    const [ mounted, setMounted ] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        
    }, []);

    const handleClick = () => {
        window.location.reload(true);
    }

    return (
        <div>
            <button onClick={handleClick}>click</button>
            <div id="jb--job-board" api-key="a933e68070daf890"></div>
        </div>
        
    )
}

export default Jobs1;