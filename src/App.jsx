//import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/index"
import Star from "./components/Star/Star";
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";


function App() {
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];

  return (
    <>
      <h1>Components</h1>
      <h2>Badges</h2>
      <div className="component-list">
        <Badge onCLick={() => console.log("clickity")}>Badge Text</Badge>
        <Badge color="red">Badge Text</Badge>
        <Badge color="yellow">Badge Text</Badge>
        <Badge color="green">Badge Text</Badge>
        <Badge color="blue">Badge Text</Badge>
        <Badge color="indigo">Badge Text</Badge>
        <Badge color="purple">Badge Text</Badge>
        <Badge color="pink">Badge Text</Badge>
        <Badge variant="pill">Pill Text</Badge>
        <Badge color="red" variant="pill">Pill Text</Badge>
        <Badge color="yellow" variant="pill">Pill Text</Badge>
        <Badge color="green" variant="pill">Pill Text</Badge>
        <Badge color="blue" variant="pill">Pill Text</Badge>
        <Badge color="indigo" variant="pill">Pill Text</Badge>
        <Badge color="purple" variant="pill">Pill Text</Badge>
        <Badge color="pink" variant="pill">Pill Text</Badge>
      </div>
      <h2>Banner</h2>
      <div className="component-list">
        <Banner 
          onClick={()=> console.log("clacked")} 
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
          variant="success">
            Congratulations!
        </Banner>
        <Banner 
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
          variant="warning">
            Attention
        </Banner>
        <Banner 
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
          variant="error">
            There is a problem with your application
        </Banner>
        <Banner 
          detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
          variant="">
            Update available
        </Banner>
        <Banner variant="success">Congratulations!</Banner>
        <Banner variant="warning">Attention</Banner>
        <Banner variant="error">There is a problem with your application</Banner>
        <Banner variant="">Update available</Banner>
      </div>
      <h2>Buttons</h2>
      <div className="component-list">
        <Button>Standard Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="sm">Small Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
      <h2>Menu</h2>
      <div className="component-list">
        <Menu onOpen={() => {}}>
          <Menu.Button>Sports</Menu.Button>
          <Menu.DropDown>
            {sports.map((sport) => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.DropDown>
        </Menu>
      </div>
      <h2>Star</h2>
      <div className="component-list">
        <Star /> <Star isOn="true"/>
      </div>
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


