import React, { Component } from "react";
import yelp from "./yelp.png";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <p className="footer-text"> powered by <a href="https://www.yelp.com/"><img src={yelp} className="yelp" alt="yelp"/></a> made by <a href="http://www.andrep.co" className="footer-link">A.Pykhantsev © 2018</a></p>
      </footer>
    );
  }
}

export default Footer;
