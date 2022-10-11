import { useState } from 'react'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ul>
        {robots.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </ul>
  )
}

export default App
