import React from 'react'
import NavBar from '../components/NavBar'
import Quests from '../components/Quests'
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsPage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-40'>
        <div className='flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Available Points</h2>
            <p className='text-6xl text-[#6459e3]'>0</p>
            <div className='flex items-center w-full gap-2'>
                Earn Points <FaArrowRightLong className='translate-y-[2px]'/>
            </div>
        </div>
        <div className='mt-12'>
            <h2 className='text-slate-200 text-3xl font-semibold'>What is Nothing Finance?</h2>
            <p className='text-slate-500 text-sm font-medium'>Zero Gravity is an airdrop campaign to distribute the $ZERO drop. The greater your points total, the larger your $ZERO allocation.</p>
        </div>
        <div className='mt-20'>
            <Quests />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;