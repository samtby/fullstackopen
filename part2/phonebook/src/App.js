import React, { useState } from 'react'

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
    setNewName('')
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
      <div>
          name: <input name="filter" value={newFilter}  onChange={handleFilterChange}/>
      </div>
    <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={newName}  onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input name="number" value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.filter(name =>name.name.toLowerCase().includes(newFilter)).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}         
    </div>
  )
}

export default App