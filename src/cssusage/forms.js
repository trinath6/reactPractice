import image  from  '../Images/_MG_0250.JPG'
let Forms = () => {
  return(
    // <>
    // <img src={image} alt='' height={150} />
    // </>
    <div className="card" style={{ width: 400 }}>
  <img className="card-img-top" src={image} height={600} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">Trinath Reddy</h4>
    <p className="card-text">EBONY</p>
    <a href="https://www.instagram.com/__.trinathreddy.__?igsh=Z2RlcHZmZm54cml0" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>
  )
};
export default Forms;
