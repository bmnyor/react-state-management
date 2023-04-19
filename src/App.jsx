import { useState } from 'react'
import './App.css'

function NameList() {
  const [list, setList] = useState(["Brenno", "Cleyton", "Jonata"])
  
  const [name, setName] = useState("")
  
  const onAddName = () => {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <h2>List</h2>

      <ul>
          {list.map((name) => (
            <li key={name}>{name}</li>
          ))}
      </ul>

      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} />

        <button onClick={onAddName}>
          Add Name
        </button>
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
    <div className="App">
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App
