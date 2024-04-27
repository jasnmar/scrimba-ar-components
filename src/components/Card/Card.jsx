import "./Card.css"
import Brand from "./Brand.png"

function Card({title, children, onClick = () => {}}) {
  return (
    <>
      <div onClick={onClick} className="card">
        <h1>{title}</h1>
      <h2>{children}</h2>
        <img className="brand" src={Brand} alt="brand logo"></img>
      </div>
    </>
  )
}

export default Card