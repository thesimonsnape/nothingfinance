import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../assets/logo/nthfinance_logo.png'
import LeaderBoardTable from '../components/LeaderBoardTable';

const LandingPage = () => {
  return (
    <div className='w-full text-white flex flex-col justify-between '>
        <div className='flex justify-center items-center flex-col min-h-screen'>
            <div className='flex items-center'>
                <img src={Logo} alt='logo' className='w-12 h-12'/>
                <h1 className='text-2xl font-bold'>Nothing Finance</h1>
            </div>
            <div className='mt-10 text-center'>
                <h2 className='text-7xl font-semibold leading-tight tracking-wide'>Are you ready to</h2>
                <h2 className='text-7xl font-semibold leading-tight tracking-wide bg-gradient-to-r from-[#6458e2] to-[#b6a2ec] bg-clip-text text-transparent'>step into the void?</h2>
            </div>
            <div className='mt-14'>
                <button className='border border-gray-300 rounded-full px-5 py-3 flex items-center gap-2 font-medium'>Enter NTHFinance <FaArrowRightLong className='translate-y-[2px]'/></button>
            </div>
        </div>
        <div className='mb-14'>
            <LeaderBoardTable />
        </div>
    </div>
  )
}

export default LandingPage