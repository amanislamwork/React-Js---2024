import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

let myObj = {
  username : "aman",
  learning : "react"
}


  return (
    <>
      <Card name="aman" {...myObj} btnText="click here" />
      <Card name="venom"    />
    </>
  )
}

export default App
