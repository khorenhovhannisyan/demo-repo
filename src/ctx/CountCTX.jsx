
import { createContext,useState } from "react"


  export const CountCTXProvider =  createContext(null)


const CountCTX = ({children}) => {

    const [count,setCount]=useState(15)

    function handleClick (e){
      
        e.target.name=="plus"?setCount(count+1):setCount(count-1)
    }


  return (
    <CountCTXProvider.Provider value={[count,handleClick]}>{children}</CountCTXProvider.Provider>
  )
}

export default CountCTX