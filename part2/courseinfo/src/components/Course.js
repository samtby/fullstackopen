  const Header = (props) => {
      //console.log("Header",props)
      return <h1>{props.course.name}</h1>
  }
  
  const Content  = ({parts}) => {    
    //console.log("Contect",props) 
    //    <Part parts={parts.parts[1].name}  exercises={parts.parts[1].exercises}/>
    
    return (
    <div>
        {parts.parts.map(parts =>
            <Part key={parts.id} parts={parts.name}  exercises={parts.exercises}/>
        )}
    </div>
    )
  }
  
  const Part  = (props) => {  
    //console.log("Part",props)
    return <p>{props.parts} {props.exercises}</p>
  }
/*  You don't need the sum of the exercises yet.
  const Total  = (props) => {  
    console.log("Total",props)
    return <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises +props.parts.parts[2].exercises}</p>
  }
*/
  const Course = ({course}) => {

    return (
    <div>
        <Header course={course} />
        <Content parts={course}/>        
    </div>
    )
}

export default Course