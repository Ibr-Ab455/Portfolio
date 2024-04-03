// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className='pt-12  pl-20 w-[75%] translate-x-[26%]'>
      <h1 className='text-2xl text-blue-600 relative before:absolute before:w-14 before:h-[3px] before:bg-blue-500 before:bottom-0 before:top-8 before:mt-2 mb-8'>My Skills</h1>
      <div className='flex'>
        <TiHtml5 className='text-4xl'/>
        <FaCss3 className='text-4xl'/>
        <SiTailwindcss className='text-4xl'/>
      </div>
    </div>
  )
}

export default Skills