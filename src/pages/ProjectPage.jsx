import React from 'react'
import NavBar from '../components/NavBar'
import Quests from '../components/Quests'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { rows } from '../constant/index';
import Logo from '../assets/logo/nthfinance_logo.png'

const ProjectsPage = () => {
  const { id } = useParams();
  const row = rows.find(row => row.id === id) ?? rows[0];

  return (
    <div className='flex justify-center min-h-screen px-7 md:px-20'>
      <NavBar />
      <div className='w-full max-w-[1200px] mt-40'>
        <div className='flex flex-col gap-2 w-full text-white px-4 md:px-10 py-5 items-start justify-center rounded-lg shadow-[#211f3e] shadow-md'>
            <h2 className='text-xl'>Available Points</h2>
            <div className='flex items-center w-full gap-2'>
             <span className='text-6xl text-[#6459e3]'>{row.totalPoints}<b className='text-[10px] text-[white]'>Earn more points by participating and completing the quests</b></span>
            </div>
            <br />
            <Link to={`/leaderboard/${id}`} className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    View leaderboard <FaArrowRightLong className='translate-y-[2px]' />
                </div>
            </Link>
        </div>
        <div className='mt-12'>
        <h2 className='text-slate-200 text-3xl font-semibold flex items-center'>
              What is
                <img src={Logo} alt='logo' className='w-10 h-10'/>
                 {row.project}
              ?
            </h2>
            <p className='text-slate-500 text-sm font-medium'>{row.tagLine}</p>
        </div>
        <div className='mt-12 mb-20'>
            <Quests quests={row.quests} />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage;