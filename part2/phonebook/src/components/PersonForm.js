import personService from '../services/persons'

const PersonForm = ({persons,name,number,handlePerson,handlePhone,handleSetPersons,handleSetName,handleSetNumber,handleNotif}) => {
//handleAddPerson

    const messageNotification = (message) =>{
      handleNotif(message)
      setTimeout(() => {
        handleNotif(null)
      }, 5000)
    }

  const addPerson = (event) => {    
     event.preventDefault()
      const person = persons.filter(person => person.name === name)
      if(person.length === 1){
        if(person.some(person => person.name === name)){
          if(person.some(person => person.number !== number)){   
            if (window.confirm(`${name} is already added is already added to phonebook, replace the old number with a new one?`))
              personService.update(person[0].id,{ name , number })
              .then(returnedPerson =>{ handleSetPersons(persons.map(person => person.id !== returnedPerson.id ? person: returnedPerson))
                console.log('success')
                messageNotification({status:`success`,content:`Added ${name}`})
                handleSetName()
                handleSetNumber()
              })
              .catch(error => {
                console.log('fail')
                messageNotification({status:`fail`,content:`Information of ${name} has already been removed from server`})
              })
          }
        }
      }else{              
        console.log("Object not found.")
        personService
          .create({ name , number })
          .then(returnedPerson  => {handleSetPersons(persons.concat(returnedPerson))
            console.log('success')
            messageNotification({status:`success`,content:`Added ${name}`})
            handleSetName()
            handleSetNumber()
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
