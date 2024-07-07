
import profileImg from './assets/profile.jpg'
import { useGSAP } from '@gsap/react'
import { ScrollAnimation } from './animations'
function Heading() {
       
          useGSAP(()=>{
            ScrollAnimation('#name');
          })
    //  useGSAP(()=>{
    //      gsap.to('#name',{
    //       opacity:1,
    //       y:0,
    //      })
    //      gsap.to('#profileImg',{
    //        opacity:1,
    //        y:0,
    //        delay:0.3
    //      })
    //      gsap.to('#description',{
    //         opacity:1,
    //         y:0,
    //         delay:0.4,
    //         ease:'back.out'
    //      })
         
    //  },[])
  return (
    <> 
      <section className='items-center backdrop-blur  flex-col-reverse md:flex-row md:h-[85vh] flex py-5 md:py-10 md:px-40 px-20 w-full'>
           <div  className='md:w-full  flex flex-col'>
            <h1 id='name' className='md:text-7xl translate-y-20 text-gray-400 text-4xl text-nowrap font-serif font-medium mt-4 '>Rishabh Chauhan</h1> 
            <p id='description' className='mt-4 text-nowrap text-center md:text-left text-base text-gray-500 font-semibold'>A Full Stack Web Developer.</p>
           </div>

           <div className='flex justify-center md:w-full h-52 w-52  md:h-72 '>
            <img id='profileImg' alt='profile' className='rounded-3xl overflow-hidden' src={profileImg} />
           </div>
      </section>
    </>
  )
}

export default Heading
