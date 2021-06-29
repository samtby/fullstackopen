import React, { useState } from 'react'
//The application must display the total number of collected feedback for each category. 

// This is the right place to define a component
// const Display = ({value}) => <h1>{value}</h1>
// // This is the right place to define a component
// const Button = ({handleClick,text}) =><button onClick={handleClick}>{text}</button>

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
//<Statistics  good={good} neutral={neutral} all={all}/>
  return (
    <div>
      <button value={good} onClick={setIncreaseByOneGood}>good</button>
      <button value={neutral} onClick={setIncreaseByOneNeutral}>neutral</button>
      <button value={bad} onClick={setIncreaseByOneBad}>bad</button>
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
  // save clicks of each button to its own state
  /*const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)*/
  
  //the average score (good: 1, neutral: 0, bad: -1) 
  //const averageScore = { good: 1,  neutral: 0, bad: -1 }
  
  /*const setIncreaseByOneGood = () => {
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
/*
  const Statistics =  ({text,numFeedBack}) => {
    setAverage((good + (neutral*0) + bad*(-1))/all)
    if (text === "average") {
      return(
        <p>{text} {average}</p>
      )
    }
    if (text === "positive") {
        setPositive(good/(all/100))
      return(
        <p>positive {positive} %</p>
      )
    }
    return(
        <p>{text} {numFeedBack}</p>
    )
  }*/
  return (
    <div>
      <h1>Feedback</h1>
      <FeedbackSystem/>
      {/* <Display value="give feedback"/>
      <Button  handleClick={setIncreaseByOneGood} text="good" />
      <Button  handleClick={setIncreaseByOneNeutral} text="neutral" />
      <Button  handleClick={setIncreaseByOneBad} text="bad" />
      <Display value="statistsc"/>
      <Statistics text="good"  numFeedBack={good}/>
      <Statistics text="neutral"  numFeedBack={neutral}/>
      <Statistics text="bad"  numFeedBack={bad}/> 
      <Statistics text="all"  numFeedBack={all}/>
      <Statistics text="average"/>
      <Statistics text="positive"/> */}
    </div>
  )
}

export default App