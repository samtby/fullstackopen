import personService from '../services/persons'

const PersonForm = ({persons,name,number,handlePerson,handlePhone,handleSetPersons,handleSetName,handleSetNumber,handleNotif}) => {
  
    const messageNotification = (message) =>{
      handleNotif(message)
      setTimeout(() => {
        handleNotif(null)
      }, 3000)
    }

  const addPerson = (event) => {    
     event.preventDefault()
      const person = persons.filter(person => person.name === name)
      if(person.length === 1){
        if(person.some(person => person.name === name)){
            if (window.confirm(`${name} is already added is already added to phonebook, replace the old number with a new one?`))
              personService.update(person[0].id,{ name , number })
              .then(returnedPerson =>{ handleSetPersons(persons.map(person => person.id !== returnedPerson.id ? person: returnedPerson))
                if(returnedPerson.error !== undefined)
                  messageNotification({status:`fail`,content:returnedPerson.error})
                else
                  messageNotification({status:`success`,content:`Added ${name}`})
                  handleSetName()
                  handleSetNumber()
              })
        }
      }else{              
        personService
          .create({ name , number })
          .then(returnedPerson  => {
            if(returnedPerson.error !== undefined)
              messageNotification({status:`fail`,content:returnedPerson.error})
            else{
              handleSetPersons(persons.concat(returnedPerson))  
              console.log('success')
              console.log(returnedPerson)
              messageNotification({status:`success`,content:`Added ${name}`})
              handleSetName()
              handleSetNumber()
            }
          })
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
