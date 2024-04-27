import Card from "./Card";

function CardPage() {
  return (
    <>
    <h2>Cards</h2>
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
      <Card title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
    </>
  )
}

export default CardPage