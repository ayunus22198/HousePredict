import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function AnswerComponent(props) {
  const answer = props.answer;
  if(answer) {
    return (
      <p>
        Estimated price of your Boston dream home: <b>{props.answer}$</b>
      </p>)
  }
  return (
    <p>
      Use the form above to predict the price of your home.
    </p>
  )
}

class App extends React.Component
{
  constructor(props) {
    super(props);

    // Initialize with an empty state.
    this.state = {};

    // Bind so that we can use 'this' in the callback.
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    const f = document.getElementById('predictForm');

    // Parameters to be sent to the server.
    const params = {
      crim: f['crim'].value,
      zn: f['zn'].value,
      indus: f['indus'].value,
      chas: f['chas'].value,
      nox: f['nox'].value,
      rm: f['rm'].value,
      age: f['age'].value,
      dis: f['dis'].value,
      rad: f['rad'].value,
      tax: f['tax'].value,
      ptratio: f['ptratio'].value,
      b: f['b'].value,
      lstat: f['lstat'].value,
    }

    axios.get( "/api/predict-price", { params })
      .then((result) => {
        this.setState({ answer: result.data.estimatedPrice });
      })
      .catch((error) => {
        console.log("axios error: " + error);
      });
  }

  render() {
    // Five text inputs
    return (
      <div className="App">
        <form id="predictForm" onSubmit={this.handleSubmit}>
          <h2> Predict Boston Home Price </h2>

          <label>CRIM:</label>
          <input type="string" name="crim" /><br />

          <label>ZN:</label>
          <input type="string" name="zn" /><br />

          <label>INDUS:</label>
          <input type="string" name="indus" /><br />

          <label>CHAS:</label>
          <input type="string" name="chas" /><br />

          <label>NOX:</label>
          <input type="string" name="nox" /><br />

          <label>RM:</label>
          <input type="string" name="rm" /><br />

          <label>AGE:</label>
          <input type="string" name="age" /><br />

          <label>DIS:</label>
          <input type="string" name="dis" /><br />

          <label>RAD:</label>
          <input type="string" name="rad" /><br />

          <label>TAX:</label>
          <input type="string" name="tax" /><br />

          <label>PTRATIO:</label>
          <input type="string" name="ptratio" /><br />

          <label>B:</label>
          <input type="string" name="b" /><br />

          <label>LSTAT:</label>
          <input type="string" name="lstat" /><br />
          <br />
          <br />
          <input type="submit" value="Estimate Price" />
          <br />
          <br />
          <hr />
          <AnswerComponent answer={this.state.answer} />
        </form>
      </div>
    );
  }
}

export default App;
