import React, { useState } from 'react'
//The application must display the total number of collected feedback for each category. 
const Display = props => <h1>{props.value}</h1>

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Feedback =  ({text,numFeedBack}) => (
  <p>{text} {numFeedBack}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const [all, setAll] = useState(0)
  //const [average, setAverage] = useState(0)
  //const [positive, setPositive] = useState(0)
  
  //the average score (good: 1, neutral: 0, bad: -1) 
//  const averageScore = { good: 1,  neutral: 0, bad: -1 }
  
  const setIncreaseByOneGood = () => { 
    setAll(all + 1)
    setGood(good + 1)   
    console.log(good) 
  }
  const setIncreaseByOneNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  const setIncreaseByOneBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  const Display = props => <h1>{props.value}</h1>

    const Button = ({handleClick,text}) => (
      <button onClick={handleClick}>{text}</button>
    )

    const Feedback =  ({text,numFeedBack}) => {
      if (text == "average") {
        return(
          <p>{text} {good + (neutral*0) + bad*(-1)}</p>
        )
      }
      if (text == "positive") {
        return(
          <p>Positive in progress </p>
        )
      }
      return(
          <p>{text} {numFeedBack}</p>
      )
    
  }

  return (
    <div>
      <Display value="give feedback"/>
      
      <Display value={(6+2*0+-1*1)/9}/>
      <Button  handleClick={setIncreaseByOneGood} text="good" />
      <Button  handleClick={setIncreaseByOneNeutral} text="neutral" />
      <Button  handleClick={setIncreaseByOneBad} text="bad" />
      <Display value="statistsc"/>
      <Feedback text="good"  numFeedBack={good}/>
      <Feedback text="neutral"  numFeedBack={neutral}/>
      <Feedback text="bad"  numFeedBack={bad}/> 
      <Feedback text="all"  numFeedBack={all}/>
      <Feedback text="average"/>
      <Feedback text="positive"/>
    </div>
  )
}

export default App