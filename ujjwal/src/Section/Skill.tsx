import { SkillList } from "../Skills/Skill"
import { motion } from "motion/react";

export  default function Skill(){
    return(
        <motion.section
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.4,delay:0.6,ease:"easeOut"}}
        className=" text-white   flex flex-col md:items-center  gap-5 justify-center">
         <motion.div 
         className="md:w-[615px]   lg:w-[815px]   p-2  flex flex-col  w-full">
        <h1 className="px-2 font-semibold underline text-2xl">Skill & Tools</h1>
        <div className="   p-2 grid  grid-cols-3  md:grid-cols-4 justify-center gap-1 mt-1">
             {SkillList.map((skill,index)=>(
                <li key={index} 
                className="bg-zinc-900  bg-opacity-75 border-transparent border-zinc-700 flex justify-center items-center text-white w-full sm:w-auto md:w-18 py-3 shadow-md px-3 font-semibold rounded-md text-center text-xs md:text-sm">
                <span className="text-sm md:text-base">{skill.icons}</span>
                <span className="ml-1" >{skill.name}</span>
                </li>
              
             ))}
        </div>
        </motion.div>
    </motion.section>      
    )
}