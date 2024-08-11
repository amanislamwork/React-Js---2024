import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 " >
        <div className="flex justify-center gap-2 px-3 py-2 bg-white rounded-3xl ">
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("red")} style={{ backgroundColor: "red" }} > Red</button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("green")}  style={{ backgroundColor: "green" }} > green</button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("blue")}  style={{ backgroundColor: "blue" }} > blue</button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Black")}  style={{ backgroundColor: "Black" }} > Black</button>
          <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor("white")}  style={{ backgroundColor: "white" }} > white</button>
        </div>
      </div>
    </div>

  )
}

export default App
