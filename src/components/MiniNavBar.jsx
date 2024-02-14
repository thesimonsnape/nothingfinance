import React from 'react'
import { Link } from 'react-router-dom'


const MiniNavBar = () => {
  return (
    <div className='h-16 md:h-20 w-[350px] md:w-[700px] lg:w-[1200px] rounded-full fixed mt-10 flex justify-between items-center bg-transparent border border-[#363636] shadow-[#3838386a] shadow-md px-2 md:px-10 text-white z-10 backdrop-blur-sm'>
      <div className='flex gap-5 items-center md:-translate-x-2 text-slate-100 text-[11px] md:text-base font-semibold'>
          <Link to='/tasks'>
            <div className='cursor-pointer hover:underline'>Tasks</div>
          </Link>
          <Link to='/leaderboard'>
            <div className='cursor-pointer duration-700 ease-in-out hover:underline'>Leaderboard</div>
          </Link>
      </div>
    </div>
  )
}

export default MiniNavBar