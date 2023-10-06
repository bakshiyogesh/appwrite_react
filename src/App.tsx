import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <div>
    <h1>A blog app with appwrite.</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
