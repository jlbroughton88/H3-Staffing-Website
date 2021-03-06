import React from "react";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";
import Home4Half from "../Home4Half/Home4Half";
import Home5 from "../Home5/Home5";
import Home6 from "../Home6/Home6";
import LetsTalk1 from "../LetsTalk1/LetsTalk1";
import Loading from "../Loading1/Loading1";
import { useAuth0 } from "../../contexts/auth-context";

const Home = () => {

    const { isLoading } = useAuth0();

    if(isLoading) {
        return  <Loading/>
    }

    return (
        <div>
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4Half/>
            <Home5/>
            <Home6/>
            <LetsTalk1/>
        </div>
    )
}

export default Home;