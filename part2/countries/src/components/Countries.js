//const Countries = ({countries,filter}) =><div>{countries.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}</div>
const Countries = ({countries,filter}) =>{
    const prop = [countries,filter]
    console.log('countries',  countries.lenght)
    
  const isMoreTenResult = () => {
    var test = null
     
    
  };

return (
    <div>
        {countries.map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}
    </div>
    )
}
export default Countries 