import React from 'react'
import { useState } from 'react'


const App = () => {
  const [color,setColor] = useState("black")
  return (
    <div className='w-full h-screen duration-200'
      style = {{backgroundColor : color}}>
        <div className='fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2'>
        <div className='gap-3 flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"blue"}}>Blue</button>
            <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"pink"}}>Pink</button>
            <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"orange"}}>Orange</button>
            <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"purple"}}>purple</button>
           <button onClick={()=>setColor("Yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"Yellow"}}>Yellow</button>
            <button onClick={()=>setColor("Olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"Olive"}}>Olive</button>
            <button onClick={()=>setColor("Black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:"Black"}}>Black</button>
        </div>
        </div>
    </div>
  )
}

export default App
