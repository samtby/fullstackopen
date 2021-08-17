import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas',number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  /*
    https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php
  */
 
  return(
    <div>
    <h2>Phonebook</h2>
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
       {persons.map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}         
      {/*<div>debug: {newName}</div>*/}
    </div>
  )
}

export default App