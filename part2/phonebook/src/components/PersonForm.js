import personService from '../services/persons'

const PersonForm = ({persons,name,number,handlePerson,handlePhone,handleGetAll}) => {
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
                        personService.update(person[0].id,{ name , number }).then(response =>{response.status === 200?handleGetAll():console.log(response.status)})            
              }
          }else{
            //handleAddPerson()              
            console.log("Object not found.");
            //personService.create({ name , number }).then(response =>{response.status === 200?console.log(response):console.log(response)})                        
            personService.create({ name , number }).then(response =>response !== undefined?handleGetAll():'')
            
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
