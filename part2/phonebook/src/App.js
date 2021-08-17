import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas',number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {    
    event.preventDefault()
    const copy = [...persons]
    setNewName(event.target.value)
    
    const personObject = {
      name: newName
    }

    console.log("addPerson",personObject)
        // Check if a value exists in the fruits array
        //console.log(persons.includes(personObject))
        //persons.some(person => person.name === newName ? alert(`the note '${newName}' is already added to phonebook`) : setPersons(persons.concat(personObject)))
    
        if(copy.some(person => person.name === newName)){
          console.log("Object found inside the array.");
          alert(`the note '${newName}' is already added to phonebook`)
      } else{
          console.log("Object not found.");
          setPersons(copy.concat(personObject))
      }

      console.log("copyTab",copy);

        /*if(persons.includes(personObject)){
          //alert(newName +" is already added to phonebook")           
      } else{
      }*/
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  /*
    var array = [{"name": "john"}, {"name": "jack"}];
    var obj = {"name": "john"};
    alert(array.indexOf(obj));
    https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php
  */
 
  return(
    <div>
    <h2>Phonebook</h2>
    <form onSubmit={addPerson}>
        <div>
          name: <input  value={newName}  onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input  onChange={handlePhoneChange}/>
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