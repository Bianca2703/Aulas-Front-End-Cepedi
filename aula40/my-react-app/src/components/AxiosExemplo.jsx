import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExemplo(){
      const [data, setData] = useState([]);
    
      useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(response => setData(response.data))
          .catch(error => console.error(error));
      }, []);
    
      return (
        <>
          {data.map((data) => (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          ))}
        </>
      );
    }


export default AxiosExemplo;