import "./Testimonial.css"
import logo from "./Mark.png"
import work from "./Work.png"
import cation from "./cation.png"
import smallBox from "./small-box.png"

function TestimonialSimple({children, person, personTitle, onClick = () => {}}) {
  return (
    <div onClick={onClick} className="testimonial--simple-card testimonial--light-background">
      <div className="testimonial--label">
        <img className="testimonial--logo" alt="workcation logo" src={logo}></img>
        <div className="testimonial--workcation">
          <img id="testimonial--work" src={work}></img>
          <img id="testimonial--cation" src={cation}></img>
        </div>
      </div>
      <h1>{children}</h1>
      <div className="testimonial--signature">
        <h3>{person}</h3><p className="testimonial--separator"> / </p> <h3 className="testimonial--title">{personTitle}</h3>
      </div>
      <div className="testimonial--grid-feature" style={{ 
        backgroundImage: `url(${smallBox})`,   

      }}>
      </div>
    </div>
  )
}

export default TestimonialSimple