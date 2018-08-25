import React, { Component } from "react";
import MapContainer from "../MapContainer";
import Popup from "reactjs-popup";

class Restaurant extends Component {
      constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      search: "",
      restaurants: [],
      location: "",
      price: "",
      type: "",
    };
    // this.apiData = this.apiData.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
   setLocation(location) {
    this.setState({location})
 }

setType(type) {
    this.setState({type})
 }


setDinner = () => {
  this.setState({
    search: this.state.search = "dinner"
    })
}

setCoffee = () => {
  this.setState({
    search: this.state.search = "coffee"
    })
}

setDrinks = () => {
  this.setState({
    search: this.state.search = "drinks"
    })
}

set1 = () => {
  this.setState({
    price: this.state.price = "1"
    })
}

set2 = () => {
  this.setState({
    price: this.state.price = "1,2"
    })
}

set3 = () => {
  this.setState({
    price: this.state.price = "1,2,3"
    })
}

set4 = () => {
  this.setState({
    price: this.state.price = "1,2,3,4"
    })
}
  render() {
    return (
    <div>
        <button onClick={this.setCoffee}>coffee</button>
        <button onClick={this.setDrinks}>drinks</button>
        <button onClick={this.setDinner}>dinner</button>
        {/* <br></br> */}
        <button onClick={this.set1}>$</button>
        <button onClick={this.set2}>$$</button>
        <button onClick={this.set3}>$$$</button>
        <button onClick={this.set4}>$$$$</button>
        <br></br>
        <select value={this.state.type} onChange={event => this.setType(event.target.value)} placeholder="type of food">
            <option value=""></option>
            <option>african</option>
            <option>american</option>
            <option>australian</option>
            <option>breakfast</option>
            <option>burgers</option>
            <option>cafes</option>
            <option>caribbean</option>
            <option>comfort food</option>
            <option>chinese</option>
            <option>cuban</option>
            <option>dominican</option>
            <option>french</option>
            <option>german</option>
            <option>greek</option>
            <option>indian</option>
            <option>italian</option>
            <option>japanese</option>
            <option>korean</option>
            <option>kosher</option>
            <option>mediterranean</option>
            <option>mexican</option>
            <option>moroccan</option>
            <option>pizza</option>
            <option>portuguese</option>
            <option>russian</option>
            <option>seafood</option>
            <option>soul food</option>
            <option>southern</option>
            <option>vegetarian</option>
            <option>vietnamese</option>
        </select>
        <br></br>
        <input type="text" value={this.state.location} onChange={event => this.setLocation(event.target.value)} placeholder="City or ZIP"/>
        <br></br>
        {/* <button onClick={this.onSubmit}>submit</button> */}
    </div>
  );
}
}

export default Restaurant;
