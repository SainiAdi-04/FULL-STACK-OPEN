import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
    const clickHandle = () => {
      if (props.text === "good") {
        setGood(good => good + 1)
        console.log(good)
      }
      else if (props.text === "neutral") {
        setNeutral(neutral => neutral + 1)
      }
      else {
        setBad(bad => bad + 1)
      }

    }

    return (
      <button onClick={clickHandle}>{props.text}</button>

    )
  }

  // function goodHandle() {
  //   console.log(good)
  //   setGood(good => good + 1)
  // }
  // function neutralHandle() {
  //   console.log(neutral)
  //   setNeutral(neutral => neutral + 1)
  // }
  // function badHandle() {
  //   console.log(bad)
  //   setBad(bad => bad + 1)
  // }

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        </tr>
    )
  }

  const Stats = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.val}</td>
      </tr>
    )

  }

  const total = good + bad + neutral;
  const val = good * 1 - bad * 1

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" />
      <Button text="neutral" />
      <Button text="bad" />
      <h1>statistics</h1>
      {total > 0 ? (<table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <Stats text="all" val={total} />
          <Stats text="average" val={val / total} />
          <Stats text="positive" val={(good * 100) / total} sym="%" />
        </tbody>
      </table>) : (
        <p>No feedback given</p>
      )}




      {/* <h1>statistics</h1>
      <p>good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {total}<br />
        average {val / total}<br />
        positive {good / total}
      </p> */}

    </div>
  )
}

export default App