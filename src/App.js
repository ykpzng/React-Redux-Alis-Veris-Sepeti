import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Cart from "./components/Cart"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </div>
      </BrowserRouter>
    )
  }
}
