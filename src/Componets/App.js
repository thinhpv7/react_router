import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './../Css/App.css';
import Nav from './Nav'
import Footer from './Footer'
import DieuHuongURL from '../Router/DieuHuongURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          {/* <Home/> */}
          {/* <News/> */}
          {/* <News_Detail/> */}
          {/* <Contact/> */}
          <DieuHuongURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
