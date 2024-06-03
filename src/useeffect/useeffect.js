import axios from "axios";
import { useEffect, useState } from "react";
import "./useeffect.css"

let UseEffect1 = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const checkUser = (event) => {
    let searchValue = event.target.value;
    setSearchTerm(searchValue);
    console.log(searchValue);
  };

  const submited = (event) => {
    event.preventDefault();
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={submited}>
        <div className="mb-3 mt-3">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            name="search"
            onChange={checkUser}
            value={searchTerm}
          />
        </div>
      </form>
      <div className="cards"> 
        {filteredProducts.map((product) => (
          <div key={product.id} className="card" style={{ width: 400, margin: "10px auto" }}>
            <img className="card-img-top" src={product.image} alt={product.title} />
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect1;
