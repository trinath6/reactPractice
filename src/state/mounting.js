import { Component } from "react";
import Lode from "../cssusage/Spinner";
import Card from "./card";
import axios from "axios";
import "./edit.css";

class MountingUsage extends Component {
   constructor() {
      super();
      this.state = {
         message: "good morning",
         products: []
      };
   }
   
   componentDidMount() {
      this.fetchProducts("electronics"); 
   }

   fetchProducts = (category) => {
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
         .then(response => {
            if (response.status === 200) {
               this.setState({
                  products: response.data
               });
            } else {
               alert("Data not fetched");
            }
         })
         .catch(error => {
            console.error("Error fetching data:", error);
            alert("Data not fetched");
         });
   }

   fetchProducts1 = () => {
    axios.get(`https://fakestoreapi.com/products`)
       .then(response => {
          if (response.status === 200) {
             this.setState({
                products: response.data
             });
          } else {
             alert("Data not fetched");
          }
       })
       .catch(error => {
          console.error("Error fetching data:", error);
          alert("Data not fetched");
       });
 }

   mens = () => {
      this.fetchProducts("men's clothing"); 
   }

   jewelry = () => {
      this.fetchProducts("jewelery");
   }

   all=()=>{
    this.fetchProducts1(); 
   }

   render() {
      return (
         <>
            
            {this.state.products.length > 0
               ?
               <>
               <div>
               <button className="btn1" onClick={this.mens}>Mens</button>
                <button className="btn2" onClick={this.jewelry}>jewelry</button>
                <button className="btn3" onClick={this.all}>all</button>
                </div>
                {
                this.state.products.map((product, index) => (
                  <div className="cards">
                  <Card key={index} product={product}/>
                  </div>
               ))}</>
               : <Lode />}
         </>
      );
   }
}

export default MountingUsage;

