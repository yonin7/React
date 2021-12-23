import React from 'react'
import './button.css'


const Button=({handleClick, name})=> {
    return (
        <div>
            <button className="button" onClick={()=>handleClick()}>{name}</button>
        </div>
    )
}

export default Button