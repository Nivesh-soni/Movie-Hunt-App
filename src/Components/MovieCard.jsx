import React from 'react'
import './MovieCard.css'
const MovieCard = ({ Poster, Title ,Year ,theme}) => {
    return (
        <div className={`${theme === 'dark' ? 'bg-[#1e1e1e] border-transparent text-white' : 'bg-white text-black border-[#363636]'} border-2 bg-[#212121] w-[15rem] h-[20rem] flex justify-center items-center rounded-2xl cursor-pointer`}>
            <div className='h-[18rem] flex flex-col justify-between'>
                <div className='Movie-Card mb-0'>
                    <img className='rounded-t-2xl' src={Poster} alt={Title} />
                </div>
                <div className={`${theme === 'dark' ? 'text-white' : 'bg-white text-black'} text-center flex-1 flex items-center justify-center`}>
                    <h1 className='w-[150px]'>{Title}:({Year})</h1>
                </div>
            </div>
        </div>
    )
}

export default MovieCard 