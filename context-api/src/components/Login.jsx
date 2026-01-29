import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const[username,setUsername]=useState(null)
    const{setData}=useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setData({username})
    }

  return (
    <div>
        <input type="text" value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login