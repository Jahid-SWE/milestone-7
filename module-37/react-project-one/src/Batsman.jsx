import React, { useState } from 'react'

const Batsman = () => {
  const [runs, setRuns] = useState(0)
  const [sixes, setSixes]=useState(0)
  const [fours, setFours]= useState(0)
  const handleSingle = () => {
    const newRuns = runs + 1;
    setRuns(newRuns)
  }
  const handleDouble = () => {
    const newRuns = runs + 2
    setRuns(newRuns)
  }
  const handleFour = () => {
    const newRuns = runs + 4
    const newFours= fours+ 1
    setFours(newFours)
    setRuns(newRuns)
  }
  const hansleSix = () => {
    const newRuns = runs + 6;
    const newSixes= sixes + 1
    setSixes(newSixes)
    setRuns(newRuns)
  }

  return (
    <div>
      <h3>Player Bangladesh Batsman</h3>
      <h3>Total Sixes : {sixes}</h3>
      <h3>Total Fours : {fours}</h3>
      <h3>Total Fours : {}</h3>
      {
        runs > 50 ? <p>Opps! 50</p> : <p></p>
      }
     
      <h1>BD Score :{runs} </h1>
      <button onClick={handleSingle}>Single Runs</button>
      <button onClick={handleDouble}>Double Runs</button>
      <button onClick={handleFour}>Four Runs</button>
      <button onClick={hansleSix}>Four Runs</button>

    </div>
  )
}

export default Batsman