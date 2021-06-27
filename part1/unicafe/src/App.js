import React, { useState } from 'react'
//The application must display the total number of collected feedback for each category. 

// This is the right place to define a component
const Display = props => <h1>{props.value}</h1>
// This is the right place to define a component
const Button = ({handleClick,text}) =><button onClick={handleClick}>{text}</button>

/*
const Statistics =  ({text,numFeedBack}) => {
  if (text === "average") {
    //App.setAverage((App.good + (App.neutral*0) + App.bad*(-1))/all)
    return(
      <p>{text} {App.average}</p>
    )
  }
  if (text === "positive") {
      //App.setPositive(App.good/(App.all/100))
    return(
      <p>positive {App.positive} %</p>
    )
  }
  return(
      <p>{text} {numFeedBack}</p>
  )
}
*/
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  //the average score (good: 1, neutral: 0, bad: -1) 
  //const averageScore = { good: 1,  neutral: 0, bad: -1 }
  
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

    const Statistics =  ({text,numFeedBack}) => {
      setAverage((good + (neutral*0) + bad*(-1))/all)
      console.log(average)
      //if(isNaN(average)){average = 0}

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
    }
  
  return (
    <div>
      <Display value="give feedback"/>
      <Button  handleClick={setIncreaseByOneGood} text="good" />
      <Button  handleClick={setIncreaseByOneNeutral} text="neutral" />
      <Button  handleClick={setIncreaseByOneBad} text="bad" />
      <Display value="statistsc"/>
      <Statistics text="good"  numFeedBack={good}/>
      <Statistics text="neutral"  numFeedBack={neutral}/>
      <Statistics text="bad"  numFeedBack={bad}/> 
      <Statistics text="all"  numFeedBack={all}/>
      <Statistics text="average"/>
      <Statistics text="positive"/>
    </div>
  )
}

export default App