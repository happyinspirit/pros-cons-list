import React, { Component } from 'react';
import './App.css';
import {  } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
            <h1 className="col-md-6 pros">
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                Pros
            </h1>
            <h1 className="col-md-6 cons">
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                Cons
            </h1>
        </div>
      </div>
    );
  }
}



export default App;
