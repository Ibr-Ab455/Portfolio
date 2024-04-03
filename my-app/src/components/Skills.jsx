// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3, FaNode, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiFirebase, SiTypescript } from "react-icons/si";


function Skills() {
  return (
    <div className='pt-12  pl-20 w-[75%] translate-x-[26%]'>
      <h1 className='text-2xl text-blue-600 relative before:absolute before:w-14 before:h-[3px] before:bg-blue-500 before:bottom-0 before:top-8 before:mt-2 mb-8'>My Skills</h1>
      <div className='flex space-x-2'>
        <TiHtml5 className='text-5xl text-red-500'/>
        <FaCss3 className='text-5xl text-blue-600'/>
        <SiTailwindcss className='text-5xl text-[#06b6d4]'/>
        <IoLogoJavascript className='text-5xl text-[#F0DB4F]'/>
        <SiMongodb className='text-4xl text-[#4DB33D]'/>
        <FaNode className='text-5xl text-[#6cc24a]'/>
        <SiFirebase className='text-5xl text-[#FFA611]'/>
        <FaGithub className='text-5xl text-[#211F1F]'/>
        <FaGitAlt className='text-5xl text-[#F1502F]'/>
        <SiTypescript className='text-5xl text-blue-500'/>
      </div>
    </div>
  )
}

export default Skills