
import Project from "../Section/Project"

interface Project{
    name:string,
    description:string,
    githublink:string,
    livelink:string,
    img:string,
    IsComplete:string,
}

const ProjectList:Record<string,Project>={
project0:{
name:"Daily Planner",
IsComplete:"Running",
description:`DailyPlanner is a web application designed to streamline task management with a single click. 
It generates a concise summary of users' task lists and allows interactive chat with the generated summary. 
Additionally, users can stay motivated by earning rewards for maintaining focus during 45-minute study sessions.`,
githublink:"https://github.com/ujjwal2061/Daliy-Planner",
livelink:"https://daliy-palnner.vercel.app/",
img:"Project0.png"
},
project1:{
    name:"Homy",
    IsComplete:"Running",
    description:`Homy is a MERN-based web application that simplifies the process of finding and renting accommodations, similar to Airbnb. 
    Built with MongoDB, Express.js, React.js, and Node.js, it features secure authentication using JWT (JSON Web Token). 
    Users can seamlessly list, browse, and book properties—all without relying on third-party services like Firebase or Cloudinary.`,
    githublink:"https://github.com/ujjwal2061/Booking-App",
    livelink:"https://hoomy.vercel.app",
    img:"Project1.png"
},
project2:{
    name:'Writly',
    IsComplete:"Building",
    description:`Writly is Full Compelete Blogging web-application .Still in Building Process `,
    githublink:"https://github.com/ujjwal2061/Pen-Post",
    livelink:"https://writly-dot.vercel.app",
    img:"Project2.png",
}
}
export const allproject:Project[]=Object.values(ProjectList).slice(3)
export const project:Project[]=Object.values(ProjectList).slice(0,3)
