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

  const setIncreaseByOneGood = () => setGood(good + 1)
  const setIncreaseByOneNeutral = () => setNeutral(neutral + 1)
  const setIncreaseByOneBad = () => setBad(bad + 1)
  
  return (
    <div>
      <Display value="give feedback"/>
      <Button  handleClick={setIncreaseByOneGood} text="good" />
      <Button  handleClick={setIncreaseByOneNeutral} text="neutral" />
      <Button  handleClick={setIncreaseByOneBad} text="bad" />
      <Display value="statistsc"/>
      <Feedback text="good"  numFeedBack={good}/>
      <Feedback text="neutral"  numFeedBack={neutral}/>
      <Feedback text="bad"  numFeedBack={bad}/>
    </div>
  )
}

export default App