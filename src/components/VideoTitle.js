import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-20 text-white bg-gradient-to-r from black '>
        <h1 className="text-6xl,font-bold">{title}</h1>
        <p className='text-lg py-6 w-1/2 '>{overview}</p>
        <div>
            <button className="bg-white text-black px-8 p-2 text-lg rounded-lg hover:bg-opacity-80">▶️Play</button>
            <button className="bg-gray-500 text-black px-8 p-2 text-lg bg-opacity-50 rounded-lg mx-2">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle