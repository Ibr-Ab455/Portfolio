// eslint-disable-next-line no-unused-vars
import React from 'react'
import Ibrahim from '../../src/assets/cade-1.png'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function SideDashboard() {
  return (
    <div className='h-[100vh] w-[25%] flex flex-col bg-[#191919] p-4'>
      <div className='flex flex-col'>
        <img src={Ibrahim} alt='cade' className='w-60 h-60'/>
        <h3 className='text-2xl mt-2 ml-4 text-white'>Ibrahim Ahmed</h3>
      </div>
      <div className='pt-3 flex space-x-2 ml-2'>
       
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer'>
         <FaInstagram className='text-white text-2xl'/>
        </div>
      
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer'>
         <FaGithub className='text-white text-2xl'/>
        </div>
     
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer'>
         <FaLinkedin className='text-white text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default SideDashboard