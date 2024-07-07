import React, { useEffect, useState } from 'react'
import { useScroll } from '@react-three/drei'
const Navbar = () => {
  const [top,setTop]=useState(
    {
    project: window.innerWidth < 720 ? 600 : 900,
    skill:window.innerWidth < 720 ? 2000 :1800,
    contact:window.innerWidth < 720 ? 2900 : 2700
  }
)

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setTop(
        {
          project: window.innerWidth < 720 ? 550 : 900,
          skill:window.innerWidth < 720 ? 1600 :1800,
          contact:window.innerWidth < 720 ? 2300 : 2700
        }
      )
    })
   
  },[])

  const scroll=useScroll();
  const scrollTo=(value)=>{
         const topvalue=top[value];
         console.log(topvalue);
         scroll.el.scrollTo({top:topvalue,behavior:'smooth'});
  }

 
  return (
    <nav className='flex items-baseline  justify-center w-full px-8  py-4   '>
    <div className='flex-1'></div>
     <ul className='flex gap-9 '>
      <li><a onClick={()=>{scrollTo('project')}} className='hover:text-blue-700 rounded-full transtion-colors duration-500 ease-in text-gray-400 text-sm font-semibold hover:bg-white px-4 py-3'>Projects</a></li>
      <li><a onClick={()=>{scrollTo('skill')}} className='hover:text-blue-700 rounded-full transtion-colors duration-500 ease-in text-gray-400 text-sm font-semibold hover:bg-white px-4 py-3' >Skills</a></li>
      <li><a onClick={()=>{scrollTo('contact')}} className='hover:text-blue-700 rounded-full transtion-colors duration-500 ease-in text-gray-400 text-sm font-semibold hover:bg-white px-4 py-3'>Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar