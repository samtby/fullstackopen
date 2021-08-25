import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [ newFilter, setNewFilter ] = useState('')
  const [ countries, setCountries ] = useState([]) 
  const [error, setError] = useState('');
  const initialStateCountries = []
    useEffect(() => {
      console.log('effect')
        if(newFilter !== ''){
          axios
          .get(`https://restcountries.eu/rest/v2/name/${newFilter}`)
          .then(
            response => {
              console.log('response status',response)
              
            //console.log('promise fulfilled',response)
            
            setCountries(response.data)
          })
          .catch((err) => {
            console.log('err',err)
            setError(err);
        })
        console.log('effect',countries)
      }
    }, [newFilter])// Only re-run the effect if newFilter changes
    
  const handleFilterChange = (event) => {
    if(event.target.name === 'filter')
    setNewFilter(event.target.value)    
    console.log(event.target.name ,event.target.value)
  }

  const clearStateCountries = () => {
    setCountries({ ...initialStateCountries });
  };
  return (
    <div>
      <Filter filter={newFilter} handle={handleFilterChange} />
      <Countries countries={countries} filter={newFilter}/>
    </div>
  )
}

export default App
