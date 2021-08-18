import React, { useState } from 'react'

const PersonForm = ({persons,name,number,handlePerson,handlePhone}) => {
  const [personsstate, setPersonsstate] = useState(persons);
    const addPerson = (event) => {    
        event.preventDefault()
    
        const copy = [...personsstate]
        const personObject = {
          name: name,
          number: number
        }
    
        console.log("addPerson",personObject)
            // Check if a value exists in the persons array
           if(copy.some(person => person.name === name) && copy.some(person => person.number === number)){
             console.log("Object found inside the array.");
              alert(`the note '${name} ${number} ' is already added to phonebook`)
          } else{             
            copy.concat(personObject)
            console.log("Tab persons",copy)
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
