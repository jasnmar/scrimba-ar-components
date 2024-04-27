import Star from "./Star";

function StarPage() {
  return (
    <>
      <h2>Star</h2>
      <div className="features">
        <div className="feature-col">
          <h3>isOn</h3>
          <ul>
            <li>true</li>
            <li>false</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Functions</h3>
          <ul>
            <li>onClick(true / false)</li>
          </ul>
        </div>
      </div>
      <div className="component-list">
        <Star onClick={(val) => console.log('val: ', val)} /> <Star isOn="true" />
      </div>
    </>
  );
}

export default StarPage;
