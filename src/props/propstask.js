import "./props.css"

let Card=(props)=>{
    let {category,image,price,title}=props
    return(
        <div className="full">
         <div className="card" style={{ width: 400 }}>
           <img className="card-img-top" style={{height:200,width:200}} src={image} alt="Card image" />
           <div className="card-body">
              <h4 className="card-title">{category}</h4>
              <p className="card-text">{title}</p>
              <p className="card-text">{price}</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
        </div>
    )
}

export default Card