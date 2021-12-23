import React from "react";
import Store from "../Store"
import { Link } from "react-router-dom";
import './ProductDetail.css'


const ProductDetail=(props)=>{
    const data=Store;
    const productData= data.find((product)=>{
        if(product.id === Number(props.match.params.id))
            return product      
    })
    return (
    <div className="ProductDetailContainer">
        <h3 className="title">{productData.title}</h3> 
        <img className="img" src={productData.imageUrl}/>
        <p className='price'>Price: {productData.price}</p>
        <Link className="btn back" to='/products'>back</Link>
    </div>
    )
}
export default ProductDetail