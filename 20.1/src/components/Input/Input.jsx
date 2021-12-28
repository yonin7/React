import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Input() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const controller = new AbortController();    
      const movieAPI = async () => {
        try{
            const res = await axios.get('https://randomuser.me/api/?results=1000',{
            signal: controller.signal}
            )
            console.log(res.data.results);
            setData(res.data.results);
          } catch(e){return e.errorMessage}
      }
        
      movieAPI();
      setData(data);
      return()=>{
        controller.abrot()
        }

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
