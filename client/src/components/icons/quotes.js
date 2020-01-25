import React from "react";

const quotes = () => {

    const style1 = {
        fillRule:"evenodd",
        clipRule:"evenodd",
        strokeLinejoin:"round",
        strokeMiterlimit:2,
       left: "-20px",
       top: "-9px"
    }

    const style2 = {
        fontFamily:'CorsivaHebrew',
        fontSize:"136.383px",
        fill:"#6cb144"
    }

    return (
        <svg width="12%" height="9%" viewBox="0 0 40 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" serif="http://www.serif.com/" style={style1}>
            <g transform="matrix(1,0.000239573,-0.000239573,1,-1.33333,0.0944216)">
                <text x="-4.986px" y="68.625px" style={style2}>
                    &quot;
                </text>
            </g>
        </svg>
    )
}

export default quotes;