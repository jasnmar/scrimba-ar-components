//import { useState } from "react";
import "./App.css";
import MenuPage from "./components/Menu/MenuPage"
import StarPage from "./components/Star/StarPage";
import ButtonPage from "./components/Button/ButtonPage";
import BadgePage from "./components/Badge/BadgePage";
import BannerPage from "./components/Banner/BannerPage";
import CardPage from "./components/Card/CardPage";


function App() {
  return (
    <>
      <h1>Components</h1>
      <BadgePage />
      <BannerPage />
      <ButtonPage />
      <CardPage />
      <MenuPage />
      <StarPage />


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


{/* <Toggle onToggle={()=> console.log("toggled")}>
<Toggle.Button>
  <Toggle.Display>
  {(on) => {
      return <div className={"box " + (on ? "filled" : "")}></div>
      }}
  </Toggle.Display>
</Toggle.Button>
</Toggle> */}

export default App;


