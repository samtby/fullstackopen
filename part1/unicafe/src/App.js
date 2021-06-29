import React, { useState } from 'react'
//The application must display the total number of collected feedback for each category. 

// const Status = (props) => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [all, setAll] = useState(0)
//   const [average, setAverage] = useState(0)
//   const [positive, setPositive] = useState(0)
// }
/*
const Average = (props){

  //setAverage((good + (neutral*0) + bad*(-1))/all)    
  //setPositive(good/(all/100))
  return(
    <div>
      
    </div>
}
*/

const Statistics =  ({good,neutral,bad,all}) => {

  //const [average, setAverage] = useState(0)
  //const [positive, setPositive] = useState(0)
  
  //Genare Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  //setAverage((good + (neutral*0) + bad*(-1))/all)    
  //setPositive(good/(all/100))

  return(
    <di>
      <p>
        average {(good + (neutral*0) + bad*(-1))/all}<br/>
        positive {good/(all/100)}
      </p>
    </di>
  )
}

const FeedbackSystem = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setIncreaseByOneGood = () => {
    setAll(all + 1)
    setGood(good + 1)   
  }
  const setIncreaseByOneNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const setIncreaseByOneBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  
  if( all === 0 ){
    return (
      <div>
        <button value={good} onClick={setIncreaseByOneGood}>good</button>
        <button value={neutral} onClick={setIncreaseByOneNeutral}>neutral</button>
        <button value={bad} onClick={setIncreaseByOneBad}>bad</button>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <button value={good} onClick={setIncreaseByOneGood}>good</button>
      <button value={neutral} onClick={setIncreaseByOneNeutral}>neutral</button>
      <button value={bad} onClick={setIncreaseByOneBad}>bad</button>
      <h1>Statistics</h1>
      <p>
        good  {good}<br/>
        neutral {neutral}<br/>
        bad {bad}<br/>
        all {all}<br/>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackSystem/>
        {/* comments */}
    </div>
  )
}

export default App