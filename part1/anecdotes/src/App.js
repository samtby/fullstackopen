import React, { useState } from 'react'

const App = () => {

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0  }
  //const copyVotes = { ...points }
  const [votes, setVotes] = useState(points)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)


  const SeTrandomAnecdote = () => {
    setSelected((Math.floor(Math.random() * anecdotes.length)))
  }

  const addNote = () => {  
    setVotes(votes[selected] = 1)
    console.log(selected)
    console.log(votes[selected] )
  }
  
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
            has {votes[selected]} votes
          </td>
          </tr> 
          <tr>
            <td>
              <button onClick={addNote}>vote</button><button onClick={SeTrandomAnecdote}>next anectdote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App