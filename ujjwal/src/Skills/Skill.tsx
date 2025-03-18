import { ReactNode } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiFirebase, SiMongodb, SiPostman, SiRedux, SiFramer, SiNextdotjs, SiVercel } from "react-icons/si";

export interface Skill{
    name:string,
    icons:ReactNode
}
const IconsMap:Record<string,ReactNode>={
    ReactJs: <FaReact size={20} />,
    JavaScript: <SiJavascript size={20}  />,
    TypeScript: <SiTypescript size={20}   />,
    Tailwindcss: <SiTailwindcss  size={20}/>,
    NodeJs: <FaNodeJs size={20} />,
    ExpressJs: <SiExpress  size={20} />,
    Firebase: <SiFirebase  size={20} />,
    MongoDB: <SiMongodb size={20} />,
    Postman: <SiPostman size={20} />,
    Redux: <SiRedux  size={20} />,
    Motion: <SiFramer  size={20}/>,
    NextJs: <SiNextdotjs size={20}  />,
    ShadcnUI: <SiTailwindcss size={20} />,
    Figma: <FaFigma  size={20} />,
    Git: <FaGitAlt size={20} />,
    Vercel: <SiVercel size={20} />,
    GitHub: <FaGithub  size={20}/>,
  };
  export const SkillList:Skill[]=Object.keys(IconsMap).map((key)=>({
    name:key,
    icons:IconsMap[key]
  }))
