import { skills } from "./constants"


const Skills = () => {
      
  return (
    <div id='projects' className='w-full backdrop-blur container-padding  md:h-[85vh] mt-10'>
      <div className='py-10 h-full'>
         <h2 id='projectHeading' className='text-3xl md:text-left text-center w-full font-semibold  text-gray-300 md:text-5xl'>Skills</h2>
             <div className='flex w-full h-full justify-center flex-wrap'>
                 {
                  skills.map((skill)=>(
                  <div className="w-32 h-32 text-center p-4 m-6 hover:rotate-6 " key={skill.skill}>
                    <img className="w-full" src={skill.img} />
                     <p>{skill.skill}</p>
                  </div>
                ))
                 }
             </div>
    
      
        </div>
        </div>
  )
}

export default Skills