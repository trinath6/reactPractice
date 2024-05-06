
let Carousel=()=>{
    return(
        <>
        {/* Carousel */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
         
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.zeebiz.com/sites/default/files/2017/12/06/26380-yamaha-official-website.jpg" height={700} alt="Los Angeles" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://images.ctfassets.net/x7j9qwvpvr5s/5m5o1m1peUUPiXNswdlCw9/2e1e894312e40db47d8cca9ba047631c/Panigale-V4-02-hero-1600x1000.jpg?fm=webp&q=90" height={700} alt="Chicago" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://imgd.aeplcdn.com/600x337/bw/ec/23468/Kawasaki-Ninja-ZX10R-2016-Cornering-72936.jpg?wm=2&q=75" height={700} alt="New York" className="d-block w-100" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </>
      

    )
}
export default Carousel