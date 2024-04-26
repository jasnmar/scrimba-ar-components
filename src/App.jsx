//import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Star from "./components/Star/Star";
import Toggle from "./components/Toggle";
/**
 * Challenge: 
 * Part 2:
 * Instead of rendering Toggle.On and Toggle.Off, use a single
 * Toggle.Display to render the div below. Toggle.Display will
 * take a function as a child (don't forget to wrap that function
 * in curly braces since it's JS inside of JSX) and will receive
 * the `on` state as its parameter.
 * 
 * From that function, you should return the div below, but this
 * time conditionally render the `filled` className based on
 * the value of `on`.
 * 
 * You'll know it worked if clicking the box shows a transition
 * between the white background and the blue background. See
 * style.css for details on what's happening there.
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
          <Toggle.Display>
          {function(on) {
              return <div className={"box " + (on ? "filled" : "")}></div>
              }}
          </Toggle.Display>
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

{/* <Toggle.On>
<div className="box filled"></div>
</Toggle.On>
<Toggle.Off>
<div className="box"></div>
</Toggle.Off> */}


export default App;


