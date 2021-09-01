//const Countries = ({countries,filter}) =><div>{countries.filter(name =>name.name.toUpperCase().includes(filter.toUpperCase())).map(person =><li key={person.name.toString()}> {person.name } {person.number}</li>)}</div>
import React, {useState,useEffect} from 'react'
import axios from 'axios'
const Countries = ({countries,filter}) =>{
    const [ currentCountry, setcurrentCountry ] = useState('')
    const [ currentWeather, setcurrentWeather ] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {    
      setcurrentCountry('')
      setcurrentWeather([])
    }, [filter])

    useEffect(() => {
      if(currentCountry !==''){    
        const capital = countries.filter(counties => counties.alpha3Code === currentCountry).map(country =>country.capital.toString())

    axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    .then(
      response => {
        //console.log('response status',response)            
      setcurrentWeather(response.data)
    })
    .catch((err) => {
      //console.log('err',err)            
  })
  }else{
    setcurrentWeather([])
  }
}, [api_key,countries,currentCountry])/// Only re-run the effect if newFilter changes

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
                <h2>Weather in {country.capital}</h2>      
            </div>)}            
        </div>
      )      
  }else if(countries.length ===1 ){
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