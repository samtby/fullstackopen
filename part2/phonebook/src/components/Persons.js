import personService from '../services/persons'
//const Persons = ({persons,filter}) =><div>{persons.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}<button  type="button" onClick={()=>personService.del(person.id).then(response =>{console.log("Reponse",response)})}>delete</button></li>)}</div>
const Persons = ({persons,filter,handleGetAll}) =>{

const deletePerson = (id,name) => {
    

/*    const allPersones = []
    allPersones = personService.getAll() **/
    //console.log(personService.getAll())

    if (window.confirm(`Delete ${name} ?`)) {
        personService.del(id).then(response =>{response.status === 200?console.log(response.status):console.log(response.status)})    
    }

}
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
export default Persons