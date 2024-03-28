// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Typewriter,  } from 'react-simple-typewriter'

function NavbarDash() {

  

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[60vh] p-24'>
     <div className='text-center flex flex-col'>
        <h1 className='text-white text-2xl mb-2'>Hi, I'm <span className='text-[#1F75FE]'>Ibrahim Ahmed</span></h1>
       <h2 className='text-white text-xl'>
        a {' '}
        <span className='underline'>
          <Typewriter 
          words={['UI Designer', 'MERN Stcak Developer', 'Professsional code']}
          loop={''}
          cursorStyle='.'
          typeSpeed={120}
          delaySpeed={80}
          />
        </span>
       </h2>
        <p className='flex flex-col pt-2 text-white'>Freelancer providing services for programming and design content needs.
          <span className='text-[#1F75FE] text-xl'>Join Me!</span>
        </p>
       <div>
       </div>
     </div>
    </div>
  )
}

export default NavbarDash