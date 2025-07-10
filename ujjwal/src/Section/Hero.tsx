import ProfileImg  from "../assets/discord.jpeg"
import {Link} from "react-router"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react"
export default function Hero() {   
    const [IsShow,setIshow]=useState(false)
  
    const handleshow=()=>{
        setIshow((prevstate)=>!prevstate)
    }
  const currentTime=new Date().toLocaleDateString()
  return (
    <motion.section
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4,delay:0.5,ease:"easeOut"}}
    className="  text-white  relative   flex flex-col md:items-center sm:px-6 lg:px-8  py-2 gap-5 justify-center">
        <span className= "fixed right-4  top-6  text-gray-300 font-medium text-sm">{currentTime}</span>
            <motion.div
            className=" relative flex  w-full md:w-[615px]   lg:w-[815px] px-4 gap-1  py-7 rounded-md   ">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 overflow-hidden rounded-md">
             <img src={ProfileImg} className="w-full h-full object-cover aspect-square cursor-pointer"/>
            </div>
            <div className="flex  lg:mt-6 flex-col w-full items-start ">
             <div className="flex  items-center w-full  justify-between p-1 ">
            <div className=" p-1 flex flex-col">
             <h1 className=" text-3xl   lg:text-4xl  flex gap-2 items-center  flex-row justify-center font-semibold">Ujjwal Gaihre
             <span className="absolute -top-2 left-2  md:static lg:static text-green-400 font-semibold mt-2   px-3 h-8   rounded-lg text-[13px] md:text-sm items-center drop-shadow-[0_0_6px_#22c55e]  flex">Available<GoDotFill  className="mt-0.5"/></span>
            </h1>
             <p className=" ml-1 text-[14px] md:text-[16px]  font-semibold">Software Engineer</p>
            </div>   
            </div>
            <div className="flex flex-row  items-start gap-1  px-1  py-1">
                <Link to="https://github.com/ujjwal2061" target="_blank"  className="relative group " ><IoLogoGithub  size={24} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                    Github
                </span>
                </Link>
                <Link to="https://www.linkedin.com/in/ujjwal-gaihre-9719ba289/" target="_blank" className="relative group"><FaLinkedin size={24} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                    LinkedIn
                </span></Link>
                <Link to="https://x.com/Ujjwal_2061"  className="relative group "><RiTwitterXFill size={24} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                  Twitter
                </span>
                </Link>
            </div>
            </div>
            </motion.div>
            <div className="  lg:w-[815px]  md:w-[615px]   ">
            <div className="px-3 ">
             <h1 className="text-2xl underline mb-2  font-semibold">About Me</h1>
             {IsShow ? (
                <>
                 <p className="text-left mb-1">
                    Hey, I’m Ujjwal Gaihre , an undergraduate Computer Science student and  full-stack 
                    developer who loves building and shipping things that people actually use it .<br />
                    </p>
                    <div className="text-left mb-1">
                    If you have an idea and would like to collaborate, feel free to DM me!
                    I'm always open and ready to connect and work on exciting projects  
                     My expertise spans across both frontend and backend development, specializing in technologies like React, and Node.js. Over the years, 
                    </div>
                    <p className="text-left">
                     I’ve built numerous projects using these tools and continue to explore new ones to refine my skills.<br />
                    When I am not Coding you'll find me on the football field.  Playing football has taught me the value of teamwork and effective communication, skills that I bring into my development projects.
                     I also spend time connecting with the developer community on Discord,Twitter.
                    </p>
                </>
             ):(<>
                <p className=" text-left mb-1  ">
                Hey, I’m Ujjwal Gaihre , an undergraduate Computer Science student and  full-stack 
                developer who loves building and shipping things that people actually use it .<br />
                </p>  
                <div className="text-left mb-1">
                I mainly work with React.js and Node.js for both frontend and backend, using TypeScript alongside them. 
                I have created many cool projects using these technologies.
                </div>
                <p className="text-left">
                If you have an idea and would like to collaborate, feel free to DM me!
                I'm always open and ready to connect and work on exciting projects
                </p>
             </>

             )}
                {IsShow  ?(
             <button onClick={handleshow}
              className="mt-1  flex   items-center  gap-4   font-semibold bg-slate-100 text-gray-800 font-sans 
                           hover:bg-slate-200 p-1 w-48 md:w-52 rounded-md  text-center">Show less about me
                    <FaArrowRight  className="text-lg transition-transform duration-200 hover:rotate-45"/></button>
                ):(
                    <button onClick={handleshow}
                 className="mt-1  flex   items-center  gap-4   font-semibold bg-slate-100 text-gray-700 font-sans border-2 
                           hover:bg-slate-200 p-1 md:w-52 rounded-md  text-center">Show more about me
                    <FaArrowRight  className="text-lg transition-transform duration-200 hover:-rotate-45"/></button>
                )}
                
            </div>
            </div>
    </motion.section>
  )
}
