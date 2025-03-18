 import { project } from "../Skills/ProjectsList"
 import { Link } from "react-router"
 import { FaGithub } from "react-icons/fa";
 import { TbBrandLivewire } from "react-icons/tb";
 import { GoDotFill } from "react-icons/go";
 export default  function Project(){
    return(
<section className="text-white flex flex-col md:items-center justify-center gap-2">
    <div className="md:w-[615px]  lg:w-[815px]   flex flex-col  w-full" >
      <h1 className="px-2 font-semibold underline text-2xl">Projects</h1>
     <div className=" px-2">
        {project.map((project,index)=>{
           return <div key={index} className="bg-zinc-800 hover:bg-zinc-900 bg-opacity-50 border-2  border-zinc-700 rounded-md  m-2">
                <div className="px-3 py-4 cursor-pointer h-52 rounded-md ">
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
                <p className="px-2 py-1 text-zinc-400 text-[16px] font-medium">{project.description}</p>
                </div>
            </div>
        })}
     </div>
    </div>
</section>
    )
}
