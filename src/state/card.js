
import "./card.css"
let Card=(props)=>{
    let {image,title}=props.product
    console.log(props)
    return(
        <div className="body">
        <div className="card" style={{ width: 400 }}>
        <img className="card-img-top" src={image} style={{height:150,width:150}} alt="Card image" />
        <div className="card-body">
          <p className="card-title">{title}</p>
          </div>
        </div>
      </div>
    )
}

export default Card