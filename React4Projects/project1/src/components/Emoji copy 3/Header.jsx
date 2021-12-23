import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header=()=>{
    return (
    <div className="header">
        <Link className='btn home' to='/'>Home</Link>
        <Link className='btn products' to='/products'>Products</Link>

    </div>
    )
}
export default Header