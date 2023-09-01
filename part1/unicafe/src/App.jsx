import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [stats, setStats] = useState({
    good:0,
    neutral:0,
    bad:0
  })

  
  const GoodRev =  ()=> {setStats({...stats, good: stats.good+1})}
  const NeutralRev =  ()=> {setStats({...stats, neutral: stats.neutral+1})}
  const BadRev =  ()=> {setStats({...stats, bad: stats.bad+1})}
  return (
    <div>

      <h1>Give Feedback</h1>
      <div>
        <Button handle={GoodRev} text="Good"></Button>
        <Button handle={NeutralRev} text="Neutral"></Button>
        <Button handle={BadRev} text="Bad"></Button>
      </div>
      <Statistics stats ={stats}></Statistics>
      
    </div>
  )
}

const Statistics = ({stats})=>{
  
  const allStats = ()=> {return stats.good + stats.neutral + stats.bad}
  function average() {
    return ((stats.good - stats.bad)/(allStats()))
  }
  function positive() {
    return ((stats.good*100)/(allStats()) +  " %")
  }
  if((allStats()) > 0){

  
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text = "Good" value = {stats.good}></StatisticLine>
          <StatisticLine text = "Neutral" value = {stats.neutral}></StatisticLine>
          <StatisticLine text = "Bad" value = {stats.bad}></StatisticLine>
          
          <StatisticLine text = "All" value = {allStats()}></StatisticLine>
          <StatisticLine text = "Average" value = {average()}></StatisticLine>
          <StatisticLine text = "Positive" value = {positive()}></StatisticLine>
        </tbody>
      </table>

    </div>
  )}
  
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticLine = ({text, value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
  )
}
const Button  = ({handle, text}) =>{
  return (
    <button onClick={handle}>{text}</button>
  )
}
export default App