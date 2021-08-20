import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Ada Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
 
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
      {<PersonForm persons={persons} name ={newName} number={newNumber} handleAddPerson={() => setPersons(persons.concat({ name:newName , number:newNumber }))} handlePerson={handlePersonChange} handlePhone={handlePhoneChange}/>}
      <h3>Numbers</h3>
      {<Persons persons={persons} filter={newFilter}/>}
    </div>
  )
}

export default App