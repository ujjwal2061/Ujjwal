
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
    IsComplete:"Running",
    description: "Built Writly, a complete social media application, to gain practical experience with CRUD operations and effectively design and consume RESTful APIs. The project focuses on real-world functionality like user interaction, post management, and dynamic content rendering.",
    githublink:"https://github.com/ujjwal2061/Pen-Post",
    livelink:"https://writly-dot.vercel.app",
    img:"Project2.png",
},
project3:{
    name:"MeetaLogic",
    IsComplete:"Running",
    description: "MeetaLogic is a visually engaging web project where I focused heavily on modern styling and smooth animations to enhance user experience. The goal was to create a clean, interactive interface that feels dynamic and polished. Using responsive design principles and subtle animation effects, I brought life to the layout, making it both functional and aesthetically pleasing.",
    githublink:"https://github.com/ujjwal2061/MetaLogic",
    livelink:"https://meta-logic-xi.vercel.app/",
    img:"Project3.png",
}
}
export const allproject:Project[]=Object.values(ProjectList).slice(4)
export const project:Project[]=Object.values(ProjectList).slice(0,4)
