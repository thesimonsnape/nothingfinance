import React from 'react'
import NavBar from '../components/NavBar'
import ProjectTable from '../components/ProjectTable'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import BlastLogo from '../assets/logo/blast_logo.png'

const ProjectsPage = () => {
  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-20'>
        <div className='mt-12 flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
          <h2 className='text-2xl font-semibold'>Upcoming project </h2>
          <div className='flex items-center w-full gap-2 -translate-x-4'>
            <div className='text-6xl text-[#fefe04] flex items-center '>
              <img src={BlastLogo} alt='blast logo' className='w-20 h-24'/>
              <h2 className='-translate-y-0 -translate-x-3 flex'>last<span className='text-[10px] font-medium text-[white] mt-auto ml-1 -translate-y-[6px]'>A decentralized DEX</span></h2>
            </div>
          </div>
          <br />
          <Link to={`#`} className='hover:underline cursor-pointer'>
              <div className='flex gap-2 items-center'>
                  Register here <FaArrowRightLong className='translate-y-[2px]' />
              </div>
          </Link>
        </div>
        <div className='mt-12'>
          <ProjectTable />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;