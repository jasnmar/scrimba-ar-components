import "./Testimonial.css"
import quote from "./quote.png"

function TestimonialImage({children, image, person, personTitle, onClick = () => {}}) {
  console.log('image: ', image)
  return (
    <div onClick={onClick} className="testimonial--image-card testimonial--dark-background">
      <img className="testimonial--headshot" alt="headshot" src={image}></img>
      <div className="testimonial--image-text-content">
        <img src={quote}></img>
        <h1>{children}</h1>
          <h3>{person}</h3>
          <h3 className="testimonial--image-title">{personTitle}</h3>
      </div>
    </div>
  )
}

export default TestimonialImage