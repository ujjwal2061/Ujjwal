 import { project } from "../Skills/ProjectsList"
 // import {allproject} from "../Skills/ProjectsList"
 import { Link } from "react-router"
 import { FaGithub } from "react-icons/fa";
 import { TbBrandLivewire } from "react-icons/tb";
 import { GoDotFill } from "react-icons/go";
 import { motion } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "motion/react"
import { FaArrowRight } from "react-icons/fa";

 export default  function Project(){
   const [showing,setShowing]=useState<boolean>(false)
  
   const showallProject=()=>{
    setShowing(preshow=>!preshow)
   }
    return(
<motion.section 
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4,delay:0.7,ease:"easeOut"}}
    className="text-white flex flex-col py-4 md:items-center justify-center gap-2">
    <motion.div 
    className="md:w-[615px]  lg:w-[815px]   flex flex-col  w-full" >
      <h1 className="px-2 font-semibold underline text-2xl">Projects</h1>
           <div className="px-2 ">
                {showing?(
                     <button
                     onClick={showallProject} 
                      className="mt-1  flex  font-semibold bg-slate-100 text-gray-800 font-sans 
                     hover:bg-slate-200  px-3 gap-2 items-center py-2 w-40 md:w-48 rounded-md  text-centert">
                         Close Project
                         <FaArrowRight  className="text-lg transition-transform duration-200 hover:rotate-45"/>
                     </button>
                ):(
                    <button
                    onClick={showallProject} 
                     className="mt-1  flex  gap-2 items-center font-semibold bg-slate-100 text-gray-800 font-sans 
                    hover:bg-slate-200  px-3 py-2 w-40 md:w48 rounded-md  text-centert">
                        Open Project 
                        <FaArrowRight  className="text-lg transition-transform duration-200 hover:rotate-45"/>
                    </button>
                )}
              
        </div>
     <AnimatePresence key="wait" >
         {showing?(
            <motion.div
            key="showing"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            // exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 ,delay:0.3}}
            >
             {project.map((project,index)=>{
                 return <div key={index} className="bg-zinc-800  hover:bg-zinc-900 bg-opacity-50 border-2  border-zinc-700 rounded-md  m-2">
                     <div className="px-3 py-4 cursor-pointer h-40  md:h-52 rounded-md ">
                     <img src={project.img}  className="object-cover w-full h-full rounded-lg"/>
                     </div>
                     <div className="px-2 rounded-md">
                     <div className=" px-1 flex items-center flex-row justify-between ">
                     <h1 className="text-2xl  flex gap-2 items-center font-semibold">{project.name}
                         <span className={` ${project.IsComplete==="Building" ?"bg-red-600 text-red-500 border-red-500":" bg-green-600 text-green-500  border-green-500"} text-sm mt-1.5 border px-2 items-center   bg-opacity-15  rounded-md flex gap-1`}>
                             {project.IsComplete}<GoDotFill  className="mt-[3px]" /></span>
                     </h1>
                     <div className="flex gap-3   px-3">
                     <Link to={project.livelink}  target="_blank"  className="relative group "><TbBrandLivewire size={21} />
                     <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                     Live
                     </span></Link>
                     <Link to={project.githublink} target="_blank"  className="relative group "><FaGithub size={20} />
                     <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                         Github
                     </span>
                     </Link> 
                     </div>
                     </div>
                      <div className=" py-2">
                     <p className="px-2 py-1 text-zinc-400  text-[15px] md:text-[16px] font-medium">{project.description}</p>
                     <div className="flex p-1 gap-2 ">{project.techStack.map((tech,idx)=>(
                        <span key={idx} className="bg-zinc-700/40  shadow-2xl px-2  rounded-md ">{tech}</span>
                     ))}</div>
                     </div>
                    </div>
                 </div>
             })}
             </motion.div>
         ):(
            null
            // this for showing first 3 project 
            // <motion.div
            //   key="all"
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // // exit={{ opacity: 0, y: -20 }}
            // transition={{ duration: 0.3 ,delay:0.3}}>

            // {allproject.map((project,index)=>{
            //     return <div key={index} className="bg-zinc-800  hover:bg-zinc-900 bg-opacity-50 border-2  border-zinc-700 rounded-md  m-2">
            //          <div className="px-3 py-4 cursor-pointer h-40  md:h-52 rounded-md ">
            //          <img src={project.img}  className="object-cover w-full h-full rounded-lg"/>
            //          </div>
            //          <div className="px-2 rounded-md">
            //          <div className=" px-1 flex items-center flex-row justify-between ">
            //          <h1 className="text-2xl  flex gap-2 items-center font-semibold">{project.name}
            //              <span className={` ${project.IsComplete==="Building" ?"bg-red-600 text-red-500 border-red-500":" bg-green-600 text-green-500  border-green-500"} text-sm mt-1.5 border px-2 items-center   bg-opacity-15  rounded-md flex gap-1`}>
            //                  {project.IsComplete}<GoDotFill  className="mt-[3px]" /></span>
            //          </h1>
            //          <div className="flex gap-3   px-3">
            //          <Link to={project.livelink}  target="_blank"  className="relative group "><TbBrandLivewire size={21} />
            //          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
            //          Live
            //          </span></Link>
            //          <Link to={project.githublink} target="_blank"  className="relative group "><FaGithub size={20} />
            //          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
            //              Github
            //          </span>
            //          </Link> 
            //          </div>
            //          </div>
            //          <div className="border-2 ">

                     
            //          </div>
            //          </div>
            //      </div>
            //  })}
            //  </motion.div>
         )}
   
     </AnimatePresence>
    </motion.div>
</motion.section>
    )
}
