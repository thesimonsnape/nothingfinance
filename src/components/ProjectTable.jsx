import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { rows } from '../constant/index';
import Logo from '../assets/logo/nthfinance_logo.png'

const LeaderBoardTable = () => {
  const location = useLocation();

  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-lg shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/project' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Earn protocol points</h2>
                {location.pathname !== '/projects' &&
                    <Link to='/projects' className='link-styles flex gap-2 items-center cursor-pointer'>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            View Protocols <FaArrowRightLong className='translate-y-[1px]' />
                        </div>
                    </Link>
                }
            </div>
            <table className='w-full mt-10'>
                <tbody>
                    <tr className='text-gray-500 font-semibold text-center'>
                        <td className='text-center'>RANK</td>
                        <td className='text-center'>PROTOCOL</td>
                        <td className='text-center'>CURRENT POINTS SUPPLY</td>
                        <td className='text-center'>TOTAL USERS</td>
                        <td className='text-center'></td>
                    </tr>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`text-center ${idx % 2 === 0? 'text-white bg-[#06060d]' : 'bg-[#0e0f11] text-white'}`}>
                                <td className='text-center py-3 opacity-50 '>{el.rank}</td>
                                <td className='text-center justify-center py-3 flex items-center opacity-50 '>
                                   <img src={Logo} alt='logo' className='text-center w-10 h-10'/>
                                   {el.project}
                                </td>
                                <td className='py-3 text-center opacity-50 '>{el.totalPoints} PTS</td>
                                <td className='py-3 text-center opacity-50 '>{el.totalUsers}</td>
                                <td className='py-3 text-center'>
                                <Link to={`/project/${el.rank}`} className='hover:underline link-styles opacity-100 text-center flex gap-2 items-center cursor-pointer'>
                                    <div className='flex gap-2 items-center cursor-pointer text-center opacity-100 '>
                                        View <FaArrowRightLong className='translate-y-[1px]' />
                                    </div>
                                </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LeaderBoardTable