import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [ data,setData]=useState(null)
    useEffect(()=>{
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then(data=>data.json())
    .then(data => setData(data))},[])
    
   
   
  return (
    <h1>Followers Count : {data?data.followers:"Loading ..."}</h1>
  )
}

export default Github