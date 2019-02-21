import React, { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/sliders/Slider';
// import './App.css';
// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <Footer/>
      </div>
    );
  }
}

export default App;
