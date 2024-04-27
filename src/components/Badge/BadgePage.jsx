import Badge from "./Badge";

function BadgePage() {
  return (
    <>
      <h2>Badges</h2>
      <div className="features">
        <div className="feature-col">
          <h3>Colors</h3>
          <ul>
            <li>red</li>
            <li>yellow</li>
            <li>green</li>
            <li>blue</li>
            <li>indigo</li>
            <li>purple</li>
            <li>pink</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Variants</h3>
          <ul>
            <li>pill</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Text</h3>
          <ul>
            <li>children</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Functions</h3>
          <ul>
            <li>OnClick</li>
          </ul>
        </div>
      </div>
      <div className="component-list">
        <Badge onCLick={() => console.log("clickity")}>Badge Text</Badge>
        <Badge color="red">Badge Text</Badge>
        <Badge color="yellow">Badge Text</Badge>
        <Badge color="green">Badge Text</Badge>
        <Badge color="blue">Badge Text</Badge>
        <Badge color="indigo">Badge Text</Badge>
        <Badge color="purple">Badge Text</Badge>
        <Badge color="pink">Badge Text</Badge>
      </div>
      <div className="component-list">
        <Badge variant="pill">Pill Text</Badge>

        <Badge color="red" variant="pill">
          Pill Text
        </Badge>
        <Badge color="yellow" variant="pill">
          Pill Text
        </Badge>
        <Badge color="green" variant="pill">
          Pill Text
        </Badge>
        <Badge color="blue" variant="pill">
          Pill Text
        </Badge>
        <Badge color="indigo" variant="pill">
          Pill Text
        </Badge>
        <Badge color="purple" variant="pill">
          Pill Text
        </Badge>
        <Badge color="pink" variant="pill">
          Pill Text
        </Badge>
      </div>
    </>
  );
}

export default BadgePage;
