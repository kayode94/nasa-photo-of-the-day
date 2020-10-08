import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import PageTitle from './PageTitle'
import NasaInfo from './NasaInfo'
import NasaPictures from './Pictures'
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
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
      {<NasaPictures url = {nasaData.url}/>}
      {<PageTitle title = {nasaData.title} date = {nasaData.date}/>}
      {<NasaInfo explanation = {nasaData.explanation}/>}
    </div>
  );
}

export default App;
