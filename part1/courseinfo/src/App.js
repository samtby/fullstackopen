import React, { useState } from 'react'

const Header = (props) => {
  console.log("Header",props)
  return (
  <>
    <h1>{props.course.name}</h1>
  </>
  )
}

const Content  = (props) => {
  
  console.log("Contect",props)
  return (
  <div>
    <Part parts={props.parts.parts[0].name}  exercises={props.parts.parts[0].exercises}/>
    <Part parts={props.parts.parts[1].name}  exercises={props.parts.parts[1].exercises}/>
    <Part parts={props.parts.parts[2].name}  exercises={props.parts.parts[2].exercises}/>
  </div>
  )
}

const Part  = (props) => {  
  console.log("Part",props)
  return (
  <>
    <p>
      {props.parts} {props.exercises}
    </p>
  </>
  )
}

const Total  = (props) => {  
  console.log("Total",props)
  return (
  <>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises +props.parts.parts[2].exercises}</p>
  </>
  )
}
 /*
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course} /> 
      <arto />
    </div>
  )
}
*/

//<Content part={parts}/>
//<Total total={part1.exercises +part2.exercises+ part3.exercises}/>
/* Old course information 
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

*/
/*
const Hello = (props) => {
  const { name, age } = props Destructuring
*/
/////////////////////////////
///  Component helper functions and Destructuring
/////////////////////////////

/* 
const Hello = ({ name, age }) => { // Destructuring
  const bornYear = () => new Date().getFullYear() - age 

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
*/

//
// c Component state, event handlers
// ----------------------------------------------------------------------
/*
const Button = ({handleClick,text}) => //Destructuring
<button onClick={handleClick}> 
  {text} 
</button>

// compact of arrow functions:
const Display = ({ counter }) => <div>{counter}</div>


const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)  
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleClick = () => {    console.log('clicked')  }
  //console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} 
        text='plus' 
      />
      <Button handleClick={setToZero} 
        text='zero'
      />
       <Button handleClick={decreaseByOne}
        text='minus' 
       />    
    </div>
  )
}
*/
//
// d A more complex state, debugging React apps
// ----------------------------------------------------------------------
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1) 
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)

  }

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}


export default App