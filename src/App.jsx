import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"

function App() {
  const [count, setCount] = useState(0);
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];

  return (
    <Menu>
      <Menu.Button>SportsBall</Menu.Button>
      <Menu.DropDown>
        {sports.map((sport) => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.DropDown>
    </Menu>
  );
}

export default App;
