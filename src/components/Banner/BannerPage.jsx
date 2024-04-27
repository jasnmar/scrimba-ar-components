import Banner from "./Banner";

function BannerPage() {
  return (
    <>
    <h2>Banners</h2>
    <div className="features">
        <div className="feature-col">
          <h3>Variants</h3>
          <ul>
            <li>success</li>
            <li>warning</li>
            <li>error</li>
            <li>neutral (default)</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Title</h3>
          <ul>
            <li>children</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Additional Text</h3>
          <ul>
            <li>detail</li>
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
          variant="neutral">
            Update available
        </Banner>
        <Banner variant="success">Congratulations!</Banner>
        <Banner variant="warning">Attention</Banner>
        <Banner variant="error">There is a problem with your application</Banner>
        <Banner variant="">Update available</Banner>
      </div>
    </>
  )
}

export default BannerPage