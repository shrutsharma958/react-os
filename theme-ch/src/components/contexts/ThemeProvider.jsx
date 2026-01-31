import React, { useEffect, useState } from 'react'
import Theme from './Theme'

function ThemeProvider({children}) {
    const[theme,setTheme]=useState("light")
    function lightTheme(){
        setTheme("light")
    }
    function darkTheme(){
        setTheme("dark")
    }
    useEffect(()=>{
        document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    },[theme])
  return (
    <Theme.Provider value={{theme,lightTheme,darkTheme}}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeProvider