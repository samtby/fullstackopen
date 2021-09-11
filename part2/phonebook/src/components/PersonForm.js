import personService from '../services/persons'

const PersonForm = ({persons,name,number,handlePerson,handlePhone,handleSetPersons,handleSetName,handleSetNumber,handleGetAll,handleNotif}) => {
//handleAddPerson
  const addPerson = (event) => {    
        event.preventDefault()
          const person = persons.filter(person => person.name === name)
          console.log("person",person)
          if(person.some(person => person.name === name)){
            //console.log("Object found inside the array.");       
                     
              if(person.some(person => person.number !== number)){
                console.log("id",person[0].id)                
                    if (window.confirm(`${name} is already added is already added to phonebook, replace the old number with a new one?`))
                      personService.update(person[0].id,{ name , number })
                      .then(returnedPerson =>{
                        handleSetPersons(persons.map(person => person.id !== returnedPerson.id ? person: returnedPerson))
                        }
                      )
                      //.then(response =>{handleGetAll()})
              }
          }else{              
              console.log("Object not found.")
              personService
                .create({ name , number })
                .then(returnedPerson  => {handleSetPersons(persons.concat(returnedPerson))
                  handleNotif(`Added '${name}`)
                  handleSetName()
                  handleSetNumber()
                })
                //.then(response =>response !== undefined?handleGetAll():console.log("Create error status."))              
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
