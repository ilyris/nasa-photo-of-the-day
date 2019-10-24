import React from "react";
import "./App.css";
import NasaPOTD from './components/NasaPhotoOfTheDay';

function App() {
  //' Set our API data to slice of state.
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaPOTD/>
    </div>
  );
}
export default App;
