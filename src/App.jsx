//import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Star from "./components/Star/Star";

function App() {
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];
  function onChange() {
    console.log('onChange Fired')
  }
  return (
    <>
      <Star onChange={onChange} />

      <br />
      <Menu onOpen={onChange}>
        <Menu.Button>Sports</Menu.Button>
        <Menu.DropDown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.DropDown>
      </Menu>
    </>
  );
}

export default App;


