import React from 'react'

const Contact = () => {
   
  const handleContactme=(e)=>{
    e.preventDefault();
    console.log("clicked contact me.");
  }

  return (
    <div id='projects' className='w-full backdrop-blur container-padding  md:min-h-[85vh] mt-10'>
    <div className='py-10'>
       <h2 id='projectHeading' className='text-3xl md:text-left text-center w-full font-semibold text-gray-300 md:text-5xl'>Contact Me</h2>
          
        
        <div className='flex justify-center items-center p-10'> 
          <div className='w-[100%]  flex justify-center items-center '>
         <form className=' w-full p-5'>
          <div className='w-full mb-4 flex flex-col'>
            <label className='mr-5 text-2xl font-extralight'>Email:</label>
            <input type='email' className='md:w-[50%] md:p-2 p-1 bg-transparent border-b-2 border-blue-700 focus:outline-none'/>
          </div>
          <div className='w-full mb-4 flex flex-col'>
            <label className='mr-5 text-2xl font-extralight'>Phone:</label>
            <input type='text' className='md:w-[50%] md:p-2 p-1 bg-transparent border-b-2 border-blue-700 focus:outline-none'/>
          </div>
             
             <button
              onClick={handleContactme}
              className='block text-sm md:text-base p-2 rounded-md bg-blue-700 hover:bg-blue-500 '
              >Contact Me
              </button>
         </form>
            </div>
        </div>

      </div>
      </div>
  )
}

export default Contact