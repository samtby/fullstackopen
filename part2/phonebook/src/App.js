import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {    
    event.preventDefault()    
    console.log('button clicked', event.target.value)  
    setNewName(event.target.value)
        // Check if a value exists in the fruits array
        if(persons.indexOf(newName) !== -1){
          alert(`${newName} is already added to phonebook`)
      } else{
          alert("Value does not exists!")
          const personObject = {
            name: newName,
          }
           console.log("addPerson",newName)
          
          setPersons(persons.concat(personObject))
      }
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input   onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {persons.map(person =><li key={person.name.toString()}> {person.name }</li>)}         
      {/*<div>debug: {newName}</div>*/}
    </div>
  )
}

export default App