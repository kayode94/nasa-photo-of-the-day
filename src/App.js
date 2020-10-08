import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2015-03-14')
    .then(response=>{
      console.log(response)
      setNasaData(response.data)
    })
    .catch(error=>{
      console.log('THIS IS YOUR ERROR ----->', error)
    })    
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
