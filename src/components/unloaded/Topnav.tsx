import React, { useState } from "react"
import { Link } from "react-router-dom"
const Topnav=()=>{
    const[query,setquery]=useState("");
    return ( 
        <>
        <div className="w-[100%] h-[10vh] text-zinc-200 font-bold relative flex justify-center items-center">
            <i className="ri-search-2-line text-3xl text-zinc-400 "></i>
            <input onChange={(e)=>{setquery(e.target.value)}} value={query} type="text" className="w-[50%] text-zinc-200 border-none outline-none bg-transparent text-xl mx-10 p-5" placeholder="search anything"/>
            {query.length>0 && <i onClick={()=>{setquery("")}} className="ri-close-circle-fill text-3xl text-zinc-400 hover:cursor-pointer"></i>}
            <div className="absolute w-[50%] mx-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-lg">
                {/* <Link className="hover:text-black hover:bg-zinc-400 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-2 border-zinc-100">
                    <img src="" alt="" />
                    <span>Hello</span>
                </Link> */}
            </div>
        </div>
        
        </>
    )
}
export default Topnav