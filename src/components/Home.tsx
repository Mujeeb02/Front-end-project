// import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidenav from "./unloaded/Sidenav";
import Topnav from "./unloaded/Topnav";
import Header from "./unloaded/Header";
import axios from '../utils/axios'
import { useEffect, useState } from "react";
import Trending from "./unloaded/Trending";
const Home = () => {
    document.title = "Movie App"
    const [wallpaper, setWallpaper] = useState(null);
    const [trendingData, setTrendingData] = useState([]);
    const [type, setType] = useState("all");

    function category(ctg) {
        console.log(ctg);
        setType(ctg);
    }

    const getwallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let random = data.results[Math.floor(Math.random() * data.results.length)];
            setWallpaper(random);
            // settrendingData(data.results); // Uncomment this line if you want to set trendingData
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const gettype = async () => {
        try {
            const { data } = await axios.get(`/trending/${type}/day`);
            let random = data.results[Math.floor(Math.random() * data.results.length)];
            setTrendingData(data.results);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        !wallpaper && getwallpaper();
        gettype();
        // category(); // Comment or remove this line if you don't want to call category() immediately
    }, [type, wallpaper]);


    return wallpaper ? (
        <>
            <Sidenav></Sidenav>
            <div className="w-[80%] h-full overflow-auto ">
                <Topnav></Topnav>
                <Header wallpaper={wallpaper}></Header>
                <Trending trend={trendingData} func={category} />
            </div>
        </>
    ) : <h1>Loading...</h1>
};

export default Home;
