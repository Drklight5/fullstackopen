
const Part = ({part, exercises}) => {
    return(
      <p>
          {part} {exercises}
      </p>
    )
  }
  const Header = ({course}) =>{
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  const Content = ({course}) =>{ 
   
    return (
      <div>
        {course.parts.map((part)=><Part key={part.id} part={part.name} exercises={part.exercises}></Part>)}
      </div>
    )
  }
  const Total = ({parts}) =>{
    const total = () => parts.reduce((acumulador, actual) => acumulador + actual.exercises, 0)

    return (
      <div>
         <p><b>Total of {total()} exercises</b></p>
      </div>
    )
  }
  
  const Courses = ({courses}) =>{
    return (
      <>
        {courses.map((course)=>{
            return (
                <>
                    <Header course={course}></Header>
                    <Content course = {course}></Content>
                    <Total parts = {course.parts}></Total>
                </>
            )
        })}
    
      </>
    )
  }
  
  export default Courses 