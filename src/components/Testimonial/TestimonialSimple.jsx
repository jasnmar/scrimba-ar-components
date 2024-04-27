import "./Testimonial.css"
import logo from "./Mark.png"
import work from "./Work.png"
import cation from "./cation.png"
import smallBox from "./small-box.png"

function TestimonialSimple({children, person, personTitle, onClick = () => {}}) {
  //Variants = simple / image
  return (
    <div onClick={onClick} className="testimonial--card">
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
      <div style={{ 
        backgroundImage: `url(${smallBox})`,   
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "60%",
        width: "14%",
      }}>
      </div>
    </div>
  )
}

export default TestimonialSimple