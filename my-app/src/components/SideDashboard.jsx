// eslint-disable-next-line no-unused-vars
import Ibrahim from '../../src/assets/ibrahim_ali.png'
import { FaInstagram, FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GoProject } from "react-icons/go";


function SideDashboard() {

  

  return (
    <div className='h-[100vh] w-[25%] flex flex-col bg-[#191919] p-4'>
      <div className='flex flex-col'>
        <img src={Ibrahim} alt='cade' className=' w-60 h-60 rounded-full border-2 border-[#1F75FE]'/>
        <h1 className='text-2xl pl-6 text-white py-4'>Ibrahim Ahmed</h1>
      </div>
      <div className='pt-3 flex space-x-2 ml-2'>
       
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer hover:bg-[#1F75FE] transition duration-0 hover:duration-150'>
         <FaInstagram className='text-white text-2xl'/>
        </div>
      
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer hover:bg-[#1F75FE] transition duration-0 hover:duration-150'>
         <FaGithub className='text-white text-2xl'/>
        </div>
     
        <div className='bg-gray-800 w-10 h-10 rounded-full pt-2 pl-2  cursor-pointer hover:bg-[#1F75FE] transition duration-0 hover:duration-150'>
         <FaLinkedin className='text-white text-2xl'/>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col space-y-3 mt-6 ml-2'>
       <div className='flex space-x-2'>
      
       <FaHome className='text-2xl text-gray-500 cursor-pointer'/>
        <h2 className='text-gray-500 cursor-pointer'>Home</h2>
    

       </div>

       <div className='flex space-x-2'>
        <FiUser className='text-2xl text-gray-500 cursor-pointer'/>
        <h2 className='text-gray-500 cursor-pointer'>About Me</h2>
       </div>

       <div className='flex space-x-2'>
        <GoProject className='text-2xl text-gray-500 cursor-pointer'/>
        <h2 className='text-gray-500 cursor-pointer'>My Portfolio</h2>
       </div>
      </div>
    </div>
  )
}

export default SideDashboard