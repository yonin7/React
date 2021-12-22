import React from "react";
import Store from "../Store";
import { Link } from "react-router-dom";
import './Products.css'



class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    componentDidMount(){
         this.setState({data: Store});
    }

    displayProduct=()=>{
        const items =this.state.data
        return items.map((item)=>{
            return <Link className="product" key={item.id}  to={`/product/${item.id}`} >{item.title }</Link>;
            
        })
    }
    // 
    // <Link className="product" key={index}  to=`/product/${}` >{item.title } <img src={item.imageUrl} alt="item"/>{item.price}</Link>;
    
    render() {
        return <div className="container">
            {this.displayProduct()}
        </div> 

    }
  

}
export default Products