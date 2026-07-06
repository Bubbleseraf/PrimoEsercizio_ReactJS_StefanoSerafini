import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>Contatore: {count}</h2>
      <button className="btn" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter