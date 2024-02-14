import React from 'react'
import NavBar from '../components/NavBar'
import TradingTable from '../components/TradingTable';

const TradePage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-32'>
        <TradingTable />
      </div>
    </div>
  )
}

export default TradePage;