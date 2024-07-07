import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const ScrollAnimation=(id)=>{
          gsap.to(id,{
            y:0,
            ease:'power1.inOut',
            scrollTrigger:{
                trigger:id,
                toggleActions:'restart reverse restart reverse',
                
            }
          })
}