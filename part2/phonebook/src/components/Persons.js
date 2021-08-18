const Persons = ({persons,filter}) => {
    const prop ={persons,filter}
    console.log(prop.persons,prop.filter)
    //{persons.filter(name =>name.name.toLowerCase().includes(filter)).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}         
    //{persons.map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}
    console.log()
    return (
    <div>
        {persons.map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}
    </div>
    )
}
export default Persons 