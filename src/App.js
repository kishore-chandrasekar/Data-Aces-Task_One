import logo from './logo.svg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import "./App.css"





function App() {
  const [data, setData] = useState([])
  useEffect(async () => {
    try {
      let userData = await axios.get("https://api.github.com/search/repositories?q=language:Javascript");
      setData(userData.data.items)

    } catch (error) {
      console.log(error)
    }
  },[])

 console.log(data)
  return (
    <div className='app' >
      
     <div className='app__container'>
     {data.map(ele=>
        <Card obj={ele}></Card>
      )}
     
     </div>

    </div>
  );
}

export default App;

// let abc = data.items