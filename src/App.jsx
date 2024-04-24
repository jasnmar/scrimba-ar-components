import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu
        buttonText='Sports'
        items={["Tennis", "Recquetball", "Pickleball", "Squash"]}
      />
    </>
  )
}

export default App
