import Button from "./Button";

function ButtonPage() {
  return (
    <>
      <h2>Buttons</h2>
      <div className="features">
        <div className="feature-col">
          <h3>Variants</h3>
          <ul>
            <li>success</li>
            <li>warning</li>
            <li>error</li>
            <li>(default)</li>
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
            <li>onClick</li>
          </ul>
        </div>
      </div>
      <div className="component-list">
        <Button onClick={()=> console.log("clocked")}>Standard Button</Button>
        <Button size="lg">Large Button</Button>
        <Button size="sm">Small Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
    </>
  );
}

export default ButtonPage;
