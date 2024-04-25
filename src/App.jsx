import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import MenuDropdown from "./components/Menu/MenuDropdown"
import MenuButton from "./components/Menu/MenuButton"
import MenuItem from './components/Menu/MenuItem'

function App() {
  const [count, setCount] = useState(0)
  const sports = [ "Tennis", "Recquetball", "Pickleball", "Squash"]

  return (
    <>
        <MenuButton>SportsBall</MenuButton>
        <MenuDropdown>
          {sports.map(sport => (
            <MenuItem>{sport}</MenuItem>

          ))}
        </MenuDropdown>
    </>
  )
}

export default App
