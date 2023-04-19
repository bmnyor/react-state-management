import { useState } from 'react'
import './App.css'

function NameList() {
  const [list, setList] = useState(["Brenno", "Cleyton", "Jonata"])
  
  const [name, setName] = useState(() => "")

  const onAddName = () => {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <h2>List</h2>

      <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} />

        <button onClick={onAddName}>
          Add Name
        </button>
      </div>

      <div>
        <ul>
            {list.map((name) => (
              <li key={name}>{name}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  function addOne(params) {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h2>Counter</h2>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}

function App() {
  
  return (
    <div>
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App
