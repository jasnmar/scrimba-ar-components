import "./Star.css";
import Toggle from "../Toggle";
import { BsStar, BsStarFill } from "react-icons/bs";

function Star() {

  function onToggle() {
    console.log("toggled")
  }
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.Button>
        <Toggle.On>
          <BsStarFill className="star filled" />
        </Toggle.On>
        <Toggle.Off>
          <BsStar className="star " />
        </Toggle.Off>
      </Toggle.Button>
    </Toggle>
  );
}

export default Star;
