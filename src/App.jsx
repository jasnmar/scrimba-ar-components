//import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"



function App() {
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];
    /**
   * Challenge: Refactor the Menu components to use the logic 
   * from Toggle instead of doing any logic of its own.
   * 
   * 1. Remove all context and state logic from the menu components
   * 2. Using Toggle and its "sub-components", add a menu to this
   *    App component below the Star. Make sure to use a separate
   *    <Toggle> wrapper so the state isn't tied to the Star's 
   *    Toggle state
   */
  
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On><BsStarFill className="star filled" /></Toggle.On>
          <Toggle.Off><BsStar className="star " /></Toggle.Off>
        </Toggle.Button>
      </Toggle>
      
      
      <br />
      <hr />
      <br />
      <Toggle>

        <Menu>
          <Toggle.Button>
            <Menu.Button>Sports</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.DropDown>
              {sports.map(sport => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.DropDown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  );
}

export default App;
