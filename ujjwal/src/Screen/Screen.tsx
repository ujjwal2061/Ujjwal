import  {ReactNode} from "react"
interface ScreenProps{
    children:ReactNode
}
export default function Screen({children}:ScreenProps) {
  return (
 <div>
      {children}
  </div>
  )
  
}
