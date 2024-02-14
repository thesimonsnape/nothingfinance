import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const LeaderBoardTable = (props) => {
  const location = useLocation();

  const rows = props.rows;
  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-md shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/leaderboard' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>
                    Leaderboard
                    <p className='text-slate-500 text-sm'>NTH Cosmonauts will be airdropped 10% of $NTH's circulating supply on launch based on accumulated points</p>
                </h2>
                <Link to={`/project/${props.id}`} className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            View project <FaArrowRightLong className='translate-y-[1px]' />
                        </div>
                </Link>
            </div>
            <table className='w-full mt-10'>
                <tbody>
                    <tr className='text-gray-500 font-semibold text-center'>
                        <td className='text-center'>RANK</td>
                        <td className='text-center'>ADDRESS</td>
                        <td className='text-center'>REFERRAL POINTS</td>
                        <td className='text-center'>TOTAL POINTS</td>
                    </tr>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`text-center ${idx % 2 === 0? 'text-white bg-[#06060d] opacity-50 ' : 'bg-[#0e0f11] opacity-50 text-white'}`}>
                                <td className='py-3 text-center'>{el.rank}</td>
                                <td className='py-3 text-center'>{el.address.substring(0, 4)}...{el.address.substring(el.address.length - 4, el.address.length - 0)}</td>
                                <td className='py-3 text-center'>{el.referral_points}</td>
                                <td className='py-3 text-center'>{el.total_points}</td>
                            </tr>
                        )
                    })}
                    <br />
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default LeaderBoardTable