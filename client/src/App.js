import React, { Component } from 'react';
import './App.css';
import AvengersList from './components/AvengersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AvengersList></AvengersList>
      </div>
    );
  }
}
export default App;
