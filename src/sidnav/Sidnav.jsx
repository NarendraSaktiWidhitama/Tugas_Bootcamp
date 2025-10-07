import React, { useState } from 'react'
import Logo from "../assets/Logo.png"

const Sidnav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='flex'>
        <div className='ml-2 -m-6'>
                <img className='w-14' src={Logo} alt="Logo" />
            </div>
        <div className={`fixed top-0 left-0 h-full w-60 shadow text-white ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0`}>
            <div className="text-3xl font-bold text-center pt-4 text-black ml-2">Binusa</div>
            <nav className='space-y-3 pt-8'>
                <a href="/Dashboard"
                 className='block py-2 px-3 rounded hover:bg-yellow-300 focus:shadow-outline text-black font-bold text-center'>Jalur Pretasi</a>
                <a href="/zonasi" 
                className='block py-2 px-3 rounded hover:bg-yellow-300 focus:shadow-outline text-black font-bold text-center'>Jalur Zonasi</a>
                <a href="/anfirmasi" 
                className='block py-2 px-3 rounded hover:bg-yellow-300 focus:shadow-outline text-black font-bold text-center'>Jalur Anfirmasi</a>
            </nav>
            </div>
        </div>
  )
}

export default Sidnav;