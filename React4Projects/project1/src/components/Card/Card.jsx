import React from 'react'
import Store from './imgArr'
import './card.css'

const Card=({imgIndex})=> {
    console.log(imgIndex);
    function imagesMapping(data){
        console.log(data);
       return data.find((img,index)=>{
            if(index==imgIndex)
            return img.imageUrl;
        })
    }
    return (
        <div  >
           <img className="image" src={ imagesMapping(Store).imageUrl}></img>
           <h2>{ imagesMapping(Store).title }</h2>
        </div>
    )
}

export default Card