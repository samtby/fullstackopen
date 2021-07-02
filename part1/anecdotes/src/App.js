import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {

  //const points = new Object({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0  })
   //let points =  new Array([0 ,1 , 2, 3, 4, 5, 6])
   let points = [0 ,0 , 0, 0, 0, 0, 0]

  
  let [votes, setVotes] = useState(new Array([0 ,0 , 0, 0, 0, 0, 0]))
  let copyVotes = { ...votes }

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
  const [voteSelected, setSelectedVote] = useState(0)

  const SeTrandomAnecdote = () => {
    setSelected((Math.floor(Math.random() * anecdotes.length)))
    console.log("selected",selected)
  }

  const addNote = (props) => {   
        //updateVotes(votes.splice(props.selected,0,88))
    //updateVotes(oldArray  => [oldArray, oldArray[selected] += 1])
    
    //Version noCopy 
    
    votes[0][selected] +=  1
    setSelectedVote(votes[0][selected])
    //console.log("votes",votes[0][selected])
    
    
    //Version copy
    //copyVotes[selected]
    //console.log("votes",copyVotes[selected])
   /* setVotes(
      //array.map(function(currentValue, index, arr))
      //votes.map.set(votes.indexOf(1))
      /*votes.map((votes) =>{
        votes.id === selected ? newVote : vo
      

      )*/
    
    //setVotes(votes => votes.se +=1)
    //  setVotes([...votes,votes[props] =+ 1 //add
    //setVotes(votes => [ ...votes,votes[props] ])
 
    /*console.log(selected)
    setVotes( array =>  array[selected] += 1) //Fail    

    console.log(votes[selected])
    */
  }
  

/* Updating Arrays
  const [items, setItems] = useState([])

  // Completely replaces whatever was stored in the items array
  setItems([{item1}, {item2}])
  
  // Don't use JS array methods such as pop, push, shift, unshift 
  // as these will not tell React to trigger a re-render. 
  items.push({item3})
  
  // Instead, make a copy of the array then add your new item onto the end
  setItems([...items, {item3}])
  
  // To update an item in the array use .map. 
  // Assumes each array item is an object with an id.
  setItems(
    items.map((item, index) => {
      item.id === id ? newItem : item
    })
  )

  */
  
  //Update Objects 
/*
  const Person = () => {
    const [person, setPerson] = useState({
      firstName: '',
      lastName: ''
    });
  
    const handleChange = (e) => {
      setPerson({
        ...person,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Form submission logic here.
    }
  
    return (
      <form>
        <label htmlFor='first'>
          First Name:
          <input
            id='first'
            name='firstName'
            type='text'
            value={person.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='last'>
          Last Name:
          <input
            id='last'
            name='lastName'
            type='text'
            value={person.lastName}
            onChange={handleChange}
          />
        </label>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    );
  };
*/  
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
            has {votes[0][selected]} votes
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