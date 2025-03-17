import { SkillList } from "../Skills/Skill"
export  default function Skill(){

    return(
        <section className=" text-white   flex flex-col md:items-center  gap-5 justify-center">
         <div className=" md:w-1/2 p-2 flex flex-col  w-full">
        <h1 className="px-2 font-semibold underline text-2xl">Skill & Tools</h1>
        <div className="grid  p-2  w-full grid-cols-3 md:grid-cols-4 gap-1 mt-1">
             {SkillList.map((skill,index)=>(
                <div key={index} 
                className=" bg-zinc-800 flex  justify-center font-semibold items-center  text-white md:w-18 py-2 shadow-md   px-3 rounded-md text-center text-sm">
                <li className="flex items-center px-3 gap-2 ">
                <span>{skill.icons}</span>
                <span>{skill.name}</span>
                </li></div>
             ))}
        </div>
        </div>
    </section>      
    )
}