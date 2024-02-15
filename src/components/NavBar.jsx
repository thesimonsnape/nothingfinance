import React from 'react'
import Logo from '../assets/logo/nthfinance_logo.png'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();
  return (
    <div className='h-20 w-full fixed flex justify-between items-center bg-transparent shadow-md px-2 md:px-10 text-white z-10 backdrop-blur-sm'>
      <Link to='/' className='link-styles'>
        <div className='flex items-center'>
            <img src={Logo} alt='logo' className='w-10 h-10'/>
            <h1 className='text-xl font-bold text-[11px] md:text-base hidden md:block'>Nothing Finance</h1>
        </div>
      </Link>
      <div className='flex gap-12 items-center md:-translate-x-2 text-slate-100 text-[11px] md:text-base font-semibold'>
          <Link to='/projects' className={`${location.pathname === '/projects' ? 'decoration-[#6459e3] underline' : ''}`}>
            <div className='text-sm md:text-lg font-semibold'>Earn</div>
          </Link>
          <Link to='/farm' className={`${location.pathname === '/farm' ? 'decoration-[#6459e3] underline' : ''}`}>
            <div className='text-sm md:text-lg font-semibold'>Stake</div>
          </Link>
          <Link to='/trade' className={`${location.pathname === '/trade' ? 'decoration-[#6459e3] underline' : ''}`}>
            <div className='text-sm md:text-lg font-semibold'>Trade</div>
          </Link>
          <Link to='/lend' className={`${location.pathname === '/lend' ? 'decoration-[#6459e3] underline' : ''}`}>
            <div className='text-sm md:text-lg font-semibold'>Lend</div>
          </Link>
      </div>
      <div>
          <button className='bg-slate-100 text-gray-900 font-semibold px-4 py-1 lg:px-10 md:py-3 text-[11px] md:text-base rounded-full'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar