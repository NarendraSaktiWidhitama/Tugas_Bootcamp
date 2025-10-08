import React from 'react'
import Pp from "../assets/Pp.jpg"
import Sidnav from '../sidnav/Sidnav'

const Profile = () => {
  return (
    <div className='pt-20'>
        <Sidnav/>
        <h1 className='text-4xl font-bold text-center -ml-90'>Profile saya</h1>
        <div className='pt-2'>
        <div className='shadow border-1 w-150 ml-100 pt-4'>
            <img src={Pp} className='w-25 rounded-full ml-6' />
            <div className='pt-4 ml-6'>
        <h3 className='text-2xl font-bold'>Nama : <span className='font-medium'>Narendra sakti widhitama</span></h3>
        <h3 className='text-2xl font-bold'>Sekolah : <span className='font-medium'>Smk bina nusantara</span></h3>
        <h3 className='text-2xl font-bold'>Jurusan : <span className='font-medium'>Tkj</span></h3>
        <h3 className='text-2xl font-bold'>Umur : <span className='font-medium'>16th</span></h3>
        <h3 className='text-2xl font-bold'>Hobby : <span className='font-medium'>Bermain game</span></h3>
        <h3 className='text-2xl font-bold'>Cita cita : <span className='font-medium'>Software enginer dan developer game</span></h3>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Profile