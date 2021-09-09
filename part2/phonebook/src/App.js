import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
 
  useEffect(() => {
    personService     
    .getAll()     
    .then(data => {        
      setPersons(data)
    })
  }, [])
   
  function refreshPage() {
    window.location.reload(false);
  }
    
  const handleFilterChange = (event) => {
    if(event.target.name === 'filter')
    setNewFilter(event.target.value)    
    console.log( event.target.name ,event.target.value)
  }

  const handlePersonChange = (event) => {
    if(event.target.name === 'name')
      setNewName(event.target.value)
    console.log( event.target.name ,event.target.value)
  }
  
  const handlePhoneChange = (event) => {
    if(event.target.name === 'number')
      setNewNumber(event.target.value)       
    console.log( event.target.name ,event.target.value)
  }

  return(
    <div>
    <h2>Phonebook</h2>
      <Filter filter={newFilter} handle={handleFilterChange} />
    <h3>add a new</h3>
      {<PersonForm persons={persons} name ={newName} number={newNumber} handlePerson={handlePersonChange} handlePhone={handlePhoneChange} handleGetAll={refreshPage}/>}
      <h3>Numbers</h3>
      {<Persons persons={persons} filter={newFilter} handleGetAll={refreshPage}/>}
    </div>
  )
}

export default App