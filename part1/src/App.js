import React from 'react'

console.log('Hello from component')
// Use JSX like next expression: {a} plus {b} is {a + b}  
// in this component
const App1 = () => {
  const now = new Date()
  const a = 10
  const b = 20
  
  const name = 'Peter'  
  const age = 10

  return ( 
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}  
      </p>
      <br/>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="George" age="35"/>
      <Hello name="Daisy" age="32"/>
      <Hello name={name} age={age}/>
      <Hello name="Maya" age={26 + 10} />
      <Footer/>
    </div>
  )
}

const Hello = (props) => {  
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

//On root element, an array of components is also a valid solution
const App2 = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App
