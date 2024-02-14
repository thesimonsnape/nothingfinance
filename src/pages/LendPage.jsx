import React from 'react'
import NavBar from '../components/NavBar'
import LendingTable from '../components/LendingTable';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LendPage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-32'>
        <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
          <h2 className='text-xl'>Upcoming project </h2>
          <div className='flex items-center w-full gap-2'>
            <span className='text-6xl text-[#6459e3]'>{'Nothing DEX'}<b className='text-[10px] text-[white]'>A decentralized DEX</b></span>
          </div>
          <br />
          <Link to={`#`} className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
              <div className='flex gap-2 items-center cursor-pointer'>
                  Register here <FaArrowRightLong className='translate-y-[2px]' />
              </div>
          </Link>
        </div>
        <div class="flex items-center justify-center max-w-full w-full gap-10">
          <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Average Supply APY </h2>
            <div className='flex items-center w-full gap-2'>
              <span className='text-6xl text-[#6459e3]'>{'4%'}<b className='text-[10px] text-[white]'>Earn extra points by earning APY on your supplied points</b></span>
            </div>
            <br />
          </div>
          <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Average Borrow APY </h2>
            <div className='flex items-center w-full gap-2'>
              <span className='text-6xl text-[#6459e3]'>{'6%'}<b className='text-[10px] text-[white]'>Borrow points, to increase your chances of airdrop</b></span>
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