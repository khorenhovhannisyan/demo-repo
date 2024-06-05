
import "./user.css"

const UserList = ({handleUp,handleDown,handleDelete,info}) => {
   


  return (
    
        <table>
            <thead>
            <tr >
                <th>id</th>
                <th>name</th>
                <th>surname</th>
                <th>solary</th>
                <th>actions</th>
            </tr>

            </thead>

            <tbody>
                {info.map((elem)=>{
                    let stl = elem.solary>300000?"red":null
                  return <tr className={stl} key={elem.id}>
                   <td>{elem.id}</td>
                   <td>{elem.name}</td>
                   <td>{elem.surname}</td>
                   <td>{elem.solary}AMD</td>
                   <td>
                    <button onClick={()=>handleUp(elem.id)} >solaryUp</button>
                   <button onClick={()=>handleDown(elem.id)}>solaryDown</button>
                   <button onClick={()=>handleDelete(elem.id)}>delete</button>
                   </td>
                     </tr>
                })
                
                
                
                }
            </tbody>
           
        </table>
   
  )
}

export default UserList