import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Votes = ({nbVotes}) => {
  console.log(nbVotes)
  return(
  <p>has {nbVotes} votes</p>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
   const points = new Array(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
   //Output as [0, 0, 0, 0, 0, 0, 0]
   //Auther way to create Array
   //const points = new Array(10+1).join('0').split('').map(parseFloat)
    const [selected, setSelected] = useState(0)
    const [votes] = useState(points)
    const copyVotes = [...votes]

  const [voteSelected, setSelectedVote] = useState(0)
  console.log("copyVotes[0]",copyVotes[0],selected)
  const SeTrandomAnecdote = () =>  {
    setSelected((Math.floor(Math.random() * anecdotes.length)))
    setSelectedVote(copyVotes[0][selected])
  }
  const addNote = () =>setSelectedVote(copyVotes[0][selected] +=  1)

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {anecdotes[selected]}
            </td>
          </tr> 
          <tr>
            <td>
            <Votes nbVotes={copyVotes[0][selected]}/>
          </td>
          </tr> 
          <tr>
            <td>
              <Button handleClick={addNote} text="vote"/>
              <button onClick={SeTrandomAnecdote}>next anectdote</button> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App