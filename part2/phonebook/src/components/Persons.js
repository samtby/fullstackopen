import personService from '../services/persons'
//const Persons = ({persons,filter}) =><div>{persons.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}<button  type="button" onClick={()=>personService.del(person.id).then(response =>{console.log("Reponse",response)})}>delete</button></li>)}</div>
const Persons = ({persons,filter,handleSetPersons,handleGetAll}) =>{

    const deletePerson = (id,name) => {    
        if (window.confirm(`Delete ${name} ?`)) 
            //personService.del(id).then(response =>{response.status === 200?handleGetAll():console.log(response.status)})        
            personService.del(id).then(response =>{response.status === 200?handleSetPersons():console.log(response.status)})        
    }
    if( persons !== undefined){
        return (
            <div>
                {persons.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase()))
                    .map(person =>
                    <li key={person.name.toString()}> {person.name } {person.number}
                        <button  type="button" onClick={()=>deletePerson(person.id,person.name)}>delete</button>
                    </li>
                    )}
            </div>)
    }
}
export default Persons