  const Header = (props) => {
      return <h1>{props.course.name}</h1>
  }
  
  const Content  = ({parts}) => {    
    return (
    <div>
        {parts.parts.map(parts =>
            <Part key={parts.id} parts={parts.name}  exercises={parts.exercises}/>
        )}
    </div>
    )
  }
  
  const Part  = (props) => {  
    return <p>{props.parts} {props.exercises}</p>
  }


  const Total  = ({parts}) => {              
    const total = function total(sum, val) {
        return sum + val;
    }

    return (
    <div>
        <h4>total of exercises {parts.parts.map(li => li.exercises).reduce(total,0)}</h4>
    </div>
    )
  }

  const Course = ({course}) => {
    return (
    <div>
        <Header course={course} />
        <Content parts={course}/>    
        <Total parts={course} /> 
    </div>
    )
}

export default Course