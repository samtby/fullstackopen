//import React, { useState } from 'react'

const PersonForm = ({persons,name,number,handleAddPerson,handlePerson,handlePhone}) => {
  //const [personsstate, setPersonsstate] = useState(persons);
    const addPerson = (event) => {    
        event.preventDefault()
    
        //const copy = [...personsstate]
        const personObject = {
          name: name,
          number: number
        }
        console.log("addPerson",personObject)
            // Check if a value exists in the persons array
           if(persons.some(person => person.name === name) && persons.some(person => person.number === number)){
             console.log("Object found inside the array.");
              alert(`the note '${name} ${number} ' is already added to phonebook`)
          } else{
            //setPersonsstate()
            //handleAddPerson(persons.concat(personObject))
            handleAddPerson()
            console.log("Tab persons",persons)
              console.log("Object not found.");
          }     
        //app.setNewName('')
      }
    return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={name}  onChange={handlePerson}/>
        </div>
        <div>
          number: <input name="number" value={number} onChange={handlePhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
    )
}
export default PersonForm
