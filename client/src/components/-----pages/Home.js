import React from "react";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Home1/>
            <Home2/>
            <Home3/>
        </div>
    )
}

export default Home;