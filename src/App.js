import React, { Component } from 'react';
import './App.css';
import Home from './containers/index';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div className="topBar"></div>
      <b style={{position: 'fixed', top: 10, left: 40,zIndex: 11}}>Gobby</b>
      <div style={{position: 'fixed', top: 350,left: 10, zIndex:11, transform: 'rotate(-90deg)'}}><b>menu</b> <b style={{position: "absolute", right:350, bottom: 0}}>scroll<i><i><i>^</i></i></i></b></div>
        <div className="sideNav"></div>
        <div className="sideNavRight"></div>
        <div className="endBar"></div>
        <Home/>
      </div>
// 2ab7ca
    );
  }
}
export default App;
