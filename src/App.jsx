import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Star from "./components/Star/Star";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [count, setCount] = useState(0);
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];

  return (
    <>
      <Toggle>
        <Star />
      </Toggle>
      
      <br />
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.DropDown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.DropDown>
      </Menu>
    </>
  );
}

export default App;
