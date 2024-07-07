import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React,{useRef} from 'react'
import { useScroll,ScrollControls, Scroll } from '@react-three/drei';

import Heading from './Heading';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';




const BG=()=>{
    const scroll=useScroll();
    const ref=useRef();
    useFrame((state,delta)=>{

      const b=scroll.pages
      const r=scroll.offset * Math.PI 
      const g =scroll.offset *delta; 
      ref.current?.material.color.set(r,g,b)
      ref.current.rotation.x = scroll.offset * Math.PI*3
      ref.current.rotation.y = scroll.offset * Math.PI*5
    })

    return(

    <mesh scale={[3,3,3]} ref={ref} position={[0,0,0]}>
    <torusKnotGeometry />
    <meshStandardMaterial args={[2,32,3]} wireframe color={'blue'} />
    <ambientLight />
    </mesh>
    )
}

const Overlay=()=>{
  
  return <Scroll className='w-full' html>
       <Navbar/>
       <Heading/>
       <Projects/>
       <Skills/>
      <Contact/>
      </Scroll>
}

const Background = () => {
  
  return (
      <Canvas gl={{antialias:true}} dpr={[1,1.5]}>
      <ScrollControls  damping={.2} pages={3.5}>
     <BG/>
      
     <Overlay/>
    </ScrollControls>
    </Canvas>
      
  )
}

export default Background