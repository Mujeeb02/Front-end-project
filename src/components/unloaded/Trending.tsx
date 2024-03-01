import React, { useState } from 'react'
import Card from "./Card"
import noimage from '/noimage.jpg'
import { Link } from 'react-router-dom'
const Trending = ({trend,func}) => {
    const[more,setmore]=useState(false)
    function morehandler(){
        setmore(true);
    }
    function changeHandler(e) {
        console.log(e.target.value);
        func(e.target.value);
    }
  return (
    <div className='text-white mt-2 ml-2'>
      <div className='flex justify-between text-black '>
        <h1 className='text-2xl font-semibold'>Trending</h1>
        <select name="" id="" className='mr-4 rounded w-[10%] outline-none flex justify-center items-center' onChange={changeHandler}>
            <option value="movie">movie</option>
            <option value="tv">tv</option>
            <option value="all">all</option>
        </select>

      </div>
      <div className='h-[40vh] text-black flex overflow-auto gap-5 mt-2 '>
        {trend.map((s, i) => (
            <Link to={`/details/${s.id}`} key={i} className="flex-shrink-0 w-[30vh] h-[80%] bg-red-200 rounded-lg">
            <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/w500/${s.backdrop_path || s.profile_path}` : noimage} alt={s.name || s.title || s.original_title || s.original_name} className="w-full h-[40%] object-cover rounded" />
            <div className="p-4">
                <h1 className="text-xl font-bold">{s.name || s.title || s.original_title || s.original_name}</h1>
                <p className='h-[30%]'>
                {more
                    ? s.overview
                    : `${s.overview.slice(0, 50)}...`
                }
                {!more && (
                    <Link to={`/details/`} onClick={morehandler} className='text-purple-400'>
                    more
                    </Link>
                )}
                </p>
            </div>
            </Link>
        ))}
</div>

    </div>
  )
}

export default Trending
