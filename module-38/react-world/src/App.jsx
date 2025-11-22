
import { Suspense } from 'react'
import './App.css'
import Countryes from './components/Countries/Countries'

const countriesPromise= fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>} >
        <Countryes countriesPromise={countriesPromise}></Countryes>
      </Suspense>
    </>
  )
}

export default App
