import React from 'react'

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
    </div>
  )
}

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


const Test  = (props) => {  
  console.log("Test",props)
  return (
  <>
    <p>Test component to exercise</p>
  </>
  )
}

export default App