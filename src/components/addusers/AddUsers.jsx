import "./addusers.css"
import { useState } from "react"

const AddUsers = ({setInfo}) => {

    const [form,setForm]=useState({name:"",surname:"",solary:80000})

    console.log(form)
  return (
    
    <form >
        <input onChange={(e)=>setForm({...form,name:e.target.value})} value={form.name} placeholder="name" type="text" />
        <input onChange={(e)=>setForm({...form,surname:e.target.value})} value={form.surname} placeholder="surname" type="text" />
        <input onChange={(e)=>setForm({...form,solary:+e.target.value})} value={form.solary} placeholder="solary" type="text" />
           
        <button onClick={(e)=>{
            e.preventDefault()
            setInfo(form)
            console.log(form)
        }}>addUser</button>


    </form>
  )
}

export default AddUsers