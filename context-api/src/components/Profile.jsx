import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
 const {data}=useContext(UserContext)
 if(!data){
    return(
        <div>
            Please enter details
        </div>
    )
 }
 return(
    <div className='text-black'>
        Hello {data.username}
    </div>
 )
}

export default Profile