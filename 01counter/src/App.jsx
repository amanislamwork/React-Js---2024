import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, updateCounter] = useState(5) 

  //let counter = useState(5)

  const addValue = ()=>{
    // console.log("value added" + Math.floor(Math.random()*10));
    // counter = counter + 1
    // if(counter < 20){
      // updateCounter(counter + 1)
      // updateCounter(counter + 1)
      // updateCounter(counter + 1)
      // updateCounter(counter + 1)

      //  updateCounter((prevCounter)=>prevCounter+1)
      //  updateCounter((prevCounter)=>prevCounter+1)
      //  updateCounter((prevCounter)=>prevCounter+1)
      //  updateCounter((prevCounter)=>prevCounter+1)

        updateCounter(prevCounter =>prevCounter+1)
        updateCounter(prevCounter =>prevCounter+1)
        updateCounter(prevCounter =>prevCounter+1)
        updateCounter(prevCounter =>prevCounter+1)

      console.log("Clicked" + counter);
    // }
    

  }
  const removeValue = ()=>{
    // console.log("value added" + Math.floor(Math.random()*10));
    // counter = counter + 1
    if( counter > 0 ){
      updateCounter(counter - 1 )
      console.log("Clicked" + counter);
    }
     
  
   

  }
  return (
    <>
      <h1>Aman aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button><br/>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>

      <p>
      footer : {counter}
      </p>
    </>
  )
}

export default App
