import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component
{
  submitData() {
    axios.get("http://127.0.0.1:5000/predict-price")
    .then((result) => {
      console.log(result);
    });
  }

  render() {
    // Five text inputs
    return (
      <div className="App">
        <h2> Predict Boston Home Price </h2>
        <form onSubmit={this.submitData}>
          <label>Total area: <input type="number" name="totalArea" /></label><br />
          <label>Crime rate: <input type="number" name="crimeRate" /></label><br />
          <label>Age: <input type="number" name="age" /></label><br />
          <label>Rooms: <input type="number" name="rooms" /></label><br />
          <label>Property tax: <input type="number" name="propertyTax" /></label><br />
          <input type="submit" value="Submit" />
        </form>
        <div id="answer">
        </div>
      </div>
    );
  }
}

export default App;
