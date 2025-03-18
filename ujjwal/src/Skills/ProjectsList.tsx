
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
IsComplete:"Ruuning",
description:`DailyPlanner is a web application designed to streamline task management with a single click. 
It generates a concise summary of users' task lists and allows interactive chat with the generated summary. 
Additionally, users can stay motivated by earning rewards for maintaining focus during 45-minute study sessions.`,
githublink:"https://github.com/ujjwal2061/Daliy-Planner",
livelink:"https://daliy-palnner.vercel.app/",
img:"Project0.png"
},
project1:{
    name:"Homy",
    IsComplete:"Building",
    description:`Homy is a MERN-based web application that simplifies the process of finding and renting accommodations, similar to Airbnb. 
    Built with MongoDB, Express.js, React.js, and Node.js, it features secure authentication using JWT (JSON Web Token). 
    Users can seamlessly list, browse, and book properties—all without relying on third-party services like Firebase or Cloudinary.`,
    githublink:"https://github.com/ujjwal2061/Booking-App",
    livelink:"",
    img:"Project1.png"
}
}
export const project:Project[]=Object.values(ProjectList)
