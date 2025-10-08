import React from 'react'
import Logo from "../assets/Logo.png"

const Pilihan = () => {
  return (
    <div>
        <div className='ml-80'>
            <img className='w-24' src={Logo} alt="logo" />
            <div className='-m-26 -ml-100'>
            <h1 className='font-bold text-3xl text-center m-10'>Silahkan pilih daftar lewat jalur mana</h1>
        </div>
        <div className='pt-50'>
        <a
        href="/Login"
        className="bg-green-400 hover:bg-green-600 text-white font-bold py-7 px-80 -m-10 text-3xl rounded text-center"
        >
            Jalur Pretasi
            </a>
            </div>
            <div className='pt-25'>
        <a
        href="/JalurZonasi"
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-7 px-80 -m-10 text-3xl rounded text-center"
        >
            Jalur Zonasi
            </a>
            </div>
            <div className='pt-25'>
        <a
        href="/JalurAnfirmasi"
        className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-7 px-74 -m-10 text-3xl rounded text-center"
        >
            Jalur Anfirmasi
            </a>
            </div>
        </div>
    </div>
  )
}

export default Pilihan