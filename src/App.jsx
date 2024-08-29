import { useState } from 'react'

function App() {
  
  let [color,setColor] = useState("green")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px- 3 py-2 rounded-2xl'>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Green"}} onClick={()=>setColor("Green")}
        >Green</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Black"}} onClick={()=>setColor("Black")}
        >Black</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-black shadow-xl'
        style={{backgroundColor: "White"}} onClick={()=>setColor("White")}
        >White</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "red"}} onClick={()=>setColor("red")}
        >Red</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Olive"}} onClick={()=>setColor("Olive")}
        >Olive</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Purple"}} onClick={()=>setColor("Purple")}
        >Purple</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Grey"}} onClick={()=>setColor("Grey")}
        >Grey</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-black shadow-xl'
        style={{backgroundColor: "Khaki"}} onClick={()=>setColor("Khaki")}
        >Khaki</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-white shadow-xl'
        style={{backgroundColor: "Orange"}} onClick={()=>setColor("Orange")}
        >Orange</button>
        <button className='outline-none px-4 py-1 rounded-full mx-3 text-black shadow-xl'
        style={{backgroundColor: "Yellow"}} onClick={()=>setColor("Yellow")}
        >Yellow</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
