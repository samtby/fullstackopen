const PersonForm = ({fonc,persons,name,number,handlePerson,handlePhone}) => {

    const addPerson = (event) => {    
        event.preventDefault()
    
        const copy = [...persons]
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
            
            fonc(copy.concat(personObject))
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
