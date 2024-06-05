import Buton from "./Buton"
import { useContext } from "react"
import { CountCTXProvider } from "../ctx/CountCTX"


const Counter = () => {
    const [count] = useContext(CountCTXProvider)
  return (
    <div>
        <Buton name="minus"  text="minus"></Buton>
        <span>{count}</span>
        <Buton name="plus" text="plus" ></Buton>
    </div>
  )
}

export default Counter