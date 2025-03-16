import ProfileImg  from "../assets/discord.jpeg"
import {Link} from "react-router"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function Hero() {   
    const [IsShow,setIshow]=useState(false)

    const handleshow=()=>{
        setIshow((prevstate)=>!prevstate)
    }

  return (
    <section className=" text-white flex flex-col items-center py-10  gap-5 justify-center">
            <div className=" flex   w-1/2 px-4 h-[190px] gap-1  py-7 rounded-md">
            <img src={ProfileImg} className="w-36 h-36 cursor-pointer   object-cover  rounded-md" />
            <div className="mt-10 flex flex-col">
                <span className="text-green-400 font-semibold items-center drop-shadow-[0_0_6px_#22c55e]   flex">Available<GoDotFill  className="mt-0.5"/></span>
            <h1 className=" text-2xl font-semibold ">Ujjwal Gaihre</h1>
            <p className=" ml-1 text-[12px] font-semibold">Software Engineer</p>
            <div className="flex flex-row gap-2 px-1 p py-1  ">
                <Link to="https://github.com/ujjwal2061" target="_blank"  className="relative group " ><IoLogoGithub  size={20} />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                    Github
                </span>
                </Link>
                <Link to="https://www.linkedin.com/in/ujjwal-gaihre-9719ba289/" target="_blank" className="relative group"><FaLinkedin size={20} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                LinkedIn
                </span></Link>
                <Link to="https://x.com/Ujjwal_2061"  className="relative group "><RiTwitterXFill size={20} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block text-black font-serif bg-white p-2 rounded text-xs">
                Twitter
                </span>
                </Link>
            </div>
            </div>
            </div>
            <div className="p-2 w-1/2">
            <div className=" ">
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
                I mainly work with React.js, Next.js, and Node.js for both frontend and backend, using TypeScript alongside them. 
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
              className="mt-1  flex   items-center  gap-4   font-semibold bg-slate-100 text-gray-700 font-sans border-2 
                           hover:bg-slate-200 p-1 md:w-52 rounded-md  text-center">Show less about me
                    <FaArrowRight  className="text-lg transition-transform duration-200 hover:rotate-45"/></button>
                ):(
                    <button onClick={handleshow}
                 className="mt-1  flex   items-center  gap-4   font-semibold bg-slate-100 text-gray-700 font-sans border-2 
                           hover:bg-slate-200 p-1 md:w-52 rounded-md  text-center">Show more about me
                    <FaArrowRight  className="text-lg transition-transform duration-200 hover:-rotate-45"/></button>
                )}
                
            </div>
            </div>
    </section>
  )
}
