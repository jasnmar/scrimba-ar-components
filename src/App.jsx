//import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Star from "./components/Star/Star";
import Toggle from "./components/Toggle";
/**
 * Challenge: 
 * Part 1: 
 * Create a ToggleDisplay component and attach
 * it to Toggle as Toggle.Display.
 * 
 * It should grab the `on` value from the Toggle context
 * and render children by calling children as a function, 
 * passing the `on` value to it. (E.g. children(on)).
 */
function App() {
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];
  function onChange() {
    console.log('onChange Fired')
  }
  function starChange() {
    let i = 1;
    i++
    console.log('i: ', i)
  }
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  );
}
{/* <>
<Star onChange={starChange} />

<br />
<Menu onOpen={onChange}>
  <Menu.Button>Sports</Menu.Button>
  <Menu.DropDown>
    {sports.map((sport) => (
      <Menu.Item key={sport}>{sport}</Menu.Item>
    ))}
  </Menu.DropDown>
</Menu>
</> */}




export default App;


