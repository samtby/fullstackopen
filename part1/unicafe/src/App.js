import React, { useState } from 'react'
//The application must display the total number of collected feedback for each category. 
const Display = props => <h1>{props.value}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
     {props.text}
  </button>
)

const Feedback =  (props) => (
  <p>{props.text} {props.numfeedback}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const SetIncreaseByOneGood = () => setGood(good + 1)
  const SetIncreaseByOneNeutral = () => setGood(neutral + 1)
  const SetIncreaseByOneBad = () => setGood(bad + 1)
  
  return (
    <div>
      <Display value="give feedback"/>
      <Button  handleClick={SetIncreaseByOneGood} text="good" />
      <Button  handleClick={SetIncreaseByOneNeutral} text="neutral" />
      <Button  handleClick={} text="bad" />
      <Display value="statistsc"/>
      <Feedback text="good"  numfeedback={good}/>
      <Feedback text="neutral"  numfeedback={neutral}/>
      <Feedback text="bad"  numfeedback={bad}/>
    </div>
  )
}

export default App