import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const bottlesPromiss= fetch('./bottles.json').then(res=>res.json())
const bottolesPromise2=fetch('./bottles.json').then(res=>res.json())

function App() {


  return (
    <>
      <h1>Buy Some Water Bottle </h1>
      <Suspense fallback={<h1>Bottles Are comming in here.......</h1>}>
        <Bottles bottlesPromiss={bottolesPromise2}></Bottles>
      </Suspense>
    </>
  )
}

export default App
