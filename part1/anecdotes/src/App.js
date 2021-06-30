import React, { useState } from 'react'

const App = () => {
/*
  const votes = const points = { 0: 0, 1: 0, 2: 0 , 3: 0}
  const copyVotes = { ...votes }
*/
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
  //setSelected((Math.floor(Math.random() * anecdotes.length)))
  const SeTrandomAnecdote = () => {
    setSelected((Math.floor(Math.random() * anecdotes.length)))
  }

  const [votes, setVotes] = useState({
    0: 0, 
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  })

  const addNote = () => {
    
  }
  
  // increment the value in position 2 by one
  ///copyVotes[2] += 1
  //
  //
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
              <button onClick={addNote}>vote</button><button onClick={SeTrandomAnecdote}>next anectdote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App