import Testimonial from "./index";
import headShot from "./headshot.png";

function TestimonialPage() {
  return (
    <>
      <h2>Testimonial.Simple</h2>
      <div className="features">
        <div className="feature-col">
          <h3>Body</h3>
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
        <div className="feature-col">
          <h3>Person</h3>
          <ul>
            <li>person</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Title</h3>
          <ul>
            <li>personTitle</li>
          </ul>
        </div>
      </div>
      <Testimonial.Simple
        onClick={() => console.log("Testimonial Click")}
        person="May Andersons"
        personTitle="Workcation, CTO"
      >
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.”
      </Testimonial.Simple>
      <h2>Testimonial.Image</h2>
      <div className="features">
        <div className="feature-col">
          <h3>Body</h3>
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
        <div className="feature-col">
          <h3>Person</h3>
          <ul>
            <li>person</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Title</h3>
          <ul>
            <li>personTitle</li>
          </ul>
        </div>
      </div>
      <div className="feature-col">
        <h3>Image</h3>
        <ul>
          <li>image</li>
        </ul>
      </div>
      <Testimonial.Image
        onClick={() => console.log("Testimonial Click")}
        person="May Andersons"
        personTitle="Workcation, CTO"
        image={headShot}
      >
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.”
      </Testimonial.Image>
    </>
  );
}

export default TestimonialPage;
