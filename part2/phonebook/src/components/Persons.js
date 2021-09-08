import personService from '../services/persons'
const Persons = ({persons,filter}) =><div>{persons.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}<button  type="button" onClick={()=>personService.del(person.id)}>delete</button></li>)}</div>

export default Persons 