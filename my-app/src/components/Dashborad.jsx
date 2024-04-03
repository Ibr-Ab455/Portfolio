// eslint-disable-next-line no-unused-vars
import React from 'react'
import DashSide from './SideDashboard'
import NavbarDash from './NavbarDash'
import About from './About'
import Skills from './Skills'


function Dashborad() {
  return (
    <div className='min-h-screen relative w-full'>
      <div className='flex'>
      <DashSide/>
      <div className='w-full'>
       <NavbarDash/>
       <About/>
       <Skills/>
       
      </div>
      </div>
    </div>
  )
}

export default Dashborad