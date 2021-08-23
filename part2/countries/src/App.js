import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [ newFilter, setNewFilter ] = useState('France')
  const [ countries, setCountries ] = useState([]) 
  useEffect(() => {
    console.log('effect')
    axios
    .get(`https://restcountries.eu/rest/v2/name/${newFilter}?fullText=true`)
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])
  
  const handleFilterChange = (event) => {
    if(event.target.name === 'filter')
    setNewFilter(event.target.value)    

    console.log( event.target.name ,event.target.value)
  }
  return (
    <div>
      <Filter filter={newFilter} handle={handleFilterChange}/>
      {/*<Countries countries={countries} filter={newFilter}/>*/}
    </div>
  )
}

export default App
