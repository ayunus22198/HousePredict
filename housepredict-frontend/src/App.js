import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component
{
  handleSubmit(e) {
    e.preventDefault()

    axios.get("/api/predict-price")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("axios error: " + error);
    });
  }

  render() {
    // Five text inputs
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h2> Predict Boston Home Price </h2>

          <label>Total area:</label>
          <input type="number" name="totalArea" /><br />

          <label>Crime rate:</label>
          <input type="number" name="crimeRate" /><br />

          <label>Age:</label>
          <input type="number" name="age" /><br />

          <label>Rooms:</label>
          <input type="number" name="rooms" /><br />

          <label>Property tax:</label>
          <input type="number" name="propertyTax" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div id="answer">
        </div>
      </div>
    );
  }
}

export default App;
