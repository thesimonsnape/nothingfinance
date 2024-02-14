import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';



let rows = [
    {
        rank: 1,
        address: '0x1234567890123456789012345678901234567890',
        referral_points: 100,
        total_points: 100
    },
    {
        rank: 2,
        address: '0x1234567890123456789012345678901234567890',
        referral_points: 100,
        total_points: 100
    },
    {
        rank: 3,
        address: '0x1234567890123456789012345678901234567890',
        referral_points: 100,
        total_points: 100
    },
    {
        rank: 4,
        address: '0x1234567890123456789012345678901234567890',
        referral_points: 100,
        total_points: 100
    },
    {
        rank: 5,
        address: '0x1234567890123456789012345678901234567890',
        referral_points: 100,
        total_points: 100
    },
]

const LeaderBoardTable = () => {
    const location = useLocation();
  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-lg shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/leaderboard' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Leaderboard</h2>
                {location.pathname === '/leaderboard'
                 ? <p className='text-slate-500 text-sm'>Zero Gravity Cosmonauts will be airdropped 10% of $ZERO's circulating supply on launch based on accumulated points</p>
                 : 
                    <Link to='/leaderboard' className='flex gap-2 items-center hover:underline cursor-pointer'>
                        <div className='flex gap-2 items-center hover:underline cursor-pointer'>
                            View Leaderboard <FaArrowRightLong className='translate-y-[1px]' />
                        </div>
                    </Link>
                }
            </div>
            <table className='w-full mt-10'>
                <thead className=''>
                    <tr className='text-gray-500 font-semibold'>
                        <td className='w-20 h-10 '>RANK</td>
                        <td className='w-96 h-10'>ADDRESS</td>
                        <td className='w-40 h-10'>REFERRAL POINTS</td>
                        <td className='w-20 h-10'>TOTAL POINTS</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((el, idx) => {
                        return (
                            <tr key={idx} className={`${idx % 2 === 0? 'text-white bg-[#06060d] opacity-50 ' : 'bg-[#0e0f11] opacity-50 text-white'}`}>
                                <td className='py-3'>{el.rank}</td>
                                <td className='py-3'>{el.address.substring(0, 4)}...{el.address.substring(el.address.length - 4, el.address.length - 0)}</td>
                                <td className='py-3'>{el.referral_points}</td>
                                <td className='py-3'>{el.total_points}</td>
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