  const Header = ({course}) =><h1>{course.name}</h1>
  
  const Content  = ({parts}) =>parts.map(parts => parts.parts.map(parts =>  <Part key={parts.id} parts={parts.name}  exercises={parts.exercises}/>))
    
  const Part  = ({parts,exercises}) => <p>{parts} {exercises}</p>
  const Total  = ({parts}) => {              
    const total = function total(sum, val) {
        //console.log(sum, val,'somme', sum + val)
        return sum + val;
    }
    return (
   <div>
        <h4>total of exercises {parts.map(course => course.parts.map(li => li.exercises).reduce(total,0)).reduce(total,0)}</h4>
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