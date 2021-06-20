import React from 'react'

const Header = (props) => {
  console.log("Header",props)
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content  = (props) => {
  
  console.log("Contect",props)
  return (
  <div>
     <Part part={props.part[0].name}  exercises={props.part[0].exercises}/>
     <Part part={props.part[1].name}  exercises={props.part[1].exercises}/>
     <Part part={props.part[2].name}  exercises={props.part[2].exercises}/>
  </div>
  )
}

const Part  = (props) => {  
  console.log("Part",props)
  return (
  <>
    <p>
      {props.part} {props.exercises}
    </p>
  </>
  )
}

const Total  = (props) => {  
  console.log("Total",props)
  return (
  <>
    <p>Number of exercises {props.total}</p>
  </>
  )
}
 
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content part={parts}/>
      
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