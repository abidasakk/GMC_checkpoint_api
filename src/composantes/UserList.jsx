import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function UserList(){
    let [data,setdata]=useState([]);
    let [error,seterror]=useState(null)
    useEffect( ()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>  {
            console.log(res.data);
            setdata(res.data)
        }
        
        )
        .catch(err=> console.error(err))
    },[])




return(

<>
<div>
   <ul>
      {data.map(source=>(
        <li>

            <p>{source.name} </p>
            <h5>{source.email} </h5>
            <h5>{source.address.street} </h5>

        </li>

      ))}
   </ul>
</div>
</>
)}
export default UserList;