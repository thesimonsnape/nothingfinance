import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo/nthfinance_logo.png'

const orders = [
    {
        from: '0xef30e78BAB187670B9e25C968b27987029164b3c',
        price: '9',
        quantity: '100 PTS',
        project: 'Nothing Swap'
    },
    {
        from: '0xef30e78BAB187670B9e25C968b27987029164b3c',
        price: '9',
        quantity: '100 PTS',
        project: 'Nothing Swap'
    },
    {
        from: '0xef30e78BAB187670B9e25C968b27987029164b3c',
        price: '9',
        quantity: '100 PTS',
        project: 'Nothing Lend'
    },
    {
        from: '0xef30e78BAB187670B9e25C968b27987029164b3c',
        price: '9',
        quantity: '100 PTS',
        project: 'Nothing USD'
    },
]

const TradingTable = () => {
  const location = useLocation();

  return (
    <div className='bg-transparent w-full h-full flex justify-center items-center '>
        <div className='w-full max-w-[1200px] rounded-t-lg border border-[#2a2a2a] shadow-md shadow-[#3b3b3b] px-10 '>
            <div className={`my-10 flex text-white ${location.pathname === '/project' ? 'flex-col text-start ' : 'justify-between items-center'}`}>
                <h2 className='text-4xl font-semibold'>Buy protocol points</h2>
                <Link to='/projects' className='hover:underline link-styles flex gap-2 items-center cursor-pointer'>
                    <div className='flex gap-2 items-center cursor-pointer text-[#6459e3]'>
                        Want to Sell your points? Register here <FaArrowRightLong className='translate-y-[1px]' />
                    </div>
                </Link>
            </div>
            <table className='w-full mt-10'>
                <tbody>
                    <tr className='text-gray-500 font-semibold'>
                        <th className='text-center'>SELLER</th>
                        <th className='text-center'>PRICE</th>
                        <th className='text-center'>QUANTITY</th>
                        <th className='text-center'>PROTOCOL</th>
                        <th className='text-center'></th>
                    </tr>
                    {orders.map((el, idx) => {
                        return (
                            <tr key={idx} className={`text-center ${idx % 2 === 0? 'text-white bg-[#06060d]' : 'bg-[#0e0f11] text-white'}`}>
                                <td className='py-3 text-center opacity-50'>
                                    {el.from.substring(0, 4)}...{el.from.substring(el.from.length - 4, el.from.length - 0)}
                                </td>
                                <td className='text-center py-3 opacity-50 '>${el.price}</td>
                                <td className='text-center py-3 opacity-50 '>{el.quantity} PTS</td>
                                <td className='text-center py-3 flex justify-center items-center opacity-50 '>
                                   <img src={Logo} alt='logo' className='text-center w-10 h-10'/>
                                   {el.project}
                                </td>
                                <td className='text-center py-3'>
                                    <button to={`/project/${el.rank}`} className='text-center hover:underline opacity-100 link-styles items-center cursor-pointer'>
                                        <div className='text-center opacity-100 items-center cursor-pointer'>
                                            Buy
                                        </div>
                                    </button>
                                </td>
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

export default TradingTable;