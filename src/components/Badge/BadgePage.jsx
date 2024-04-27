import Badge from "./Badge";

function BadgePage() {
  return (
    <>
      <h2>Badges</h2>
      <div className="features">
        <div className="feature-col">
          <h3>Colors</h3>
          <ul>
            <li>standard (default)</li>
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
        <Badge onCLick={() => console.log("clickity")}>Standard Badge</Badge>
        <Badge color="red">Red Badge</Badge>
        <Badge color="yellow">Yellow Badge</Badge>
        <Badge color="green">Green Badge</Badge>
        <Badge color="blue">Blue Badge</Badge>
        <Badge color="indigo">Indigo Badge</Badge>
        <Badge color="purple">Purple Badge</Badge>
        <Badge color="pink">Pink Badge</Badge>
      </div>
      <div className="component-list">
        <Badge variant="pill">Standard Pill</Badge>
        <Badge color="red" variant="pill">
          Red Pill
        </Badge>
        <Badge color="yellow" variant="pill">
          Yellow Pill
        </Badge>
        <Badge color="green" variant="pill">
          Green Pill
        </Badge>
        <Badge color="blue" variant="pill">
          Blue Pill
        </Badge>
        <Badge color="indigo" variant="pill">
          Indigo Pill
        </Badge>
        <Badge color="purple" variant="pill">
          Purple Pill
        </Badge>
        <Badge color="pink" variant="pill">
          Pink Pill
        </Badge>
      </div>
    </>
  );
}

export default BadgePage;
