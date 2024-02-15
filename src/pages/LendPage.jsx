import React from 'react'
import NavBar from '../components/NavBar'
import LendingTable from '../components/LendingTable';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LendPage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-20'>
        <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
          <h2 className='text-xl md:text-3xl font-semibold'>How lending xP works?</h2>
          <p className='text-sm text-slate-300 font-medium leading-[10px]'>xP point owners can use their xP points as collaterals to take loans in more liquid tokens like USDC, USDT and ETH.  </p>
          <br />
        </div>
        <div className="flex items-center justify-center max-w-full w-full gap-10">
          <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Average Supply APY </h2>
            <div className='flex items-center w-full gap-2'>
              <span className='text-6xl text-[#6459e3]'>{'4%'}</span>
            </div>
            <br />
          </div>
          <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Average Borrow APY </h2>
            <div className='flex items-center w-full gap-2'>
              <span className='text-6xl text-[#6459e3]'>{'6%'}<b className='text-[10px] text-slate-300 ml-1'>Borrow points, to increase your chances of airdrop</b></span>
            </div>
            <br />
          </div>
        </div>
        <div className='mt-12'>
          <LendingTable />
          <br />
        </div>
      </div>
      <br />
    </div>
  )
}

export default LendPage;