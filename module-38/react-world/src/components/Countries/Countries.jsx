import React, { use, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountryies]=useState([])
  const handlrVisitedCountry=(country)=>{
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountryies(newVisitedCountries)
    console.log('handlr visited country visited', country)
  }

  const countriesData=use(countriesPromise)
  const countries=countriesData.countries;
  console.log(countries)

  return (
    <div >
        <h2>Countryes Component {countries.length}</h2>
        <h3>Total Visited Country : {visitedCountries.length}</h3>
        <div>
          <ol>
            {
              visitedCountries.map(country=> <li>{country.name.common}</li>)
            }
          </ol>
        </div>
       <div className='countries'>
        {
        countries.map(country=><Country 
          key={country.cca3.cca3} 
          country={country} 
          handlrVisitedCountry={handlrVisitedCountry}
          ></Country>)
        }
       </div>
    </div>
  )
}

export default Countries