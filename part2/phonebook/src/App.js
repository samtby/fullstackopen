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
    
  const addPerson = (event) => {    
    event.preventDefault()

    const copy = [...persons]
    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log("addPerson",personObject)
        // Check if a value exists in the persons array
       if(copy.some(person => person.name === newName) && copy.some(person => person.number === newNumber)){
         console.log("Object found inside the array.");
          alert(`the note '${newName} ${newNumber} ' is already added to phonebook`)
      } else{ 
        
        setPersons(copy.concat(personObject))
          console.log("Object not found.");
      }           
    //app.setNewName('')
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
    {<form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={newName}  onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input name="number" value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>}
      {/*<PersonForm persons={persons} name ={newName} number={newNumber} handlePerson={handlePersonChange} handlePhone={handlePhoneChange}/>*/}
      <h3>Numbers</h3>      
      {/*persons.filter(name =>name.name.toUpperCase().includes(newFilter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)*/}
      {<Persons persons={persons} filter={newFilter}/>}
    </div>
  )
}

export default App