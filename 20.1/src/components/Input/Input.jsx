import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Input() {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const controller = new AbortController();
            const movieAPI = async () => {
          const res = await axios.get('https://randomuser.me/api/?results=1000',{
            signal: controller.signal})
            setData(res);
         };
      movieAPI();
      setData(data);
      return()=>{
          controller.abrot()
      }}
      catch(e){return e.errorMessage}
    }, []);
  
    const convertData = () => {
      return JSON.stringify(data);
    };
    return (
        <div>
            {convertData()}
        </div>
    )
}

export default Input
