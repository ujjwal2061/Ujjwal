import  {ReactNode,useEffect,useState} from "react"
import { motion } from "motion/react"
interface ScreenProps{
    children:ReactNode
    className?:string
    initalBlur?:number
}
export default function Screen({children,className,initalBlur=0}:ScreenProps) {
  const [IsHover,setIsHover]=useState<boolean>(false)
  const [isLoading,setLoading]=useState<boolean>(false);
  const [textIndex,setTextIndex]=useState<number>(0)
  
  const textLength:string[]=["नमस्ते ", "Hello", "いらっしゃいませ "," Welcome!"]
  const introtimer:number=900 
const ismoblieview="ontouchstart" in window || navigator.maxTouchPoints>0
  useEffect(()=>{
    const texttimer=setInterval(()=>{
      setTextIndex((prev)=>(prev+1)%textLength.length)
    },introtimer)
   const timer=setTimeout(()=>{
    clearInterval(texttimer);
  
    setLoading(true)
   },3600)
  
   return ()=>{
    clearInterval(texttimer)
    clearTimeout(timer)
   }
  },[])

  return (
 <motion.div
 initial={{filter:`blur{${initalBlur}px)`,opacity:0.5}}  
 animate={{
    filter: IsHover ? "blur(0px)" : "blur(5px)",
    opacity: IsHover ? 1 : 0.8, 
  }} 
  transition={{duration:0.6,ease:"easeOut"}}
  onHoverEnd={()=>setIsHover(true)}
  onHoverStart={()=>setIsHover(true)}
  onTouchStart={ismoblieview ? ()=>setIsHover(true):undefined}
  className={className}
 >
   {isLoading ? (
       children
      ) : (
        <motion.div
        className="flex justify-center font-serif text-white items-center h-screen  text-3xl  lg:text-5xl font-bold"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
       {textLength[textIndex]}
      </motion.div>
      )}
    </motion.div>
  )
  
}
