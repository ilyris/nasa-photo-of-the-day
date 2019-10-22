import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import S from 'styled-components';
import NasaPOTD from './components/NasaPhotoOfTheDay';

function App() {
  //' Set our API data to slice of state.
const [data, setData] = useState([]);
const [dateValue, setDateValue] = useState('');

const handleDate = event => {
    setDateValue(event.target.value);
    console.log(dateValue);
    handleAPICall();

}
const handleAPICall = () => {
  axios.get(`https://api.nasa.gov/planetary/apod?date=${dateValue}&api_key=l160LWWTharY8cE8YDVDhY1S5ub7qAuSerze4Xu3`)
  .then( response => {
    console.log(response.data);
    setData(response.data);
  })
  .catch( error => {
    console.log(error);
  });
}

useEffect( () => {
  handleAPICall();
},[]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaPOTD nasaData={data} handleDate={handleDate} dateValue={dateValue}/>
    </div>
  );
}
export default App;
