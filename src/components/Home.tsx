// import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidenav from "./unloaded/Sidenav";
import Topnav from "./unloaded/Topnav";
const Home = () => {
    document.title="Movie App"
    return (
        <>
        <Sidenav></Sidenav>
        <div className="w-[80%] h-full  ">
            <Topnav></Topnav>
        </div>
        </>
    );
};

export default Home;
