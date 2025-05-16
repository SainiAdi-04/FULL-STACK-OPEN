const Part=(props)=>{
  return(
    <p>
      {props.name} {props.num}
    </p>
  )
}

const Header=(props)=>{
  return(
    <h1>
      {props.CourseName}
    </h1>
  )
}

const Content=(props)=>{
  return(
    <div>
      <Part name={props.parts[0].name} num ={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} num ={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} num ={props.parts[2].exercises}/>
    </div>
  ) 
}


const Total=(props)=>{
  return(
    <p>
    Number of exercises {props.Sum[0].exercises + props.Sum[1].exercises + props.Sum[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header CourseName={course.name}/>
      <Content parts={course.parts}/>
      <Total Sum={course.parts}/>
    </div>
  )
}

export default App