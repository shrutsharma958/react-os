import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/userContext'
import UserContextProvider from './context/userContextProvider'


function App() {


  return (
   <UserContextProvider>
    <h1>
      Welcome
    </h1>
    <Profile/>
    <Login/>
    </UserContextProvider>
  )
}

export default App
