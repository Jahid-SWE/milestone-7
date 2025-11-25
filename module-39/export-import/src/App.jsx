import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff } from './utils/Math/math'

function App() {
  const [count, setCount] = useState(0)

  const sum= add(5,10);
  const sub= diff(80,50)
  console.log(sum,sub);

  return (
    <>
    
     
      <h1>Vite + React</h1>
     
      
    </>
  )
}

export default App
