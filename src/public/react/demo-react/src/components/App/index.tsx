import React, { Component } from 'react';
import './App.scss';
import AvengersList from './../AvengersList';

/**
 * This is our starting point, our first component
 * It renders another component
 * @class App
 * @extends {Component}
 * @returns { AvengersList } component
 */
class App extends Component {
  render() {
    /* rendering a div in which we wrap our AvengersList component */
    return (
      <div className='App'>
        <AvengersList></AvengersList>
      </div>
    );
  }
}
export default App;
