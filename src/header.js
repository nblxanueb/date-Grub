import React, { Component } from "react";
import image from "./image.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
