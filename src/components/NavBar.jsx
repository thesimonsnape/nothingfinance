import React from 'react'
import Logo from '../assets/logo/nthfinance_logo.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='h-16 md:h-20 w-[350px] md:w-[700px] lg:w-[1200px] rounded-full fixed mt-10 flex justify-between items-center bg-transparent border border-[#363636] shadow-[#3838386a] shadow-md px-2 md:px-10 text-white z-10 backdrop-blur-sm'>
      <Link to='/'>
        <div className='flex items-center'>
            <img src={Logo} alt='logo' className='w-10 h-10'/>
            <h1 className='text-xl font-bold text-[11px] md:text-base hidden md:block'>Nothing Finance</h1>
        </div>
      </Link>
      <div className='flex gap-5 items-center md:-translate-x-2 text-slate-100 text-[11px] md:text-base font-semibold'>
          <Link to='/projects'>
            <div className='cursor-pointer hover:underline'>Protocols</div>
          </Link>
          <Link to='/tasks'>
            <div className='cursor-pointer hover:underline'>Tasks</div>
          </Link>
          <Link to='/leaderboard'>
            <div className='cursor-pointer duration-700 ease-in-out hover:underline'>Leaderboard</div>
          </Link>
      </div>
      <div>
          <button className='bg-slate-100 text-gray-900 font-semibold px-4 py-1 md:px-10 md:py-3 text-[11px] md:text-base rounded-full'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar