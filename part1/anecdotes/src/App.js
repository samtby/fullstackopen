import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {

  //const points = new Object({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0  })
   //let points =  new Array([0 ,1 , 2, 3, 4, 5, 6])
   let points = [0 ,0 , 0, 0, 0, 0, 0]

  //const copyVotes = { ...points }
  let [votes, setVotes] = useState(new Array([0 ,0 , 0, 0, 0, 0, 0]))
  

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

  const addNote = (props) => {   
    console.log(props)   
    setVotes(votes.splice(props.selected,0,88))
    
    //setVotes(votes => votes.se +=1)
    //  setVotes([...votes,votes[props] =+ 1 //add
    //setVotes(votes => [ ...votes,votes[props] ])
 
    /*console.log(selected)
    setVotes( array =>  array[selected] += 1) //Fail    

    console.log(votes[selected])
    */
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
            has {votes[4]} votes
          </td>
          </tr> 
          <tr>
            <td>

              <Button handleClick={()=> addNote(selected)} text="vote"/>
              <button onClick={SeTrandomAnecdote}>next anectdote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App