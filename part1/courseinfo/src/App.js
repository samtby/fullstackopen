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
      <arto />
    </div>
  )
}

export default App