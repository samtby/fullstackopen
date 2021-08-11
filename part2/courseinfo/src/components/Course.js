  const Header = ({course}) =><h3>{course.name}</h3>
  
  const Parts  = ({parts}) =>parts.map(parts => parts.parts.map(parts =>  <Part key={parts.id} parts={parts.name}  exercises={parts.exercises}/>))
    
  const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => 
                <p key={part.id}>
                {part.name} {part.exercises}
                </p>
            )}
        </div>
        )        
  }

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
      //<Header course={course} />
    return (
    <div>
        {course.map(courses  => 
        <li>
            <Header course={courses}/>
            <Content parts={courses.parts}/>

        </li>
        )}
        
        {/*<Content parts={course}/>
        <Total parts={course} /> */}
    </div>
    )
}

export default Course