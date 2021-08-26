//const Countries = ({countries,filter}) =><div>{countries.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}</div>
const Countries = ({countries,filter}) =>{
    const prop = [countries,filter]
    console.log('prop',  prop[0].length)
    
    
    console.log('countries',countries.length)
return (
    <div>
        {
        countries.length <=10? 
          countries.length ===1?
            //countries.map(countrie =><li key={countrie.name.toString()}> {countrie.name } {countrie.capital}</li>)
            countries.map(countrie =>
              <div key={countrie.name.toString()}>
                  <h2>{countrie.name }</h2>
                  <li>capital {countrie.capital}</li>
                  <li>population {countrie.population}</li>
                  <h2>languages</h2>
                  <ul>
                    {countrie.languages.map(language => <li key={language.name.toString()}>{language.name}</li>)}
                  </ul>                
                  <img  src={countrie.flag} alt="flag"  height="87px"  width="100px"/>                
              </div>)
              :countries.map(countrie =><li key={countrie.name.toString()}> {countrie.name } {countrie.number}</li>)
              :<p>Too many matches, specify another filter</p>}
    </div>
    )
}
export default Countries 