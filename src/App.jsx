import UserList from './components/user/UserList'
import AddUsers from './components/addusers/AddUsers'
import { data } from './components/data/data'
import { useState } from 'react'
import './App.css'

const dataCopy = [...data]



function App() {

  const [info,setInfo]=useState(dataCopy)

  function handleUp (id){
    let person = info.find((elem)=>elem.id==id)
    if(person){
      person.solary += 50000
    }
    setInfo([...info])
  }

  function handleDown (id){

      const person = info.find((elem)=>elem.id==id)
      if(person && person.solary>=50000){
          person.solary -= 50000
         
         
      }
      setInfo([...info ])
     

  }

  function handleDelete (id){
    setInfo([...info.filter((elem)=>id!=elem.id)])
      

  }

  function handleAdd(obj){
   setInfo([...info,{...obj,id:Date.now()}])

  }

  return (
   <div>


    
    <p>hello</p>
    <AddUsers setInfo={handleAdd}></AddUsers>
   <UserList info={info} handleUp={handleUp} handleDown={handleDown} handleDelete={handleDelete} ></UserList>
   </div>
  ) 
}

export default App
