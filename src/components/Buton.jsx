import { useContext } from "react"
import { CountCTXProvider } from "../ctx/CountCTX"



const Buton = ({text,name}) => {

    const [_,fn]=useContext(CountCTXProvider)

  return (
    <div>
        <button name={name}  onClick={fn}>{text}</button>
    </div>
  )
}

export default Buton