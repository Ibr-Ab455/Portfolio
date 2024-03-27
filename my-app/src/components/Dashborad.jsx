// eslint-disable-next-line no-unused-vars
import React from 'react'
import DashSide from './SideDashboard'
import NavbarDash from './NavbarDash'

function Dashborad() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row  relative w-full'>
      <DashSide/>
      <div className='w-full'>
        <NavbarDash/>
      </div>
    </div>
  )
}

export default Dashborad