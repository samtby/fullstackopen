  const Header = ({course}) =><h3>{course.name}</h3>
  
  const Content  = ({parts}) =>parts.map(parts => <Part key={parts.id} name={parts.name}  exercises={parts.exercises}/>)

  const Part  = ({name,exercises}) => <p>{name} {exercises}</p>
  
  const Total  = ({parts}) => {              
    const total = function total(sum, val) { return sum + val; }

    return (
    <div>
        <h4>total of exercises {parts.map(li => li.exercises).reduce(total,0)}</h4>  
    </div>
    )
  }

  const Course = ({course}) => {
    return (
    <div>
        <h2>Web development curriculum</h2>
        {course.map(courses  => 
        <li key={courses.id}>
            <Header course={courses}/>
            <Content parts={courses.parts}/>
            <Total parts={courses.parts}/>      
        </li>
        )}
    </div>
    )
}

export default Course