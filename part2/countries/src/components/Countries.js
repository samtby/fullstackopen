//const Countries = ({countries,filter}) =><div>{countries.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}</div>
const Countries = ({countries,filter}) =>{
    const prop = [countries,filter]
    console.log('prop',  prop[0].length)
    
    
    console.log('countries',countries.length)
return (
    <div>
        {
        countries.length <=10? 
          countries.length ==1?
            countries.map(person =><li key={person.name.toString()}> {person.name } {person.capital}</li>)
              :countries.map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)
              :<p>Too many matches, specify another filter</p>}
    </div>
    )
}
export default Countries 