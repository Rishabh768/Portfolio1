import React, { useEffect } from 'react'
import p1 from './assets/profile.jpg'

const Projects = () => {


  return (
    <div id='project' className='w-full backdrop-blur container-padding  mt-10'>
      <div className='py-10'>
      <h2 className='text-3xl md:text-left text-center w-full font-semibold text-gray-300 md:text-5xl'>Projects</h2>
           <div className='w-full mt-4 flex justify-center flex-wrap p-4 md:p-6 gap-4 md:gap-12'>

              <div className='flex justify-center flex-col items-center'>
                <div className=' w-48 overflow-hidden'>
                  <img  className='rounded-lg' src={p1}/>
                </div>
                <p>Blogging App </p>
                <p>Visit Site</p>
              </div>

              <div className='flex w-48 justify-center flex-col items-center'>
                <div className='w-full overflow-hidden'>
                  <img className='rounded-lg' src={p1}/>
                </div>
                <p>Blogging App </p>
                <p>Visit Site</p>
              </div>

              <div className='flex w-48 justify-center flex-col items-center'>
                <div className='w-full overflow-hidde'>
                  <img className='rounded-lg' src={p1}/>
                </div>
                <p>Blogging App </p>
                <p>Visit Site</p>
              </div>

          </div>    
      </div>
    </div>

  )
}

export default Projects