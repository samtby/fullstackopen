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
        // Check if a value exists in the fruits array
        //console.log(persons.includes(personObject))
        //persons.some(person => person.name === newName ? alert(`the note '${newName}' is already added to phonebook`) : setPersons(persons.concat(personObject)))
    
        if(copy.some(person => person.name === newName) && copy.some(person => person.number === newNumber)){
          console.log("Object found inside the array.");
          alert(`the note '${personObject.name} ${personObject.phone} ' is already added to phonebook`)
      } else{
          console.log("Object not found.");
          setPersons(copy.concat(personObject))
      }
      console.log("copyTab",copy);
      console.log("personsTab",persons);
      

        /*if(persons.includes(personObject)){
          //alert(newName +" is already added to phonebook")           
      } else{
      }*/
    setNewName('')
  }

  const handlePersonChange = (event) => {
    const target = event.target;
    const value = target.name === 'name' ? setNewName(target.value) : target.value;
    console.log( target.name ,target.value)
    /*console.log(event.target.value)
    setNewName(event.target.value)*/
  }
  
  const handlePhoneChange = (event) => {
    const target = event.target;
    const value = target.name === 'number' ? setNewNumber(target.value) : target.value;
    console.log( target.name ,target.value)
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