// eslint-disable-next-line no-unused-vars
import React from 'react'
import DashSide from './SideDashboard'
import NavbarDash from './NavbarDash'
import About from './About'


function Dashborad() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row  relative w-full'>
      <DashSide/>
      <div className='w-full'>
       <NavbarDash/>
       <About/>
       
      </div>
    </div>
  )
}

export default Dashborad