import React from 'react'


const Header = (porps) => {  
  return (
  <>
    <h1>{porps.course}</h1>
  </>
  )
}


const Content  = (porps) => {  
  return (
  <div>
    <p>
        {porps.part1} {porps.exercises1}
      </p>
      <p>
        {porps.part2} {porps.exercises2}
      </p>
      <p>
        {porps.part3} {porps.exercises3}
      </p>
    </div>
  )
}

const Total  = (props) => {  
  return (
  <>
    <p>Number of exercises {props.total}</p>
  </>
)
}
 

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

export default App