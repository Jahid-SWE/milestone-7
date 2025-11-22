import React, { useState } from 'react'
import './Country.css'

const Country = ({country, handlrVisitedCountry}) => {
  
  // console.log(handlrVisitedCountry);
    // console.log(country)
    const [visted, setVisite]= useState(false)
    const handlrVisited= ()=>{
      setVisite(!visted)
      handlrVisitedCountry(country)
      
    }
  return (
    <div className={`country ${visted && 'country-visited'}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h1> {country.name.common}</h1>
        <p>Population : {country.population.population}</p>
        <p>Region : {country.region.region} </p> 
        <p>Area :  {country.area.area} 
        {
          country.area.area >300000 ? ' Big Country': ' Small Country'
        }
        </p>
        <button onClick={handlrVisited}>
          {
            visted ? 'Visited' : 'Not Visited'
          }
        </button>
    </div>
  )
}

export default Country