import ProfileImg  from "../assets/discord.jpeg"
import {Link} from "react-router"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {   
    const [IsShow,setIshow]=useState(false)

    const handleshow=()=>{
        setIshow((prevstate)=>!prevstate)
    }

  return (
    <section className=" text-white flex flex-col items-center py-16  gap-5 justify-center">
            <div className=" flex   w-1/2 px-4 h-[190px] gap-1  py-7 rounded-md">
            <img src={ProfileImg} className="w-36 h-36  object-cover  rounded-md" />
            <div className="mt-16 flex flex-col">
            <h1 className=" text-2xl font-semibold ">Ujjwal Gaihre</h1>
            <p className=" ml-1 text-[12px] font-semibold">Software Engineer</p>
            <div className="flex flex-row gap-2 px-1 p py-1  ">
                <Link to="https://github.com/ujjwal2061" target="_blank"><IoLogoGithub  /></Link>
                <Link to="https://www.linkedin.com/in/ujjwal-gaihre-9719ba289/" target="_blank"><FaLinkedin /></Link>
                <Link to="https://x.com/Ujjwal_2061" ><RiTwitterXFill /></Link>
            </div>
            </div>
            </div>
            <div className="p-2 w-1/2">
            <div className=" ">
             <h1 className="text-2xl underline mb-2  font-semibold">About Me</h1>
             <p className=" text-left   mb-2  font-semibold md:text-[15px] text-[15px] tracking-tighter">
             Hey, I’m Ujjwal Gaihre , an undergraduate Computer Science student and  full-stack 
             developer who loves building and shipping things that people actually use it . </p>
             {IsShow && (
                 <p>It me</p>
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
