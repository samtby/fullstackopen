import React, { useState } from 'react'
const Display = ({title}) =><h3>{title}</h3>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Votes = ({nbVotes}) =><>has {nbVotes} votes</>

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

    const [selected, setSelected] = useState(0)

    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  // returns maximum in arr[] of size n
  const largest = (arr) => {    
      arr.sort();      
      //return arr[arr.length-1];
      return arr.length-1;
  }          

    const SetRandomAnecdote = () =>  {      
      
      setSelected((Math.floor(Math.random() * anecdotes.length)))
      console.log("copyPoints SeTrandomAnecdote",points,selected, points[selected])
   }

    const addNote = () =>{
      const copy = [...points]
      copy[selected] +=1
      setPoints(copy)
      //console.log("copy addNote",copy,selected)
   }


  return (
    <div>
      <table>
        <tbody>
          <Display title="Anecdote of the day" />
          <tr>
            <td>
               {anecdotes[selected]}
            </td>
          </tr> 
          <tr>
            <td>
            <Votes nbVotes={points[selected]}/>
          </td>
          </tr> 
          <tr>
            <td>
              <Button handleClick={()=>addNote()} text="vote"/>
              <Button handleClick={()=>SetRandomAnecdote()} text="next anectdote"/>
            </td>
          </tr>
          <Display title="Anecdote with most votes" />
          <tr>
            <td>
               {anecdotes[selected]}
            </td>
          </tr> 
          <tr>
            <td>
              <Votes nbVotes={largest(points)}/>
            </td>
          </tr>           
        </tbody>
      </table>
    </div>
  )
}

export default App