import personService from '../services/persons'

const PersonForm = ({persons,name,number,handlePerson,handlePhone,handleGetAll}) => {
//handleAddPerson
  const addPerson = (event) => {    
        event.preventDefault()
        if(persons.some(person => person.name === name) && persons.some(person => person.number === number)){
          console.log("Object found inside the array.");
          alert(`the note '${name} ${number} ' is already added to phonebook`)
        }else{
          //handleAddPerson()              
          console.log("Object not found.");
          personService.create({ name , number })
          //handleGetAll()
        }    
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
