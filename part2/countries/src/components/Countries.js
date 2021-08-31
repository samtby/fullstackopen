//const Countries = ({countries,filter}) =><div>{countries.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}</div>
import React, {useState} from 'react'
const Countries = ({countries,filter}) =>{

    //const prop = [countries,filter]
    const [ currentCountry, setcurrentCountry ] = useState('')   
    console.log('showCountry',currentCountry)
    console.log('countries',countries)

    
  if(currentCountry !==''){
    return (
      <div>
        {countries.filter(counties => counties.alpha3Code === currentCountry)
          .map(country =>
                  <div key={country.name.toString()}>
                      <h2>{country.name }</h2>
                      <li>capital {country.capital}</li>
                      <li>population {country.population}</li>
                      <h2>languages</h2>
                      <ul>
                        {country.languages.map(language => <li key={language.name.toString()}>{language.name}</li>)}
                      </ul>                
                      <img  src={country.flag} alt="flag"  height="87px"  width="100px"/>                
                  </div>)
            }
        </div>
      )      
  }else if(countries.length ===1 ){
  //https://sebhastian.com/react-filter/
return (
  <div>
    {countries
      .map(country =>
              <div key={country.name.toString()}>
                  <h2>{country.name }</h2>
                  <li>capital {country.capital}</li>
                  <li>population {country.population}</li>
                  <h2>languages</h2>
                  <ul>
                    {country.languages.map(language => <li key={language.name.toString()}>{language.name}</li>)}
                  </ul>                
                  <img  src={country.flag} alt="flag"  height="87px"  width="100px"/>                
              </div>)
        }
    </div>
  )
    }else if(countries.length <=10){
      return (
        <div> 
            {countries.map(country =><li key={country.name.toString()}> {country.name } {country.number}<button  type="button" onClick={()=> setcurrentCountry(country.alpha3Code.toString())} >show</button></li>)}
      </div>
      )
    }else{
      return (
        <div> 
          <p>Too many matches, specify another filter</p>
        </div>
      )
    }
/*
return (
    <div>
        {
        countries.length <=10? 
          countries.length ===1?
            //countries.map(countrie =><li key={countrie.name.toString()}> {countrie.name } {countrie.capital}</li>)
            countries.filter(word => word.name === currentCountry).countries.map(country =>
              <div key={country.name.toString()}>
                  <h2>{country.name }</h2>
                  <li>capital {country.capital}</li>
                  <li>population {country.population}</li>
                  <h2>languages</h2>
                  <ul>
                    {country.languages.map(language => <li key={language.name.toString()}>{language.name}</li>)}
                  </ul>                
                  <img  src={country.flag} alt="flag"  height="87px"  width="100px"/>                
              </div>)
              :countries.map(country =><li key={country.name.toString()}> {country.name } {country.number}<button  type="button" onClick={showCountry} >show</button></li> )
              :<p>Too many matches, specify another filter</p>}
    </div>
    )*/
}
export default Countries 