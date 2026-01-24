import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import Currency from './hooks/Currency'

function App() {
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[amount,setAmount]=useState(0)
  const[newamount,setNewamount]=useState(0)
  const currency=Currency(from)
const currencyOptions =  Object.keys(currency)
  function convert(){
    setNewamount(amount*currency[to])
  }
  useEffect(()=>{
    convert()
  },[amount,from,to])

  function swap(){
    setFrom(to)
    setTo(from)
     setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  return (
   <div style={{backgroundColor:"#8F00FF "}} className='w-full h-screen flex'>
    <div className=' px-4 py-4 max-w-lg flex rounded-2xl mx-auto my-auto backdrop-blur-md bg-white/30 w-full justify-center flex-wrap'>
    <div className='w-full bg-amber-50 rounded-2xl px-4 py-4 relative flex justify-center'>
       <InputBox currencys={currency}label={from} value={amount} setValue={(a)=>setAmount(a)} setCurrency={(currency)=>setFrom(currency)}/>
      <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -bottom-5 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' style={{backgroundColor:"#6495ED"}}>
        Swap
      </button>
    </div>
    
    <div  className='w-full bg-amber-50 rounded-2xl px-4 py-4 mt-2 flex justify-center'>
       <InputBox currencys={currency} label={to} value={newamount} setValue={(amount)=>setNewamount(amount)} setCurrency={(currency)=>setTo(currency)}/>
    </div>
    <button className='rounded-2xl py-3 mt-5  text-amber-50 w-full text-2xl' style={{backgroundColor:'#6495ED'}}>Convert</button>
    </div>
   </div>
   
  )
}

export default App
