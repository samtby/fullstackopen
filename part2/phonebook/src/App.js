import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'},
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {    
    event.preventDefault()    
    setNewName(event.target.value)
    
    const personObject = {
      name: newName
    }

    console.log("addPerson",personObject)
        // Check if a value exists in the fruits array
        console.log(persons.includes(personObject))
        if(persons.includes(personObject)){
          alert(newName +" is already added to phonebook")
      } else{

           
          setPersons(persons.concat(personObject))
      }
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  /*
    var array = [{"name": "john"}, {"name": "jack"}];
    var obj = {"name": "john"};
    alert(array.indexOf(obj));
  */
  
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