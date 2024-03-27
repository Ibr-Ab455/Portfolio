// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Typewriter,  } from 'react-simple-typewriter'

function NavbarDash() {

  

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[100vh] p-20'>
     <div>
       <h1 className='text-white text-xl '>
        Hi! I'm a {' '}
        <span className='underline'>
          <Typewriter 
          words={['Ibrahim Ahmed', 'MERN Stcak developer', 'Freelancer']}
          loop={''}
          cursorStyle='_'
          typeSpeed={120}
          delaySpeed={80}
          />
        </span>
       </h1>
     </div>
    </div>
  )
}

export default NavbarDash